"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[9440],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return b}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),b=r,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||o;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3687:function(e,t,a){var n=a(412);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",i=r?"macOS":o?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},5162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(4334),o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(3117),r=a(7294),o=a(4334),l=a(2389),i=a(7392),s=a(7094),u=a(2466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:a,block:l,defaultValue:p,values:b,groupId:m,className:f}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=b??v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,i.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[O,T]=(0,r.useState)(k),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=m){const e=y[m];null!=e&&e!==O&&g.some((t=>t.value===e))&&T(e)}const N=e=>{const t=e.currentTarget,a=E.indexOf(t),n=g[a].value;n!==O&&(x(t),T(n),null!=m&&w(m,String(n)))},S=e=>{var t;let a=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;a=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=E[t]??E[E.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},f)},g.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>E.push(e),onKeyDown:S,onClick:N},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":O===t})}),a??t)}))),a?(0,r.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function b(e){const t=(0,l.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},623:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(3117),r=(a(7294),a(3905)),o=a(5488),l=a(5162),i=a(3687);const s={sidebar_label:"Troubleshooting",title:"Troubleshooting"},u=void 0,c={unversionedId:"ui/troubleshooting",id:"version-latest/ui/troubleshooting",title:"Troubleshooting",description:"Show Logs",source:"@site/versioned_docs/version-latest/ui/troubleshooting.md",sourceDirName:"ui",slug:"/ui/troubleshooting",permalink:"/ui/troubleshooting",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/ui/troubleshooting.md",tags:[],version:"latest",frontMatter:{sidebar_label:"Troubleshooting",title:"Troubleshooting"},sidebar:"tutorialSidebar",previous:{title:"Images",permalink:"/ui/images"},next:{title:"Diagnostics",permalink:"/ui/diagnostics"}},d={},p=[{value:"Show Logs",id:"show-logs",level:3},{value:"Enable Debug Mode",id:"enable-debug-mode",level:4},{value:"Reset Kubernetes",id:"reset-kubernetes",level:3},{value:"Factory Reset",id:"factory-reset",level:3}],b={toc:p};function m(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"show-logs"},"Show Logs"),(0,r.kt)("p",null,"Use this option to open the folder containing all Rancher Desktop log files."),(0,r.kt)("h4",{id:"enable-debug-mode"},"Enable Debug Mode"),(0,r.kt)("p",null,"Enable debug level logging."),(0,r.kt)("h3",{id:"reset-kubernetes"},"Reset Kubernetes"),(0,r.kt)("p",null,"Reset Kubernetes and remove all workloads and configurations. Before the reset occurs, users are presented with a confirmation and the option to also delete container images."),(0,r.kt)("p",null,"To reset Kubernetes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Reset Kubernetes"),". A confirmation window appears."),(0,r.kt)("li",{parentName:"ol"},"Optional: select whether to also delete container images."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Reset")," to proceed. Kubernetes stops and starts again.")),(0,r.kt)("h3",{id:"factory-reset"},"Factory Reset"),(0,r.kt)("p",null,"Remove the cluster and all other Rancher Desktop settings. To continue The initial setup procedure must be done again."),(0,r.kt)("p",null,"To perform a factory reset:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Reset"),". A confirmation window appears."),(0,r.kt)("li",{parentName:"ol"},"Optional: select whether cached Kubernetes images are kept."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Factory Reset")," to proceed. Kubernetes stops and Rancher Desktop closes."),(0,r.kt)("li",{parentName:"ol"},"Optional: start Rancher Desktop again.")),(0,r.kt)(o.Z,{groupId:"os",defaultValue:i.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3600).Z,width:"926",height:"593"}))),(0,r.kt)(l.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(7230).Z,width:"2104",height:"1424"}))),(0,r.kt)(l.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8981).Z,width:"940",height:"626"})))))}m.isMDXComponent=!0},8981:function(e,t,a){t.Z=a.p+"assets/images/Linux_Troubleshooting-3276f1021e2b723b55d0658655b09972.png"},3600:function(e,t,a){t.Z=a.p+"assets/images/Windows_Troubleshooting-59646ce01c6a894170f1d1d3312f2fe8.png"},7230:function(e,t,a){t.Z=a.p+"assets/images/macOS_Troubleshooting-42b4a59f245337c70816519bc7a5dc68.png"}}]);