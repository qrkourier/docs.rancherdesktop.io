"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[8791],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),h=r,k=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return t?o.createElement(k,a(a({ref:n},c),{},{components:t})):o.createElement(k,a({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4242:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var o=t(3117),r=(t(7294),t(3905));const i={title:"Troubleshooting Tips"},a=void 0,s={unversionedId:"troubleshooting-tips",id:"version-latest/troubleshooting-tips",title:"Troubleshooting Tips",description:"This page provides tips to troubleshoot issues you may have with Rancher Desktop.",source:"@site/versioned_docs/version-latest/troubleshooting-tips.md",sourceDirName:".",slug:"/troubleshooting-tips",permalink:"/troubleshooting-tips",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/troubleshooting-tips.md",tags:[],version:"latest",frontMatter:{title:"Troubleshooting Tips"},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/faq"}},l={},d=[{value:"Q: Why do I not see my WSL distro under Rancher Desktop&#39;s WSL Integration page?",id:"q-why-do-i-not-see-my-wsl-distro-under-rancher-desktops-wsl-integration-page",level:4},{value:"Q: I do not see an entry for Rancher Desktop when running <code>kubectl config get-contexts</code>, where is it?",id:"q-i-do-not-see-an-entry-for-rancher-desktop-when-running-kubectl-config-get-contexts-where-is-it",level:4},{value:"Q: Rancher Desktop is stuck on <code>Waiting for Kubernetes API</code>, what do I do?",id:"q-rancher-desktop-is-stuck-on-waiting-for-kubernetes-api-what-do-i-do",level:4},{value:"Q: I can no longer run <code>docker compose</code> after installing Rancher Desktop and uninstalling Docker Desktop, what happened?",id:"q-i-can-no-longer-run-docker-compose-after-installing-rancher-desktop-and-uninstalling-docker-desktop-what-happened",level:4},{value:"Q: I&#39;m using Homebrew to install Rancher Desktop, but <code>brew install rancher-desktop</code> is failing, why?",id:"q-im-using-homebrew-to-install-rancher-desktop-but-brew-install-rancher-desktop-is-failing-why",level:4},{value:"Q: How do I fix <code>permission denied</code> errors when trying to use Docker on WSL?",id:"q-how-do-i-fix-permission-denied-errors-when-trying-to-use-docker-on-wsl",level:4},{value:"Q: How do I fix <code>kubectl: command not found</code> issue on Linux?",id:"q-how-do-i-fix-kubectl-command-not-found-issue-on-linux",level:4},{value:"Q: How do I fix <code>FATA[0005] subnet 10.4.0.0/24 overlaps with other one on this address space</code> when running a container using <code>nerdctl run</code>?",id:"q-how-do-i-fix-fata0005-subnet-1040024-overlaps-with-other-one-on-this-address-space-when-running-a-container-using-nerdctl-run",level:4}],c={toc:d};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page provides tips to troubleshoot issues you may have with Rancher Desktop."),(0,r.kt)("h4",{id:"q-why-do-i-not-see-my-wsl-distro-under-rancher-desktops-wsl-integration-page"},"Q: Why do I not see my WSL distro under Rancher Desktop's WSL Integration page?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," You are likely using a WSL 1 distro. Rancher Desktop supports only WSL 2 distros. You can convert your WSL 1 distro into a WSL 2 distro by running the command ",(0,r.kt)("inlineCode",{parentName:"p"},"wsl --set-version <distro-name> 2"),". You can also run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"wsl --set-default-version 2")," to set all the future distributions you might install to use WSL 2."),(0,r.kt)("h4",{id:"q-i-do-not-see-an-entry-for-rancher-desktop-when-running-kubectl-config-get-contexts-where-is-it"},"Q: I do not see an entry for Rancher Desktop when running ",(0,r.kt)("inlineCode",{parentName:"h4"},"kubectl config get-contexts"),", where is it?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," Rancher Desktop places its configuration in the default location, ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.kube/config,")," and uses that. Your ",(0,r.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," environment variable may be set to look elsewhere for configuration files."),(0,r.kt)("h4",{id:"q-rancher-desktop-is-stuck-on-waiting-for-kubernetes-api-what-do-i-do"},"Q: Rancher Desktop is stuck on ",(0,r.kt)("inlineCode",{parentName:"h4"},"Waiting for Kubernetes API"),", what do I do?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," The cause is hard to determine without additional information. Navigate to the Troubleshooting tab and use the button to access the logs. Then go to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-desktop/issues"},"Rancher Desktop GitHub")," page and file an issue with the logs attached."),(0,r.kt)("h4",{id:"q-i-can-no-longer-run-docker-compose-after-installing-rancher-desktop-and-uninstalling-docker-desktop-what-happened"},"Q: I can no longer run ",(0,r.kt)("inlineCode",{parentName:"h4"},"docker compose")," after installing Rancher Desktop and uninstalling Docker Desktop, what happened?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," This was an issue related to earlier versions (prior to 1.1.0) of Rancher Desktop.  Rancher Desktop version 1.1.0 and above comes bundled with ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," for you, and makes the cli plugins available at ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.docker/cli-plugins"),". We strongly recommend you to be on the latest version of Rancher Desktop."),(0,r.kt)("p",null,"If you still don't see ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," available then please file a bug on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/rancher-desktop/issues/new?assignees=&labels=kind%2Fbug&template=bug_report.yml"},"Github"),"."),(0,r.kt)("h4",{id:"q-im-using-homebrew-to-install-rancher-desktop-but-brew-install-rancher-desktop-is-failing-why"},"Q: I'm using Homebrew to install Rancher Desktop, but ",(0,r.kt)("inlineCode",{parentName:"h4"},"brew install rancher-desktop")," is failing, why?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," Due to the Homebrew cask naming conventions, the ",(0,r.kt)("inlineCode",{parentName:"p"},"-desktop")," suffix is dropped from the cask formula name. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"brew install rancher")," instead."),(0,r.kt)("h4",{id:"q-how-do-i-fix-permission-denied-errors-when-trying-to-use-docker-on-wsl"},"Q: How do I fix ",(0,r.kt)("inlineCode",{parentName:"h4"},"permission denied")," errors when trying to use Docker on WSL?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," You need write-permission to access the docker socket. There are many ways to go about that, but this is one of the more common approaches. Using the Ubuntu WSL command-line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo groupadd docker\nsudo adduser $USER docker\nsudo chown root:docker /var/run/docker.sock\nsudo chmod g+w /var/run/docker.sock\nnewgrp docker\n")),(0,r.kt)("h4",{id:"q-how-do-i-fix-kubectl-command-not-found-issue-on-linux"},"Q: How do I fix ",(0,r.kt)("inlineCode",{parentName:"h4"},"kubectl: command not found")," issue on Linux?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," By default, Rancher Desktop creates symlinks of ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"docker"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nerdctl")," binaries in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/<user>/.local/bin")," directory on Linux. To be able to call these commands directly from the console you may add the directory to your ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable by executing the following command in console and performing logout and login:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "export PATH=\\$PATH:/home/$(whoami)/.local/bin" >> ~/.bashrc\n')),(0,r.kt)("h4",{id:"q-how-do-i-fix-fata0005-subnet-1040024-overlaps-with-other-one-on-this-address-space-when-running-a-container-using-nerdctl-run"},"Q: How do I fix ",(0,r.kt)("inlineCode",{parentName:"h4"},"FATA[0005] subnet 10.4.0.0/24 overlaps with other one on this address space")," when running a container using ",(0,r.kt)("inlineCode",{parentName:"h4"},"nerdctl run"),"?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," You will see this error if there's a route rule with an IP address from a conflicting subnet on the Iptables. The conflicting routes could be either from the host network (bridge mode) or the Kubernetes network. A quick workaround to this issue is to shutdown WSL via the command ",(0,r.kt)("inlineCode",{parentName:"p"},"wsl --shutdown"),". "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u26a0\ufe0f Please note that shutting down WSL will stop all other distros along with the ",(0,r.kt)("inlineCode",{parentName:"strong"},"rancher-desktop")," distro.")))}u.isMDXComponent=!0}}]);