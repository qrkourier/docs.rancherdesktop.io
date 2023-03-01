"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[5344],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(b,o(o({ref:t},c),{},{components:a})):n.createElement(b,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3687:function(e,t,a){var n=a(412);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",i=r?"macOS":l?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},5162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(4334),l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(3117),r=a(7294),l=a(4334),o=a(2389),i=a(7392),u=a(7094),s=a(2466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:a,block:o,defaultValue:d,values:m,groupId:b,className:v}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,i.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,u.U)(),[O,T]=(0,r.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=b){const e=y[b];null!=e&&e!==O&&g.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,a=N.indexOf(t),n=g[a].value;n!==O&&(x(t),T(n),null!=b&&w(b,String(n)))},S=e=>{var t;let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]??N[N.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},v)},g.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>N.push(e),onKeyDown:S,onClick:E},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":O===t})}),a??t)}))),a?(0,r.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},8395:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var n=a(3117),r=(a(7294),a(3905)),l=a(5488),o=a(5162),i=a(3687);const u={sidebar_label:"\u6545\u969c\u6392\u9664",title:"\u6545\u969c\u6392\u9664"},s=void 0,c={unversionedId:"ui/troubleshooting",id:"version-1.7/ui/troubleshooting",title:"\u6545\u969c\u6392\u9664",description:"Show Logs",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7/ui/troubleshooting.md",sourceDirName:"ui",slug:"/ui/troubleshooting",permalink:"/zh/1.7/ui/troubleshooting",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.7/ui/troubleshooting.md",tags:[],version:"1.7",frontMatter:{sidebar_label:"\u6545\u969c\u6392\u9664",title:"\u6545\u969c\u6392\u9664"},sidebar:"tutorialSidebar",previous:{title:"\u955c\u50cf",permalink:"/zh/1.7/ui/images"},next:{title:"\u8bca\u65ad",permalink:"/zh/1.7/ui/diagnostics"}},p={},d=[{value:"Show Logs",id:"show-logs",level:3},{value:"Enable Debug Mode",id:"enable-debug-mode",level:4},{value:"Reset Kubernetes",id:"reset-kubernetes",level:3},{value:"Factory Reset",id:"factory-reset",level:3}],m={toc:d};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"show-logs"},"Show Logs"),(0,r.kt)("p",null,"\u4f7f\u7528\u6b64\u9009\u9879\u6253\u5f00\u5305\u542b\u6240\u6709 Rancher Desktop \u65e5\u5fd7\u6587\u4ef6\u7684\u6587\u4ef6\u5939\u3002"),(0,r.kt)("h4",{id:"enable-debug-mode"},"Enable Debug Mode"),(0,r.kt)("p",null,"\u542f\u7528 debug \u7ea7\u522b\u65e5\u5fd7\u8bb0\u5f55\u3002"),(0,r.kt)("h3",{id:"reset-kubernetes"},"Reset Kubernetes"),(0,r.kt)("p",null,"\u91cd\u7f6e Kubernetes \u5e76\u5220\u9664\u6240\u6709\u5de5\u4f5c\u8d1f\u8f7d\u548c\u914d\u7f6e\u3002\u5728\u91cd\u7f6e\u4e4b\u524d\uff0c\u7528\u6237\u4f1a\u770b\u5230\u786e\u8ba4\u4fe1\u606f\u4ee5\u53ca\u5220\u9664\u5bb9\u5668\u955c\u50cf\u7684\u9009\u9879\u3002"),(0,r.kt)("p",null,"\u8981\u91cd\u7f6e Kubernetes\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Reset Kubernetes"),"\uff0c\u7136\u540e\uff0c\u4f60\u4f1a\u770b\u5230\u4e00\u4e2a\u786e\u8ba4\u7a97\u53e3\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u9009\u62e9\u662f\u5426\u540c\u65f6\u5220\u9664\u5bb9\u5668\u955c\u50cf\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Reset"),"\u3002Kubernetes \u4f1a\u505c\u6b62\u5e76\u91cd\u65b0\u542f\u52a8\u3002")),(0,r.kt)("h3",{id:"factory-reset"},"Factory Reset"),(0,r.kt)("p",null,"\u5220\u9664\u96c6\u7fa4\u548c\u6240\u6709\u5176\u4ed6 Rancher Desktop \u8bbe\u7f6e\u3002\u5fc5\u987b\u518d\u6b21\u6267\u884c\u521d\u59cb\u8bbe\u7f6e\u6d41\u7a0b\u3002"),(0,r.kt)("p",null,"\u8981\u6062\u590d\u51fa\u5382\u8bbe\u7f6e\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Reset"),"\u3002\u7136\u540e\uff0c\u4f60\u4f1a\u770b\u5230\u4e00\u4e2a\u786e\u8ba4\u7a97\u53e3\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u9009\u62e9\u662f\u5426\u4fdd\u7559\u7f13\u5b58\u7684 Kubernetes \u955c\u50cf\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Factory Reset"),"\u3002Kubernetes \u4f1a\u505c\u6b62\uff0cRancher Desktop \u4f1a\u5173\u95ed\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u518d\u6b21\u542f\u52a8 Rancher Desktop\u3002")),(0,r.kt)(l.Z,{groupId:"os",defaultValue:i.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/ui-main/Windows_Troubleshooting.png",alt:null}))),(0,r.kt)(o.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/ui-main/macOS_Troubleshooting.png",alt:null}))),(0,r.kt)(o.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/ui-main/Linux_Troubleshooting.png",alt:null})))))}b.isMDXComponent=!0}}]);