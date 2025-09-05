const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./NNotification-yXPA7iKD.js","./iframe-BA0OxFD2.js","./vue.esm-bundler-C_Ws3nPw.js","./_plugin-vue_export-helper-DlAUqK2U.js"])))=>i.map(i=>d[i]);
import{h as L,d as S,H as D}from"./index-CENpTiMW.js";import{_ as M}from"./iframe-BA0OxFD2.js";import{d as T,u as p,x as $,l as E,q as C,o,b as i,t as R,f as j,F as H,p as O,s as P}from"./vue.esm-bundler-C_Ws3nPw.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./decorators-Bnaor6Ku.js";const F=E(()=>M(()=>import("./NNotification-yXPA7iKD.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),B=T({name:"NNotificationList",components:{NNotification:F},props:{url:{type:String,required:!0},method:{type:String,default:"get"},params:{type:Object,default:()=>({})},accessToken:{type:String,default:""}},setup(e){const d=p([]),s=p(!1),n=p(null);return $(async()=>{s.value=!0,n.value=null;const u={"Content-Type":"application/json"};e.accessToken&&(u.Authorization=`Bearer ${e.accessToken}`);const r={method:e.method.toUpperCase(),headers:u};e.method!=="get"&&(r.body=JSON.stringify(e.params));const a=e.method==="get"?`${e.url}?${new URLSearchParams(e.params).toString()}`:e.url;try{const t=await fetch(a,r);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const b=await t.json();d.value=b||[]}catch(t){n.value=t.message||"An error occurred"}finally{s.value=!1}}),{notifications:d,isLoading:s,error:n}}}),I={class:"n-notification-list"},U={key:0},q={key:1,class:"error"};function x(e,d,s,n,V,u){const r=C("n-notification");return o(),i("div",I,[e.isLoading?(o(),i("div",U,"Loading...")):e.error?(o(),i("div",q,R(e.error),1)):j("",!0),(o(!0),i(H,null,O(e.notifications,(a,t)=>(o(),P(r,{key:t,message:a.message,time:a.time,actionButtons:a.actionButtons},null,8,["message","time","actionButtons"]))),128))])}const z=A(B,[["render",x]]);B.__docgenInfo={displayName:"NNotificationList",exportName:"default",description:"",tags:{},props:[{name:"url",type:{name:"string"},required:!0},{name:"method",type:{name:"Method"},defaultValue:{func:!1,value:"'get'"}},{name:"params",type:{name:"Record<string, any>"},defaultValue:{func:!0,value:"() => ({})"}},{name:"accessToken",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NNotificationList/NNotificationList.vue"]};const Y={component:z,title:"Feedback/NNotificationList"},c={args:{url:"/mock/data",method:"get",params:{}}},J=[{message:"Notification 1",time:"1 hour ago",actionButtons:[{label:"View",action:()=>console.log("View clicked")},{label:"Dismiss",action:()=>console.log("Dismiss clicked")}]},{message:"Notification 1",time:"1 hour ago",actionButtons:[{label:"View",action:()=>console.log("View clicked")},{label:"Dismiss",action:()=>console.log("Dismiss clicked")}]}],m={args:{url:"/mock/data",method:"get",params:{}},parameters:{msw:{handlers:[L.get("/mock/data",async()=>(await S(500),D.json(J)))]}}},l={args:{url:"/mock/data",method:"get",params:{}},parameters:{msw:{handlers:[L.get("/mock/data",async()=>(await S(500),new D(null,{status:403})))]}}};var f,g,h;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
