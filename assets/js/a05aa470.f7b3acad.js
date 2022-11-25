"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[2682],{3397:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"1.6","label":"1.6","banner":null,"badge":true,"noIndex":false,"className":"docs-version-1.6","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Getting Started","items":[{"type":"link","label":"Introduction","href":"/1.6/","docId":"getting-started/introduction"},{"type":"link","label":"Installation","href":"/1.6/getting-started/installation","docId":"getting-started/installation"},{"type":"link","label":"Features","href":"/1.6/getting-started/features","docId":"getting-started/features"}],"collapsed":false,"collapsible":true},{"type":"category","label":"Tutorials","items":[{"type":"link","label":"Working with Images","href":"/1.6/tutorials/working-with-images","docId":"tutorials/working-with-images"},{"type":"link","label":"Working with Containers","href":"/1.6/tutorials/working-with-containers","docId":"tutorials/working-with-containers"}],"collapsed":true,"collapsible":true},{"type":"category","label":"How-to Guides","items":[{"type":"link","label":"Hello World Example","href":"/1.6/how-to-guides/hello-world-example","docId":"how-to-guides/hello-world-example"},{"type":"link","label":"Create a Multi-Node Cluster with k3d","href":"/1.6/how-to-guides/create-multi-node-cluster","docId":"how-to-guides/create-multi-node-cluster"},{"type":"link","label":"Setup NGINX Ingress Controller","href":"/1.6/how-to-guides/setup-NGINX-Ingress-Controller","docId":"how-to-guides/setup-NGINX-Ingress-Controller"},{"type":"link","label":"Debugging a Container App with VS Code Docker extension","href":"/1.6/how-to-guides/vs-code-docker","docId":"how-to-guides/vs-code-docker"},{"type":"link","label":"VS Code Remote Containers","href":"/1.6/how-to-guides/vs-code-remote-containers","docId":"how-to-guides/vs-code-remote-containers"},{"type":"link","label":"Rancher on Rancher Desktop","href":"/1.6/how-to-guides/rancher-on-rancher-desktop","docId":"how-to-guides/rancher-on-rancher-desktop"},{"type":"link","label":"Skaffold and Rancher Desktop","href":"/1.6/how-to-guides/skaffold-and-rancher-desktop","docId":"how-to-guides/skaffold-and-rancher-desktop"},{"type":"link","label":"Provisioning Scripts","href":"/1.6/how-to-guides/provisioning-scripts","docId":"how-to-guides/provisioning-scripts"},{"type":"link","label":"Running When Offline","href":"/1.6/how-to-guides/running-air-gapped","docId":"how-to-guides/running-air-gapped"}],"collapsed":true,"collapsible":true},{"type":"category","label":"References","items":[{"type":"link","label":"Architecture","href":"/1.6/references/architecture","docId":"references/architecture"},{"type":"link","label":"rdctl Command Reference","href":"/1.6/references/rdctl-command-reference","docId":"references/rdctl-command-reference"}],"collapsed":true,"collapsible":true},{"type":"link","label":"FAQ","href":"/1.6/faq","docId":"faq"},{"type":"link","label":"Troubleshooting Tips","href":"/1.6/troubleshooting-tips","docId":"troubleshooting-tips"}]},"docs":{"faq":{"id":"faq","title":"FAQ","description":"This FAQ is a work in progress designed to answer the questions our users most frequently ask about Rancher Desktop.","sidebar":"tutorialSidebar"},"getting-started/features":{"id":"getting-started/features","title":"Features","description":"General","sidebar":"tutorialSidebar"},"getting-started/installation":{"id":"getting-started/installation","title":"Installation","description":"Rancher Desktop is delivered as a desktop application. You can download it from","sidebar":"tutorialSidebar"},"getting-started/introduction":{"id":"getting-started/introduction","title":"Introduction","description":"Rancher Desktop is an app that provides container management and Kubernetes on the desktop. It is available for Mac (both on Intel and Apple Silicon), Windows, and Linux.","sidebar":"tutorialSidebar"},"how-to-guides/create-multi-node-cluster":{"id":"how-to-guides/create-multi-node-cluster","title":"Create a Multi-Node Cluster with k3d","description":"Rancher Desktop provides a single cluster with single node setup, which is adequate for most local development scenarios. However, there are use cases where, the ability to create a multi node cluster or spin up multiple clusters with flexibilty to switch between clusters is required. Eventhough Rancher Desktop doesn\'t have in-built multi node/cluster functionality, you can use k3d with Rancher Desktop to accomplish the same. k3d is a lightweight wrapper to run k3s (a minimal Kubernetes distribution, which is used by Rancher Desktop as well) in docker. k3d makes it very easy to create single- and multi-node k3s clusters in docker, e.g. for local development on Kubernetes.","sidebar":"tutorialSidebar"},"how-to-guides/hello-world-example":{"id":"how-to-guides/hello-world-example","title":"Hello World Example","description":"This tutorial will demonstrate how to get started with Rancher Desktop by pushing an app to a local Kubernetes cluster.","sidebar":"tutorialSidebar"},"how-to-guides/provisioning-scripts":{"id":"how-to-guides/provisioning-scripts","title":"Provisioning Scripts","description":"Provisioning scripts can be used to override some of Rancher Desktop\'s internal processes. For example, scripts can be used to provide certain command line parameters to K3s, add additional mounts, increase ulimit value etc. This guide will explain how to set up your provisioning scripts for macOS, Linux, and Windows.","sidebar":"tutorialSidebar"},"how-to-guides/rancher-on-rancher-desktop":{"id":"how-to-guides/rancher-on-rancher-desktop","title":"Rancher on Rancher Desktop","description":"While Rancher and Rancher Desktop share the Rancher name, they do different things. Rancher Desktop is not Rancher on the Desktop. Rancher is a powerful solution to manage Kubernetes clusters. Rancher Desktop runs local Kubernetes and a container management platform. The two solutions complement each other. For example, you can install Rancher as a workload in Rancher Desktop.","sidebar":"tutorialSidebar"},"how-to-guides/running-air-gapped":{"id":"how-to-guides/running-air-gapped","title":"Running When Offline","description":"Rancher Desktop can be run when offline, aka in air-gapped mode. This document covers requirements","sidebar":"tutorialSidebar"},"how-to-guides/setup-NGINX-Ingress-Controller":{"id":"how-to-guides/setup-NGINX-Ingress-Controller","title":"Setup NGINX Ingress Controller","description":"Rancher Desktop uses K3s under the hood, which in turn uses Traefik as the default ingress controller for your Kubernetes cluster. However, there are unique use cases where NGINX may be required or preferred. Below steps show how to use NGINX Ingress controller for a sample deployment.","sidebar":"tutorialSidebar"},"how-to-guides/skaffold-and-rancher-desktop":{"id":"how-to-guides/skaffold-and-rancher-desktop","title":"Skaffold and Rancher Desktop","description":"Skaffold is a command line tool that facilitates continuous development for Kubernetes-native applications. Skaffold handles the workflow for building, pushing, and deploying your application, and it provides building blocks for creating CI/CD pipelines. This enables you to focus on iterating on your application locally while Skaffold continuously deploys to your local or remote Kubernetes cluster. To learn more about Skaffold, refer to the project docs here.","sidebar":"tutorialSidebar"},"how-to-guides/vs-code-docker":{"id":"how-to-guides/vs-code-docker","title":"Debugging a Container App with VS Code Docker extension","description":"The VS Code Docker extension makes it easy to build, manage, debug and deploy containerized applications in Visual Studio Code.","sidebar":"tutorialSidebar"},"how-to-guides/vs-code-remote-containers":{"id":"how-to-guides/vs-code-remote-containers","title":"VS Code Remote Containers","description":"The [Visual Studio Code Remote - Containers] extension lets you use a Docker container as a full-featured development environment, which helps ensure a consistent environment across developer machines and makes it easy for new team members and contributors to get up and running. Since Rancher Desktop supports Docker CLI via [Moby], you can use the Visual Studio Code Remote - Containers extension out-of-the-box.","sidebar":"tutorialSidebar"},"references/architecture":{"id":"references/architecture","title":"Architecture","description":"Rancher Desktop Architecture","sidebar":"tutorialSidebar"},"references/rdctl-command-reference":{"id":"references/rdctl-command-reference","title":"rdctl Command Reference","description":"rdctl is a command-line tool, included in Rancher Desktop that enables command-line access to GUI features. rdctl is developed to help users with tasks such as scripting (for automation, CI/CD), troubleshooting, remote management, etc. The current version of rdctl supports the below commands (with support for more commands to be added in upcoming releases):","sidebar":"tutorialSidebar"},"troubleshooting-tips":{"id":"troubleshooting-tips","title":"Troubleshooting Tips","description":"This page provides tips to troubleshoot issues you may have with Rancher Desktop.","sidebar":"tutorialSidebar"},"tutorials/working-with-containers":{"id":"tutorials/working-with-containers","title":"Working with Containers","description":"nerdctl is a Docker-compatible CLI for containerd. The primary goal of nerdctl is to facilitate experimenting with cutting-edge features of containerd that are not present in Docker.","sidebar":"tutorialSidebar"},"tutorials/working-with-images":{"id":"tutorials/working-with-images","title":"Working with Images","description":"Rancher Desktop provides the ability to build, push, and pull images via the","sidebar":"tutorialSidebar"}}}')}}]);