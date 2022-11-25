"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[9736],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(4334),i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3117),a=n(7294),i=n(4334),o=n(2389),l=n(7392),u=n(7094),s=n(2466),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:k,className:f}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,l.l)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,u.U)(),[w,O]=(0,a.useState)(g),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=k){const e=y[k];null!=e&&e!==w&&h.some((t=>t.value===e))&&O(e)}const x=e=>{const t=e.currentTarget,n=C.indexOf(t),r=h[n].value;r!==w&&(E(t),O(r),null!=k&&N(k,String(r)))},D=e=>{var t;let n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},f)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>C.push(e),onKeyDown:D,onClick:x},o,{className:(0,i.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,a.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},7719:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(3117),a=(n(7294),n(3905)),i=n(5488),o=n(5162);const l={title:"\u914d\u7f6e\u811a\u672c"},u=void 0,s={unversionedId:"how-to-guides/provisioning-scripts",id:"version-1.6/how-to-guides/provisioning-scripts",title:"\u914d\u7f6e\u811a\u672c",description:"\u914d\u7f6e\u811a\u672c\u53ef\u4ee5\u8986\u76d6 Rancher Desktop \u7684\u4e00\u4e9b\u5185\u90e8\u6d41\u7a0b\u3002\u4f8b\u5982\uff0c\u811a\u672c\u53ef\u7528\u4e8e\u5411 K3s \u63d0\u4f9b\u67d0\u4e9b\u547d\u4ee4\u884c\u53c2\u6570\u3001\u6dfb\u52a0\u989d\u5916\u7684\u6302\u8f7d\u3001\u589e\u52a0 ulimit \u503c\u7b49\u3002\u672c\u6307\u5357\u5c06\u4ecb\u7ecd\u5982\u4f55\u4e3a macOS\u3001Linux \u548c Windows \u4e3b\u673a\u8bbe\u7f6e\u811a\u672c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.6/how-to-guides/provisioning-scripts.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/provisioning-scripts",permalink:"/zh/1.6/how-to-guides/provisioning-scripts",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.6/how-to-guides/provisioning-scripts.md",tags:[],version:"1.6",frontMatter:{title:"\u914d\u7f6e\u811a\u672c"},sidebar:"tutorialSidebar",previous:{title:"Skaffold \u4e0e Rancher Desktop",permalink:"/zh/1.6/how-to-guides/skaffold-and-rancher-desktop"},next:{title:"\u79bb\u7ebf\u8fd0\u884c",permalink:"/zh/1.6/how-to-guides/running-air-gapped"}},p={},c=[{value:"macOS &amp; Linux",id:"macos--linux",level:2},{value:"Windows",id:"windows",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u914d\u7f6e\u811a\u672c\u53ef\u4ee5\u8986\u76d6 Rancher Desktop \u7684\u4e00\u4e9b\u5185\u90e8\u6d41\u7a0b\u3002\u4f8b\u5982\uff0c\u811a\u672c\u53ef\u7528\u4e8e\u5411 K3s \u63d0\u4f9b\u67d0\u4e9b\u547d\u4ee4\u884c\u53c2\u6570\u3001\u6dfb\u52a0\u989d\u5916\u7684\u6302\u8f7d\u3001\u589e\u52a0 ulimit \u503c\u7b49\u3002\u672c\u6307\u5357\u5c06\u4ecb\u7ecd\u5982\u4f55\u4e3a macOS\u3001Linux \u548c Windows \u4e3b\u673a\u8bbe\u7f6e\u811a\u672c\u3002"),(0,a.kt)("h2",{id:"macos--linux"},"macOS & Linux"),(0,a.kt)("p",null,"\u5728 macOS \u548c Linux \u4e0a\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 lima override.yaml \u6765\u7f16\u5199\u914d\u7f6e\u811a\u672c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u4ee5\u4e0b\u8def\u5f84\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"li"},"override.yaml")," \u6587\u4ef6\u3002")),(0,a.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"macOS",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"~/Library/Application Support/rancher-desktop/lima/_config/override.yaml\n"))),(0,a.kt)(o.Z,{value:"Linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"~/.local/share/rancher-desktop/lima/_config/override.yaml\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u4e0a\u4e00\u6b65\u4e2d\u521b\u5efa\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"override.yaml")," \u6587\u4ef6\u4e2d\u7f16\u5199\u914d\u7f6e\u811a\u672c\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u811a\u672c\u6765\u589e\u52a0\u5bb9\u5668\u7684 ulimit\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"provision:\n- mode: system\n  script: |\n    #!/bin/sh\n    cat <<'EOF' > /etc/security/limits.d/rancher-desktop.conf\n    * soft     nofile         82920\n    * hard     nofile         82920\n    EOF\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"override.yaml")," \u6765\u8986\u76d6/\u4fee\u6539 lima \u914d\u7f6e\u8bbe\u7f6e\u3002\u4e0b\u9762\u7684\u793a\u4f8b\u521b\u5efa\u4e86\u989d\u5916\u7684\u6302\u8f7d\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mounts:\n  - location: /some/path\n    writable: true\n")),(0,a.kt)("h2",{id:"windows"},"Windows"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u5728 Windows \u4e0a\uff0c\u4f60\u53ea\u80fd\u4e3a 1.1.0 \u6216\u66f4\u9ad8\u7248\u672c\u7684 Rancher Desktop \u4f7f\u7528\u8fd9\u4e9b\u914d\u7f6e\u811a\u672c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f60\u9700\u8981\u81f3\u5c11\u8fd0\u884c Rancher Desktop \u4e00\u6b21\u4ee5\u5141\u8bb8\u5b83\u521b\u5efa\u914d\u7f6e\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"p"},"%AppData%\\\\rancher-desktop\\\\provisioning")," \u76ee\u5f55\u3002\u5b8c\u6574\u8def\u5f84\u7684\u793a\u4f8b\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\\\Users\\\\Joe\\\\AppData\\\\Roaming\\\\rancher-desktop\\\\provisioning"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8bf7\u6ce8\u610f\uff0c\u4efb\u4f55\u6587\u4ef6\u6269\u5c55\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},".start")," \u7684\u6587\u4ef6\uff08\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"k3s-overrides.start"),"\uff09\u90fd\u53ef\u4ee5\u5728 ",(0,a.kt)("em",{parentName:"p"},"Rancher Desktop \u542f\u52a8 Kubernetes \u540e\u7aef\uff08\u5982\u679c\u542f\u7528\uff09")," \u65f6\u6267\u884c\u3002\u6b64\u7c7b\u6587\u4ef6\u5c06\u5728 Rancher Desktop WSL \u4e0a\u4e0b\u6587\u4e2d\u8fd0\u884c\u3002"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".start")," \u6587\u4ef6\u7684\u793a\u4f8b\u6d41\u7a0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rancher Desktop \u5185\u90e8\u8bbe\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u914d\u7f6e\u811a\u672c"),(0,a.kt)("li",{parentName:"ul"},"\u5728 UI \u4e2d\u542f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"dockerd")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"containerd")),(0,a.kt)("li",{parentName:"ul"},"Kubernetes (K3s)")),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"%AppData%\\\\rancher-desktop\\\\provisioning\\\\insecure-registry.start")," \u5c06\u5141\u8bb8 ",(0,a.kt)("inlineCode",{parentName:"p"},"nerdctl")," \u9ed8\u8ba4\u4f7f\u7528\u4e0d\u5b89\u5168\u7684\u955c\u50cf\u4ed3\u5e93\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#!/bin/sh\n\nmkdir -p /etc/nerdctl\ncat >  /etc/nerdctl/nerdctl.toml <<EOF\ninsecure_registry = true\nEOF\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bf7\u6ce8\u610f\uff0c\u6587\u4ef6\u6269\u5c55\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},".stop")," \u7684\u6587\u4ef6\uff08\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"wipe-data.stop"),"\uff09\u53ef\u4ee5\u5728 ",(0,a.kt)("em",{parentName:"li"},"Rancher Desktop \u5173\u95ed Kubernetes \u540e\u7aef\uff08\u5982\u679c\u542f\u7528\uff09\u540e")," \u6267\u884c\u3002\u6b64\u7c7b\u6587\u4ef6\u5c06\u5728\u76f8\u540c\u7684 Rancher Desktop WSL \u4e0a\u4e0b\u6587\u4e2d\u8fd0\u884c\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".stop")," \u6587\u4ef6\u7684\u793a\u4f8b\u6d41\u7a0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u505c\u6b62 ",(0,a.kt)("inlineCode",{parentName:"li"},"k3s"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"dockerd")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"containerd")),(0,a.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u53d6\u6d88\u914d\u7f6e\u7684\u811a\u672c")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u91cd\u8981\u63d0\u793a"),"\uff1a\u811a\u672c\u9700\u8981\u4ee5 Unix \u884c\u7ed3\u5c3e\u4fdd\u5b58\uff0c\u672a\u5b8c\u6210\u884c\u5c3e\u8f6c\u6362\uff0c\u4e14\u5177\u6709 DOS \u884c\u7ed3\u5c3e\u7684\u6587\u4ef6\u53ef\u80fd\u4f1a\u4ea7\u751f\u610f\u60f3\u4e0d\u5230\u7684\u7ed3\u679c\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u914d\u7f6e\u811a\u672c\u66f4\u6539\u7684\u5185\u5bb9\u662f\u6709\u9650\u5236\u7684\u3002\u4f8b\u5982\uff0c\u4f60\u4e0d\u80fd\u4f7f\u7528\u914d\u7f6e\u811a\u672c\u66f4\u6539 WSL2 \u4e0a\u7684\u786c ulimit\u3002\u8bf7\u8c28\u614e\u4f7f\u7528\u914d\u7f6e\u811a\u672c\uff0c\u5982\u679c\u4f60\u5bf9\u914d\u7f6e\u811a\u672c\u6709\u4efb\u4f55\u5177\u4f53\u95ee\u9898\uff0c\u8bf7\u968f\u65f6\u5728 Slack/Github \u4e0a\u4e0e Rancher Desktop \u56e2\u961f\u8054\u7cfb\u3002"))}m.isMDXComponent=!0}}]);