"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7270],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return a?i.createElement(g,r(r({ref:t},p),{},{components:a})):i.createElement(g,r({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},30303:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=a(87462),n=(a(67294),a(3905));const o={title:"SaaS Insight for Building a Real-time CRM Application",description:"This article describes how to building a real-time CRM application in a better way. Includes the potential database solutions.",image:"./thumbnail.png",date:new Date("2022-05-01T00:00:00.000Z"),authors:["ilovesoup"],tags:["tidb"]},r=void 0,s={permalink:"/blog/saas-insight-for-building-a-real-time-crm-application",editUrl:"https://github.com/pingcap/ossinsight/edit/main/web/blog/saas-insight-for-building-a-real-time-crm-application/index.md",source:"@site/blog/saas-insight-for-building-a-real-time-crm-application/index.md",title:"SaaS Insight for Building a Real-time CRM Application",description:"This article describes how to building a real-time CRM application in a better way. Includes the potential database solutions.",date:"2022-05-01T00:00:00.000Z",formattedDate:"May 1, 2022",tags:[{label:"tidb",permalink:"/blog/tags/tidb"}],readingTime:2.72,hasTruncateMarker:!1,authors:[{name:"ilovesoup",title:"PMM of PingCAP",url:"https://github.com/ilovesoup",imageURL:"https://github.com/ilovesoup.png",key:"ilovesoup"}],frontMatter:{title:"SaaS Insight for Building a Real-time CRM Application",description:"This article describes how to building a real-time CRM application in a better way. Includes the potential database solutions.",image:"./thumbnail.png",date:"2022-05-01T00:00:00.000Z",authors:["ilovesoup"],tags:["tidb"]},prevItem:{title:"Explore Deep in 4.6 Billion GitHub Events",permalink:"/blog/explore-deep-in-4.6-billion-github-events"},nextItem:{title:"Use TiDB Cloud to Analyze GitHub Events in 10 Minutes",permalink:"/blog/try-it-yourself"}},l={image:a(76979).Z,authorsImageUrls:[void 0]},d=[{value:"Background",id:"background",level:2},{value:"Potential Database Solutions",id:"potential-database-solutions",level:2},{value:"How to get real-time insights",id:"how-to-get-real-time-insights",level:2}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Providing insights on large volume of email data might not be as easy as we thought. While data coming in real-time, indices and metadata are to be built consistently. To make things worse, the data volume is beyond traditional single node databases' reach.")),(0,n.kt)("h2",{id:"background"},"Background"),(0,n.kt)("p",null,"To store large volumes of real-time user data like email and provide insights is not easy. If your application is layered on top of Gmail to automatically extract and organize the useful information buried inside of our inboxes."),(0,n.kt)("p",null," It became clear that they were going to need a better system for organizing terabytes of email metadata to power collaboration as their customer base rapidly increased, it is not easy to provide insights. You need to organize email data by first applying a unique identifier to the emails and then proactively indexing the email metadata. The unique identifier is what connects the same email headers across. For each email inserted in real-time, the system extracts meta information from it and builds indices for high concurrent access. When data volume is small, it's all good: traditional databases provide all you need. However, when data size grows beyond a single node's capacity, everything becomes very hard."),(0,n.kt)("h2",{id:"potential-database-solutions"},"Potential Database Solutions"),(0,n.kt)("p",null,"Regarding databases, there are some options you might consider:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"NoSQL database.")," While fairly scalable, it does not provide you indexing and comprehensive query abilities. You might end up implementing them in your application code."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Sharing cluster of databases.")," Designing sharding key and paying attention to the limitations between shards are painful. It might be fine for applications with simple schema designs, but it will be too complicated for CRM. Moreover, it's very hard to maintain."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Analytical databases.")," They are fine for dashboard and reporting. But not fine for high concurrent updates and index based serving.")),(0,n.kt)("h2",{id:"how-to-get-real-time-insights"},"How to get real-time insights"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/tidb/stable/overview?utm_source=ossinsight&utm_medium=referral"},"TiDB")," is a distributed database with user experience of traditional databases. It looks like a super large MySQL without the limitations of NoSQL and sharding cluster solutions. With TiDB, you can simply have the base information, indices and metadata being updated in a concurrent manner with the help of cross-node transaction ability. "),(0,n.kt)("p",null,"To build such a system, you just need following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Create schemas")," according to your access pattern with indices on user name, organization, job title etc."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Use streaming system")," to gather and extract meta information from your base data"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Insert into TiDB via ordinary MySQL client driver like JDBC.")," You might want to gather data in small batches of hundreds of rows to speed up ingestion. In a single transaction, updates on base data, indices and meta information are guaranteed to be consistent."),(0,n.kt)("li",{parentName:"ol"},"Optionally, ",(0,n.kt)("strong",{parentName:"li"},"deploy a couple of ",(0,n.kt)("a",{parentName:"strong",href:"https://docs.pingcap.com/tidb/stable/tiflash-overview?utm_source=ossinsight&utm_medium=referral"},"TiFlash")," nodes")," to speed up large scale reporting queries."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Access the data")," just like in MySQL and you are all done. SQL features for analytics like aggregations, multi-joins or window functions are all supported with great performance.")),(0,n.kt)("p",null,"For more cases, please see ",(0,n.kt)("a",{parentName:"p",href:"https://en.pingcap.com/customers/?utm_source=ossinsight&utm_medium=referral"},"here"),"."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("h3",{parentName:"admonition",id:"-details-in-how-oss-insight-works"},"\ud83c\udf1f Details in how OSS Insight works"),(0,n.kt)("p",{parentName:"admonition"},"Go to read ",(0,n.kt)("a",{parentName:"p",href:"/blog/try-it-yourself"},"Use TiDB Cloud to Analyze GitHub Events in 10 Minutes")," and use the ",(0,n.kt)("a",{parentName:"p",href:"https://tidbcloud.com/free-trial?utm_source=ossinsight&utm_medium=referral"},"Developer Tier")," ",(0,n.kt)("strong",{parentName:"p"},"free")," for 1 year."),(0,n.kt)("p",{parentName:"admonition"},"You can find how we deal with massive github data in ",(0,n.kt)("a",{parentName:"p",href:"/blog/how-it-works"},"Data Preparation for Analytics")," as well!")))}u.isMDXComponent=!0},76979:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/thumbnail-dd2b534d2a2bc532868d0e15b92f4b1d.png"}}]);