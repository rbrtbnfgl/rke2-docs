"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[110],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=u(r),f=c,h=p["".concat(s,".").concat(f)]||p[f]||l[f]||o;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,i=new Array(o);i[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:c,i[1]=a;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4801:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l}});var n=r(7462),c=r(3366),o=(r(7294),r(3905)),i=["components"],a={},s="1. Record architecture decisions",u={unversionedId:"adrs/record-architecture-decisions",id:"adrs/record-architecture-decisions",title:"1. Record architecture decisions",description:"Date: 2022-01-26",source:"@site/docs/adrs/001-record-architecture-decisions.md",sourceDirName:"adrs",slug:"/adrs/record-architecture-decisions",permalink:"/adrs/record-architecture-decisions",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/adrs/001-record-architecture-decisions.md",tags:[],version:"current",lastUpdatedAt:1669155923,formattedLastUpdatedAt:"11/22/2022",sidebarPosition:1,frontMatter:{}},d={},l=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],p={toc:l};function f(e){var t=e.components,r=(0,c.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1-record-architecture-decisions"},"1. Record architecture decisions"),(0,o.kt)("p",null,"Date: 2022-01-26"),(0,o.kt)("h2",{id:"status"},"Status"),(0,o.kt)("p",null,"Accepted"),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"We need to record the architectural decisions made on this project."),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("p",null,"We will use Architecture Decision Records, as ",(0,o.kt)("a",{parentName:"p",href:"http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions"},"described by Michael Nygard"),"."),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("p",null,"See Michael Nygard's article, linked above. For a lightweight ADR toolset, see Nat Pryce's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/npryce/adr-tools"},"adr-tools"),"."))}f.isMDXComponent=!0}}]);