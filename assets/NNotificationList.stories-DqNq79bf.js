const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./NNotification-oInSKKcR.js","./iframe-B_QAoCS8.js","./vue.esm-bundler-Dvxx9qIC.js","./_plugin-vue_export-helper-DlAUqK2U.js","./NNotification-sqU1OKqW.css"])))=>i.map(i=>d[i]);
import{_ as u}from"./iframe-B_QAoCS8.js";import{d as f,g as l,e as s,F as d,k as _,m as N,o,p as g}from"./vue.esm-bundler-Dvxx9qIC.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-eQqs7920.js";const h=l(()=>u(()=>import("./NNotification-oInSKKcR.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),c=f({name:"NNotificationList",components:{NNotification:h},props:{notifications:{type:Array,required:!0}},setup(i){return{}}}),L={class:"n-notification-list"};function b(i,v,A,D,k,x){const p=N("n-notification");return o(),s("div",L,[(o(!0),s(d,null,_(i.notifications,(e,m)=>(o(),g(p,{key:m,message:e.message,time:e.time,actionButtons:e.actionButtons},null,8,["message","time","actionButtons"]))),128))])}const B=y(c,[["render",b]]);c.__docgenInfo={displayName:"NNotificationList",exportName:"default",description:"",tags:{},props:[{name:"notifications",type:{name:"Array as () => Notification[]"},required:!0}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NNotificationList/NNotificationList.vue"]};const C={title:"NNotificationList",component:B,tags:["autodocs"],argTypes:{notifications:{control:{type:"text"}}},args:{notifications:[{message:"<p><b>John Doe</b> has sent you a friend request.</p>",time:"1 hour ago",actionButtons:[{label:"Accept",primary:!0},{label:"Decline",primary:!1}]},{message:"<p><b>John Doe</b> has sent you a friend request.</p>",time:"1 hour ago",actionButtons:[{label:"Accept",primary:!0},{label:"Decline",primary:!1}]}]},parameters:{docs:{description:{component:"A description of the component."}}}},t={};var n,a,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const F=["Default"];export{t as Default,F as __namedExportsOrder,C as default};
