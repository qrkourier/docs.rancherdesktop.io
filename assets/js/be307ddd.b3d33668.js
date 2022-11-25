"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[5370],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),f=o,m=c["".concat(s,".").concat(f)]||c[f]||u[f]||r;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),o=n(4334),r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(3117),o=n(7294),r=n(4334),l=n(2389),i=n(7392),s=n(7094),p=n(2466),d="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:n,block:l,defaultValue:c,values:f,groupId:m,className:k}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=f??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,i.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[w,C]=(0,o.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=m){const e=v[m];null!=e&&e!==w&&y.some((t=>t.value===e))&&C(e)}const O=e=>{const t=e.currentTarget,n=T.indexOf(t),a=y[n].value;a!==w&&(x(t),C(a),null!=m&&N(m,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},k)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:D,onClick:O},l,{className:(0,r.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,o.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function f(e){const t=(0,l.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}},646:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(3117),o=(n(7294),n(3905)),r=n(5488),l=n(5162);const i={title:"Skaffold and Rancher Desktop"},s=void 0,p={unversionedId:"how-to-guides/skaffold-and-rancher-desktop",id:"version-latest/how-to-guides/skaffold-and-rancher-desktop",title:"Skaffold and Rancher Desktop",description:"Skaffold is a command line tool that facilitates continuous development for Kubernetes-native applications. Skaffold handles the workflow for building, pushing, and deploying your application, and it provides building blocks for creating CI/CD pipelines. This enables you to focus on iterating on your application locally while Skaffold continuously deploys to your local or remote Kubernetes cluster. To learn more about Skaffold, refer to the project docs here.",source:"@site/versioned_docs/version-latest/how-to-guides/skaffold-and-rancher-desktop.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/skaffold-and-rancher-desktop",permalink:"/how-to-guides/skaffold-and-rancher-desktop",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/how-to-guides/skaffold-and-rancher-desktop.md",tags:[],version:"latest",frontMatter:{title:"Skaffold and Rancher Desktop"},sidebar:"tutorialSidebar",previous:{title:"Rancher on Rancher Desktop",permalink:"/how-to-guides/rancher-on-rancher-desktop"},next:{title:"Provisioning Scripts",permalink:"/how-to-guides/provisioning-scripts"}},d={},u=[],c={toc:u};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Skaffold is a command line tool that facilitates continuous development for Kubernetes-native applications. Skaffold handles the workflow for building, pushing, and deploying your application, and it provides building blocks for creating CI/CD pipelines. This enables you to focus on iterating on your application locally while Skaffold continuously deploys to your local or remote Kubernetes cluster. To learn more about Skaffold, refer to the project docs ",(0,o.kt)("a",{parentName:"p",href:"https://skaffold.dev/docs/"},"here"),"."),(0,o.kt)("p",null,"In order to demonstrate the steps to set up Skaffold with Rancher Desktop, a sample nodejs app example is provided within the Rancher Desktop docs repository ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/tree/main/assets/express-sample"},"here"),". "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important: Skaffold only works with ",(0,o.kt)("inlineCode",{parentName:"strong"},"dockerd")," (Moby).")," Therefore, make sure to select your runtime as ",(0,o.kt)("inlineCode",{parentName:"p"},"dockerd")," from the ",(0,o.kt)("strong",{parentName:"p"},"Kubernetes Settings")," panel in the Rancher Desktop UI. ")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Visit ",(0,o.kt)("a",{parentName:"p",href:"https://skaffold.dev/docs/install/"},"https://skaffold.dev/docs/install/")," to install Skaffold.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/docs.rancherdesktop.io.git"},"Rancher Desktop docs repository")," and navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"express-sample")," in a terminal as follows: "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cd docs.rancherdesktop.io/assets/express-sample\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"skaffold init"),"."),(0,o.kt)("p",{parentName:"li"},"Per the ",(0,o.kt)("a",{parentName:"p",href:"https://skaffold.dev/docs/pipeline-stages/init/#build-config-initialization"},"Skaffold docs"),",",(0,o.kt)("inlineCode",{parentName:"p"},"skaffold init")," walks through your project directory and looks for any build configuration files such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle/pom.xml"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"requirements.txt"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"go.mod"),". "),(0,o.kt)("p",{parentName:"li"},"We will select ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," in our example. This will generate the initial configuration file that you can modify as needed. When prompted, select ",(0,o.kt)("inlineCode",{parentName:"p"},"yes")," to write your config to ",(0,o.kt)("inlineCode",{parentName:"p"},"skaffold.yaml"),". ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In your editor, review your ",(0,o.kt)("inlineCode",{parentName:"p"},"app.js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"manifests.yaml")," files. Note that in ",(0,o.kt)("inlineCode",{parentName:"p"},"manifests.yaml"),", you will have a deployment config as well as a service config. It is only necessary to have 1 ",(0,o.kt)("inlineCode",{parentName:"p"},"replica")," for testing purposes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Back in your terminal, you'll notice that you will have two options: ",(0,o.kt)("inlineCode",{parentName:"p"},"skaffold run")," that lets you build and deploy, and ",(0,o.kt)("inlineCode",{parentName:"p"},"skaffold dev")," that allows you to enter development mode with auto-redeploy. We will use ",(0,o.kt)("inlineCode",{parentName:"p"},"skaffold dev")," in this example."),(0,o.kt)("p",{parentName:"li"}," As you will need to have push access to the image repository, you can either use your docker login, or you can set up a local registry: "),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"docker-hub",label:"Docker Hub",default:!0,mdxType:"TabItem"},(0,o.kt)("p",{parentName:"li"},"  Before running ",(0,o.kt)("inlineCode",{parentName:"p"},"skaffold dev"),", use your docker login if you have a ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub")," account. Then, in the files ",(0,o.kt)("inlineCode",{parentName:"p"},"skaffold.yaml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"manifests.yaml")," replace ",(0,o.kt)("inlineCode",{parentName:"p"},"matamagu/express-sample")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR_DOCKER_HUB_USERNAME/express-sample")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"skaffold dev")," will push the built image to DockerHub.")),(0,o.kt)(l.Z,{value:"local-registry",label:"Local Registry",mdxType:"TabItem"},"You can set up a local registry by first running this command:",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker run -d -p 5000:5000 --restart=always --name registry registry:2\n")),(0,o.kt)("p",{parentName:"li"},"  Then:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"skaffold dev --default-repo=localhost:5000\n")))),(0,o.kt)("p",{parentName:"li"},"As you go through your development, Skaffold will detect any changes and will automatically go through the build and deployment process again. You will be able to see any changes reflected in the cluster.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Point your web browser to ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:3000"),", and you will see the ",(0,o.kt)("inlineCode",{parentName:"p"},"express-sample")," screen."))))}f.isMDXComponent=!0}}]);