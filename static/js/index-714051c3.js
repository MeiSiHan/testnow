import{c as _,a as h,d as y,b as v,o as g,r as E,e as k}from"./.pnpm-afa2a407.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();const L="modulepreload",b=function(s){return"/love/"+s},u={},f=function(o,r,i){if(!r||r.length===0)return o();const t=document.getElementsByTagName("link");return Promise.all(r.map(e=>{if(e=b(e),e in u)return;u[e]=!0;const n=e.endsWith(".css"),d=n?'[rel="stylesheet"]':"";if(!!i)for(let l=t.length-1;l>=0;l--){const a=t[l];if(a.href===e&&(!n||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${d}`))return;const c=document.createElement("link");if(c.rel=n?"stylesheet":L,n||(c.as="script",c.crossOrigin=""),c.href=e,document.head.appendChild(c),n)return new Promise((l,a)=>{c.addEventListener("load",l),c.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o())},p=_({history:h("/love"),routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:()=>f(()=>import("./index-a0bb3952.js"),["static/js/index-a0bb3952.js","static/js/.pnpm-afa2a407.js","static/css/index-ce3f7725.css"])},{path:"/index",name:"index",component:()=>f(()=>import("./index-cd8ec063.js"),["static/js/index-cd8ec063.js","static/js/.pnpm-afa2a407.js","static/css/index-5d75af1d.css"]),meta:{keepAlive:!0}}]});p.beforeEach((s,o,r)=>{r()});const A=y({__name:"App",setup(s){return(o,r)=>{const i=E("router-view");return g(),v(i)}}});const O=(s,o)=>{const r=s.__vccOpts||s;for(const[i,t]of o)r[i]=t;return r},P=O(A,[["__scopeId","data-v-92f5559b"]]),m=k(P);m.use(p);m.mount("#app");export{O as _};
