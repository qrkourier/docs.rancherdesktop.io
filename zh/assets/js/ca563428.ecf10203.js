"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[8773],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),b=o,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),o=n(4334),a="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(3117),o=n(7294),a=n(4334),l=n(2389),u=n(7392),i=n(7094),s=n(2466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:b,groupId:m,className:f}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=b??h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,u.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,i.U)(),[O,E]=(0,o.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=m){const e=y[m];null!=e&&e!==O&&v.some((t=>t.value===e))&&E(e)}const D=e=>{const t=e.currentTarget,n=N.indexOf(t),r=v[n].value;r!==O&&(T(t),E(r),null!=m&&w(m,String(r)))},x=e=>{var t;let n=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":l},f)},v.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>N.push(e),onKeyDown:x,onClick:D},l,{className:(0,a.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===t})}),n??t)}))),n?(0,o.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function b(e){const t=(0,l.Z)();return o.createElement(d,(0,r.Z)({key:String(t)},e))}},2231:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});var r=n(3117),o=(n(7294),n(3905));n(5488),n(5162);const a={title:"\u529f\u80fd"},l=void 0,u={unversionedId:"ui/troubleshooting",id:"ui/troubleshooting",title:"\u529f\u80fd",description:"Troubleshooting",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/ui/troubleshooting.md",sourceDirName:"ui",slug:"/ui/troubleshooting",permalink:"/zh/next/ui/troubleshooting",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/ui/troubleshooting.md",tags:[],version:"current",frontMatter:{title:"\u529f\u80fd"},sidebar:"tutorialSidebar",previous:{title:"\u529f\u80fd",permalink:"/zh/next/ui/images"},next:{title:"Diagnostics",permalink:"/zh/next/ui/diagnostics"}},i={},s=[{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Show Logs",id:"show-logs",level:3},{value:"Enable Debug Mode",id:"enable-debug-mode",level:4},{value:"Reset Kubernetes",id:"reset-kubernetes",level:3},{value:"Factory Reset",id:"factory-reset",level:3}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h3",{id:"show-logs"},"Show Logs"),(0,o.kt)("p",null,"\u4f7f\u7528\u6b64\u9009\u9879\u6253\u5f00\u5305\u542b\u6240\u6709 Rancher Desktop \u65e5\u5fd7\u6587\u4ef6\u7684\u6587\u4ef6\u5939\u3002"),(0,o.kt)("h4",{id:"enable-debug-mode"},"Enable Debug Mode"),(0,o.kt)("p",null,"\u542f\u7528 debug \u7ea7\u522b\u65e5\u5fd7\u8bb0\u5f55\u3002"),(0,o.kt)("h3",{id:"reset-kubernetes"},"Reset Kubernetes"),(0,o.kt)("p",null,"\u91cd\u7f6e Kubernetes \u5e76\u5220\u9664\u6240\u6709\u5de5\u4f5c\u8d1f\u8f7d\u548c\u914d\u7f6e\u3002\u5728\u91cd\u7f6e\u4e4b\u524d\uff0c\u7528\u6237\u4f1a\u770b\u5230\u786e\u8ba4\u4fe1\u606f\u4ee5\u53ca\u5220\u9664\u5bb9\u5668\u955c\u50cf\u7684\u9009\u9879\u3002"),(0,o.kt)("p",null,"\u8981\u91cd\u7f6e Kubernetes\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Reset Kubernetes"),"\uff0c\u7136\u540e\uff0c\u4f60\u4f1a\u770b\u5230\u4e00\u4e2a\u786e\u8ba4\u7a97\u53e3\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u9009\u62e9\u662f\u5426\u540c\u65f6\u5220\u9664\u5bb9\u5668\u955c\u50cf\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Reset"),"\u3002Kubernetes \u4f1a\u505c\u6b62\u5e76\u91cd\u65b0\u542f\u52a8\u3002")),(0,o.kt)("h3",{id:"factory-reset"},"Factory Reset"),(0,o.kt)("p",null,"\u5220\u9664\u96c6\u7fa4\u548c\u6240\u6709\u5176\u4ed6 Rancher Desktop \u8bbe\u7f6e\u3002\u5fc5\u987b\u518d\u6b21\u6267\u884c\u521d\u59cb\u8bbe\u7f6e\u6d41\u7a0b\u3002"),(0,o.kt)("p",null,"\u8981\u6062\u590d\u51fa\u5382\u8bbe\u7f6e\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Reset"),"\u3002\u7136\u540e\uff0c\u4f60\u4f1a\u770b\u5230\u4e00\u4e2a\u786e\u8ba4\u7a97\u53e3\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u9009\u62e9\u662f\u5426\u4fdd\u7559\u7f13\u5b58\u7684 Kubernetes \u955c\u50cf\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Factor Reset"),"\u3002Kubernetes \u4f1a\u505c\u6b62\uff0cRancher Desktop \u4f1a\u5173\u95ed\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u518d\u6b21\u542f\u52a8 Rancher Desktop\u3002")))}p.isMDXComponent=!0}}]);