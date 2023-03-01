"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[8236],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3687:function(e,t,n){var a=n(412);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",o=r?"macOS":l?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(4334),l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),l=n(4334),i=n(2389),o=n(7392),s=n(7094),u=n(2466),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:g,className:f}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,o.l)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[N,C]=(0,r.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=g){const e=y[g];null!=e&&e!==N&&b.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==N&&(O(t),C(a),null!=g&&w(g,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},f)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:T,onClick:E},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},7930:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(3117),r=(n(7294),n(3905)),l=n(5488),i=n(5162),o=n(3687);const s={sidebar_label:"Container Engine",title:"Container Engine"},u=void 0,p={unversionedId:"ui/preferences/container-engine",id:"ui/preferences/container-engine",title:"Container Engine",description:"General",source:"@site/docs/ui/preferences/container-engine.md",sourceDirName:"ui/preferences",slug:"/ui/preferences/container-engine",permalink:"/next/ui/preferences/container-engine",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/ui/preferences/container-engine.md",tags:[],version:"current",frontMatter:{sidebar_label:"Container Engine",title:"Container Engine"},sidebar:"tutorialSidebar",previous:{title:"WSL",permalink:"/next/ui/preferences/wsl"},next:{title:"Kubernetes",permalink:"/next/ui/preferences/kubernetes"}},c={},d=[{value:"General",id:"general",level:2},{value:"Allowed Images",id:"allowed-images",level:2},{value:"How to specify Allowed Image patterns",id:"how-to-specify-allowed-image-patterns",level:3},{value:"Examples",id:"examples",level:3}],m={toc:d};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"general"},"General"),(0,r.kt)("p",null,"Set the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/container-runtimes/"},"container runtime")," for Rancher Desktop. Users have the option of ",(0,r.kt)("a",{parentName:"p",href:"https://containerd.io/"},"containerd")," which provides namespaces for containers and the use of nerdctl or ",(0,r.kt)("a",{parentName:"p",href:"https://mobyproject.org/"},"dockerd (moby)")," which enables the Docker API and the use of the Docker CLI. Only one container runtime will function at a time."),(0,r.kt)("p",null,"When switching to a different container runtime:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Workloads and images that have been built or pulled using the existing container runtime are not available on the container runtime being switched to.")),(0,r.kt)(l.Z,{groupId:"os",defaultValue:o.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/Windows_containerEngine_tabGeneral.png",alt:null}))),(0,r.kt)(i.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/macOS_containerEngine_tabGeneral.png",alt:null}))),(0,r.kt)(i.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/Linux_containerEngine_tabGeneral.png",alt:null})))),(0,r.kt)("h2",{id:"allowed-images"},"Allowed Images"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Allowed Images")," tab lets you control which registry artifacts you can access within Rancher Desktop. For example, you may want to pull container images only from your organization's private registry or only from your department-specific namespace in your organization's registry, etc. You can specify image name patterns to allow accessing images only from specific registries and/or repositories."),(0,r.kt)("p",null,"Check the ",(0,r.kt)("strong",{parentName:"p"},"Enable")," checkbox to enable Rancher Desktop to apply the specified patterns while pulling or pushing images, which means only images whose names match at least one of the specified patterns will be allowed."),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("strong",{parentName:"p"},"+")," and ",(0,r.kt)("strong",{parentName:"p"},"-")," buttons to add/remove image name patterns. "),(0,r.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/Windows_containerEngine_tabAllowedImages.png",alt:null}))),(0,r.kt)(i.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/macOS_containerEngine_tabAllowedImages.png",alt:null}))),(0,r.kt)(i.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/Linux_containerEngine_tabAllowedImages.png",alt:null})))),(0,r.kt)("h3",{id:"how-to-specify-allowed-image-patterns"},"How to specify Allowed Image patterns"),(0,r.kt)("p",null,"You can specify Allowed Image patterns using the format ",(0,r.kt)("inlineCode",{parentName:"p"},"[registry/][:port/][organization/]repository[:tag]"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If not specified in an Allowed Image pattern,"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"registry")," defaults to Docker Hub (",(0,r.kt)("inlineCode",{parentName:"li"},"docker.io"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"port")," defaults to 433. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"organization")," for Docker Hub defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"library"),", and does not apply to other registries."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tag")," defaults to anything and ",(0,r.kt)("strong",{parentName:"li"},"not")," just to ",(0,r.kt)("inlineCode",{parentName:"li"},"latest"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Filtering by ",(0,r.kt)("inlineCode",{parentName:"p"},"tag")," does not actually work; the corresponding digests (",(0,r.kt)("inlineCode",{parentName:"p"},"repository@digest"),") will have to be added to the allow list as well, making this impractical. Please file a Github issue if you have a use-case that requires filtering based on tags!"),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Pattern"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"busybox")),(0,r.kt)("td",{parentName:"tr",align:null},"Allow the ",(0,r.kt)("inlineCode",{parentName:"td"},"busybox")," repository in the ",(0,r.kt)("inlineCode",{parentName:"td"},"library")," organization of the ",(0,r.kt)("inlineCode",{parentName:"td"},"docker.io")," registry.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"suse/")),(0,r.kt)("td",{parentName:"tr",align:null},"Allow any image in the ",(0,r.kt)("inlineCode",{parentName:"td"},"suse")," organization of the ",(0,r.kt)("inlineCode",{parentName:"td"},"docker.io")," registry. ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Note:")," A trailing slash at the end of the repository means a single segment follows, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"suse/nginx"),", but not ",(0,r.kt)("inlineCode",{parentName:"td"},"suse/cap/uaa"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"suse//")),(0,r.kt)("td",{parentName:"tr",align:null},"Allow any image in the ",(0,r.kt)("inlineCode",{parentName:"td"},"suse")," organization of the ",(0,r.kt)("inlineCode",{parentName:"td"},"docker.io")," registry. ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Note:")," A trailing double slash at the end of the repository means one or more segments follow, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"suse/cap/uaa"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"registry.internal:5000")),(0,r.kt)("td",{parentName:"tr",align:null},"Allow any image from the ",(0,r.kt)("inlineCode",{parentName:"td"},"registry.internal:5000")," registry.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"registry.suse.com/nginx")),(0,r.kt)("td",{parentName:"tr",align:null},"Allow the image ",(0,r.kt)("inlineCode",{parentName:"td"},"nginx")," from the ",(0,r.kt)("inlineCode",{parentName:"td"},"registry.suse.com")," registry. ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Note:")," Non-DockerHub registries do not have the concept of organizations at the top level, so no default ",(0,r.kt)("inlineCode",{parentName:"td"},"library")," organization is implied.")))))}g.isMDXComponent=!0}}]);