"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[5124],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(4334),l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3117),a=n(7294),l=n(4334),i=n(2389),o=n(7392),u=n(7094),s=n(2466),c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:d,groupId:g,className:f}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??k.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,o.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===m?m:m??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,u.U)(),[w,O]=(0,a.useState)(h),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=g){const e=y[g];null!=e&&e!==w&&b.some((t=>t.value===e))&&O(e)}const I=e=>{const t=e.currentTarget,n=E.indexOf(t),r=b[n].value;r!==w&&(x(t),O(r),null!=g&&N(g,String(r)))},T=e=>{var t;let n=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},f)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>E.push(e),onKeyDown:T,onClick:I},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,a.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},4211:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s}});var r=n(3117),a=(n(7294),n(3905));n(5488),n(5162);const l={title:"\u529f\u80fd"},i=void 0,o={unversionedId:"ui/images",id:"ui/images",title:"\u529f\u80fd",description:"Images",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/ui/images.md",sourceDirName:"ui",slug:"/ui/images",permalink:"/zh/next/ui/images",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/ui/images.md",tags:[],version:"current",frontMatter:{title:"\u529f\u80fd"},sidebar:"tutorialSidebar",previous:{title:"\u529f\u80fd",permalink:"/zh/next/ui/port-forwarding"},next:{title:"\u529f\u80fd",permalink:"/zh/next/ui/troubleshooting"}},u={},s=[{value:"Images",id:"images",level:2},{value:"Scanning Images",id:"scanning-images",level:3},{value:"Adding Images",id:"adding-images",level:3},{value:"Pulling Images",id:"pulling-images",level:4},{value:"Building Images",id:"building-images",level:4}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"images"},"Images"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Images")," \u9009\u9879\u5361\u5141\u8bb8\u4f60\u7ba1\u7406\u865a\u62df\u673a\u4e0a\u7684\u955c\u50cf\u3002"),(0,a.kt)("p",null,"\u8981\u6539\u7528 nerdctl \u7ba1\u7406\u955c\u50cf\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/next/tutorials/working-with-images"},"\u955c\u50cf"),"\u3002"),(0,a.kt)("h3",{id:"scanning-images"},"Scanning Images"),(0,a.kt)("p",null,"\u6b64\u529f\u80fd\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquasecurity/trivy"},"Trivy")," \u6765\u626b\u63cf\u4f60\u7684\u955c\u50cf\uff0c\u4ece\u800c\u67e5\u627e\u6f0f\u6d1e\u548c\u914d\u7f6e\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u8981\u626b\u63cf\u955c\u50cf\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4ece\u955c\u50cf\u5217\u8868\u4e2d\uff0c\u627e\u5230\u8981\u626b\u63cf\u7684\u955c\u50cf\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > Scan"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5c06\u663e\u793a\u6309\u4e25\u91cd\u7a0b\u5ea6\u6392\u5e8f\u7684\u6f0f\u6d1e\u6458\u8981\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},">")," \u67e5\u770b\u200b\u200b\u6bcf\u4e2a\u6f0f\u6d1e\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5176\u4e2d\u5305\u62ec\u6f0f\u6d1e\u8be6\u60c5\u7684\u94fe\u63a5\u3002")),(0,a.kt)("h3",{id:"adding-images"},"Adding Images"),(0,a.kt)("h4",{id:"pulling-images"},"Pulling Images"),(0,a.kt)("p",null,"\u6b64\u9009\u9879\u53ef\u4ee5\u8ba9\u4f60\u5c06\u955c\u50cf\u4ece\u955c\u50cf\u4ed3\u5e93\u62c9\u53d6\u5230\u4f60\u7684\u865a\u62df\u673a\u4e2d\u3002"),(0,a.kt)("p",null,"\u8981\u62c9\u53d6\u955c\u50cf\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb\u53f3\u4e0a\u89d2\u7684 ",(0,a.kt)("strong",{parentName:"li"},"+")," \u6309\u94ae\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Pull")," \u9009\u9879\u5361\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8f93\u5165\u8981\u62c9\u53d6\u7684\u955c\u50cf\u7684\u540d\u79f0\u3002",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u955c\u50cf\u662f\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub")," \u4e2d\u63d0\u53d6\u7684\uff08\u683c\u5f0f\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"repo/image[:tag]"),"\uff09\u3002\u8981\u4ece\u5176\u4ed6\u955c\u50cf\u4ed3\u5e93\u4e2d\u62c9\u53d6\uff0c\u8bf7\u5305\u542b\u4e3b\u673a\u540d ",(0,a.kt)("inlineCode",{parentName:"p"},"registry.example.com/repo/image[:tag]"),"\u3002"))),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Pull"),"\u3002")),(0,a.kt)("h4",{id:"building-images"},"Building Images"),(0,a.kt)("p",null,"\u4f7f\u7528\u6b64\u9009\u9879\u6784\u5efa\u955c\u50cf\u5e76\u5c06\u5176\u6dfb\u52a0\u5230\u4f60\u7684\u865a\u62df\u673a\u3002"),(0,a.kt)("p",null,"\u8981\u6784\u5efa\u955c\u50cf\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb\u53f3\u4e0a\u89d2\u7684 ",(0,a.kt)("strong",{parentName:"li"},"+")," \u6309\u94ae\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Build")," \u9009\u9879\u5361\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8f93\u5165\u6784\u5efa\u7684\u955c\u50cf\u7684\u540d\u79f0\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"repo/image"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"repo/image:tag"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"registry.example.com/repo/image")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"registry.example.com/repo/image:tag"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Build"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u6587\u4ef6\u6d4f\u89c8\u5668\u4e2d\uff0c\u9009\u62e9\u8981\u7528\u6765\u6784\u5efa\u955c\u50cf\u7684 Dockerfile\u3002")))}p.isMDXComponent=!0}}]);