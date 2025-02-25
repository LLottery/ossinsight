WITH repos AS (
    SELECT gr.repo_id
    FROM github_repos gr
    WHERE
        gr.owner_id = {{ownerId}}
        {% if repoIds.size > 0 %}
        AND gr.repo_id IN ({{ repoIds | join: ',' }})
        {% endif %}
), opened_prs_by_period AS (
     SELECT
         {% case period %}
             {% when 'past_7_days' %} TIMESTAMPDIFF(DAY, created_at, NOW()) DIV 7
             {% when 'past_28_days' %} TIMESTAMPDIFF(DAY, created_at, NOW()) DIV 28
             {% when 'past_90_days' %} TIMESTAMPDIFF(DAY, created_at, NOW()) DIV 90
             {% when 'past_12_months' %}  TIMESTAMPDIFF(MONTH, created_at, NOW()) DIV 12
         {% endcase %} AS period,
         COUNT(*) AS prs
     FROM github_events ge
     WHERE
        ge.repo_id IN (SELECT repo_id FROM repos)
        AND ge.type = 'PullRequestEvent'
        AND ge.action = 'opened'
        {% case period %}
            {% when 'past_7_days' %} AND created_at > (NOW() - INTERVAL 14 DAY)
            {% when 'past_28_days' %} AND created_at > (NOW() - INTERVAL 56 DAY)
            {% when 'past_90_days' %} AND created_at > (NOW() - INTERVAL 180 DAY)
            {% when 'past_12_months' %} AND created_at > (NOW() - INTERVAL 24 MONTH)
        {% endcase %}
    GROUP BY period
), current_period_prs AS (
    SELECT prs FROM opened_prs_by_period WHERE period = 0
), past_period_prs AS (
    SELECT prs FROM opened_prs_by_period WHERE period = 1
)
SELECT
    IFNULL(cpp.prs, 0) AS current_period_total,
    IFNULL(ppp.prs, 0) AS past_period_total,
    ROUND((cpp.prs - ppp.prs) / ppp.prs * 100, 2) AS growth_percentage
FROM current_period_prs cpp
LEFT JOIN past_period_prs ppp ON 1 = 1
;

