"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[663],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,l(l({ref:t},i),{},{components:n})):r.createElement(h,l({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),o=n(2389),l=n(9443);var s=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(3616),u=n(6010),i="tabItem_vU9c";function p(e){var t,n,o,l=e.lazy,p=e.block,d=e.defaultValue,m=e.values,h=e.groupId,f=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,c.lx)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=k[0])?void 0:o.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=s(),y=w.tabGroupChoices,N=w.setTabGroupChoices,R=(0,a.useState)(b),T=R[0],D=R[1],I=[],x=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var O=y[h];null!=O&&O!==T&&g.some((function(e){return e.value===O}))&&D(O)}var j=function(e){var t=e.currentTarget,n=I.indexOf(t),r=g[n].value;r!==T&&(x(t),D(r),null!=h&&N(h,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=I.indexOf(e.currentTarget)+1;n=I[r]||I[0];break;case"ArrowLeft":var a=I.indexOf(e.currentTarget)-1;n=I[a]||I[I.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},f)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return I.push(e)},onKeyDown:P,onFocus:j,onClick:j},o,{className:(0,u.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},4063:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(6396),s=n(8215),c=["components"],u={title:"Rancher on Rancher Desktop"},i=void 0,p={unversionedId:"how-to-guides/rancher-on-rancher-desktop",id:"how-to-guides/rancher-on-rancher-desktop",title:"Rancher on Rancher Desktop",description:"While Rancher and Rancher Desktop share the Rancher name, they do different things. Rancher Desktop is not Rancher on the Desktop. Rancher is a powerful solution to manage Kubernetes clusters. Rancher Desktop runs local Kubernetes and a container management platform. The two solutions complement each other. For example, you can install Rancher as a workload in Rancher Desktop.",source:"@site/docs/how-to-guides/rancher-on-rancher-desktop.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/rancher-on-rancher-desktop",permalink:"/how-to-guides/rancher-on-rancher-desktop",editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/how-to-guides/rancher-on-rancher-desktop.md",tags:[],version:"current",frontMatter:{title:"Rancher on Rancher Desktop"},sidebar:"tutorialSidebar",previous:{title:"VS Code Remote Containers",permalink:"/how-to-guides/vs-code-remote-containers"},next:{title:"Skaffold and Rancher Desktop",permalink:"/how-to-guides/skaffold-and-rancher-desktop"}},d=[],m={toc:d};function h(e){var t=e.components,u=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"While ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/"},"Rancher")," and ",(0,o.kt)("a",{parentName:"p",href:"https://rancherdesktop.io/"},"Rancher Desktop")," share the ",(0,o.kt)("em",{parentName:"p"},"Rancher")," name, they do different things. Rancher Desktop is not Rancher on the Desktop. Rancher is a powerful solution to manage Kubernetes clusters. Rancher Desktop runs local Kubernetes and a container management platform. The two solutions complement each other. For example, you can install Rancher as a workload in Rancher Desktop."),(0,o.kt)("p",null,"This guide outlines steps to install Rancher Dashboard on Rancher Desktop using ",(0,o.kt)("inlineCode",{parentName:"p"},"container runtime")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"helm")," (local environment):"),(0,o.kt)(l.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl run --privileged -d --restart=no -p 8080:80 -p 8443:443 rancher/rancher\n"))),(0,o.kt)(s.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run --privileged -d --restart=no -p 8080:80 -p 8443:443 rancher/rancher\n"))),(0,o.kt)(s.Z,{value:"helm",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"1: Add Jetstack charts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add jetstack https://charts.jetstack.io\n")),(0,o.kt)("p",null,"2: Add latest Rancher charts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n")),(0,o.kt)("p",null,"3: Create cert-manager namespace:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"kubectl create namespace cert-manager\n")),(0,o.kt)("p",null,"4: Install cert-manager services:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm install cert-manager jetstack/cert-manager --namespace cert-manager --version v1.1.0 --set installCRDs=true\n")),(0,o.kt)("p",null,"5: Create cattle-system namespace:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"kubectl create namespace cattle-system\n")),(0,o.kt)("p",null,"6: Install Rancher application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm install rancher rancher-latest/rancher --namespace cattle-system --set hostname=rancher.rd.localhost --wait --timeout=10m\n")))),(0,o.kt)("p",null,"The installation takes a few minutes to complete. After the installation, you can access the Rancher UI as follows: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Installed through ",(0,o.kt)("inlineCode",{parentName:"li"},"container runtime"),": ",(0,o.kt)("a",{parentName:"li",href:"https://localhost:8443/"},"https://localhost:8443/")," "),(0,o.kt)("li",{parentName:"ul"},"Installed through ",(0,o.kt)("inlineCode",{parentName:"li"},"helm")," ",(0,o.kt)("a",{parentName:"li",href:"https://rancher.rd.localhost/"},"https://rancher.rd.localhost/"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9815).Z})),(0,o.kt)(l.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"In order to access the Rancher UI, you need to get the Bootstrap Password:"),(0,o.kt)("p",null,"1: Get Rancher UI container ID/Name:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"nerdctl ps\n")),(0,o.kt)("p",null,"2: Get the Bootstrap Password:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'nerdctl logs [rancherContainerID] 2>&1 | grep "Bootstrap Password:"\n')),(0,o.kt)("p",null,"3: Bootstrap Password example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"[INFO] Bootstrap Password: 7fwjjw4ldcmnq8ghns22q7nhl5lrznwwt9p9vjljfjc6tqbcvhxmwq\n"))),(0,o.kt)(s.Z,{value:"docker",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"In order to access the Rancher UI, you need to get the Bootstrap Password:"),(0,o.kt)("p",null,"1: Get Rancher UI container ID/Name:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker ps\n")),(0,o.kt)("p",null,"2: Get the Bootstrap Password:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'docker logs [rancherContainerID] 2>&1 | grep "Bootstrap Password:"\n')),(0,o.kt)("p",null,"3: Bootstrap Password example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"[INFO] Bootstrap Password: 7fwjjw4ldcmnq8ghns22q7nhl5lrznwwt9p9vjljfjc6tqbcvhxmwq\n")))),(0,o.kt)("p",null,"Follow the wizard instructions and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Continue")," to land on the main Rancher UI page."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4828).Z})),(0,o.kt)("p",null,"From the Rancher UI, you can manage your local cluster, node, and more. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/"},"Rancher Docs"),"."))}h.isMDXComponent=!0},4828:function(e,t,n){t.Z=n.p+"assets/images/rancherUiMainPage-b53cd5a80ad0bacb7aa613f3ae7bd0b7.png"},9815:function(e,t,n){t.Z=n.p+"assets/images/rancherUiWelcomePage-21a9632bf47edafe852af976ed625bf1.png"}}]);