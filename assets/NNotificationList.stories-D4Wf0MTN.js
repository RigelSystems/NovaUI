const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./NNotification-D8RlhClx.js","./iframe-B_g_PMQw.js","./vue.esm-bundler-CHMfRlrZ.js","./_plugin-vue_export-helper-DlAUqK2U.js"])))=>i.map(i=>d[i]);
import{h as S,d as L,H as D}from"./index-CENpTiMW.js";import{_ as T}from"./iframe-B_g_PMQw.js";import{d as $,u as p,x as b,l as E,q as C,o,b as i,t as R,f as j,F as H,p as O,s as P}from"./vue.esm-bundler-CHMfRlrZ.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./decorators-Bnaor6Ku.js";const I=E(()=>T(()=>import("./NNotification-D8RlhClx.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),B=$({name:"NNotificationList",components:{NNotification:I},props:{url:{type:String,required:!0},method:{type:String,default:"get"},params:{type:Object,default:()=>({})},accessToken:{type:String,default:""}},setup(e){const u=p([]),s=p(!1),n=p(null);return b(async()=>{s.value=!0,n.value=null;const d={"Content-Type":"application/json"};e.accessToken&&(d.Authorization=`Bearer ${e.accessToken}`);const r={method:e.method.toUpperCase(),headers:d};e.method!=="get"&&(r.body=JSON.stringify(e.params));const a=e.method==="get"?`${e.url}?${new URLSearchParams(e.params).toString()}`:e.url;try{const t=await fetch(a,r);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const M=await t.json();u.value=M||[]}catch(t){n.value=t.message||"An error occurred"}finally{s.value=!1}}),{notifications:u,isLoading:s,error:n}}}),U={class:"n-notification-list"},q={key:0},F={key:1,class:"error"};function x(e,u,s,n,V,d){const r=C("n-notification");return o(),i("div",U,[e.isLoading?(o(),i("div",q,"Loading...")):e.error?(o(),i("div",F,R(e.error),1)):j("",!0),(o(!0),i(H,null,O(e.notifications,(a,t)=>(o(),P(r,{key:t,message:a.message,time:a.time,actionButtons:a.actionButtons},null,8,["message","time","actionButtons"]))),128))])}const z=A(B,[["render",x]]);B.__docgenInfo={displayName:"NNotificationList",exportName:"default",description:"",tags:{},props:[{name:"url",type:{name:"string"},required:!0},{name:"method",type:{name:"Method"},defaultValue:{func:!1,value:"'get'"}},{name:"params",type:{name:"Record<string, any>"},defaultValue:{func:!0,value:"() => ({})"}},{name:"accessToken",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NNotificationList/NNotificationList.vue"]};const Y={component:z,title:"Social/Notifications/NNotificationList"},c={args:{url:"/mock/data",method:"get",params:{}}},J=[{message:"Notification 1",time:"1 hour ago",actionButtons:[{label:"View",action:()=>console.log("View clicked")},{label:"Dismiss",action:()=>console.log("Dismiss clicked")}]},{message:"Notification 1",time:"1 hour ago",actionButtons:[{label:"View",action:()=>console.log("View clicked")},{label:"Dismiss",action:()=>console.log("Dismiss clicked")}]}],m={args:{url:"/mock/data",method:"get",params:{}},parameters:{msw:{handlers:[S.get("/mock/data",async()=>(await L(500),D.json(J)))]}}},l={args:{url:"/mock/data",method:"get",params:{}},parameters:{msw:{handlers:[S.get("/mock/data",async()=>(await L(500),new D(null,{status:403})))]}}};var f,g,h;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    url: '/mock/data',
    method: 'get',
    params: {}
  }
}`,...(h=(g=c.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var k,y,_;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    url: '/mock/data',
    method: 'get',
    params: {}
  },
  parameters: {
    msw: {
      handlers: [http.get('/mock/data', async () => {
        await delay(500); // simulate loading delay
        return HttpResponse.json(MockData);
      })]
    }
  }
}`,...(_=(y=m.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var N,w,v;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    url: '/mock/data',
    method: 'get',
    params: {}
  },
  parameters: {
    msw: {
      handlers: [http.get('/mock/data', async () => {
        await delay(500);
        return new HttpResponse(null, {
          status: 403
        });
      })]
    }
  }
}`,...(v=(w=l.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};const Z=["Default","MockedSuccess","MockedError"];export{c as Default,l as MockedError,m as MockedSuccess,Z as __namedExportsOrder,Y as default};
