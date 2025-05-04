const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./NTabs-BDjdqGM9.js","./vue.esm-bundler-B7Tz_gfl.js","./_plugin-vue_export-helper-DlAUqK2U.js","./NTabs-Do7ozpPC.css","./NTab-BcgkSzMw.js","./NTab-CC08UDDg.css","./NTabPanel-DjMQn2de.js"])))=>i.map(i=>d[i]);
import{_ as s}from"./iframe-Ba5HEGk7.js";import{d as P,k as i,p as r,o as w,q as k,y as a,z as o,l as _}from"./vue.esm-bundler-B7Tz_gfl.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";const g=i(()=>s(()=>import("./NTabs-BDjdqGM9.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),D=i(()=>s(()=>import("./NTab-BcgkSzMw.js"),__vite__mapDeps([4,1,2,5]),import.meta.url)),E=i(()=>s(()=>import("./NTabPanel-DjMQn2de.js"),__vite__mapDeps([6,1,2]),import.meta.url)),b=P({name:"NTabPreview",components:{NTabs:g,NTab:D,NTabPanel:E}});function x(e,t,I,O,$,V){const c=r("n-tab"),l=r("n-tab-panel"),N=r("n-tabs");return w(),k(N,null,{tabs:a(({activeTab:p,setActiveTab:m})=>[o(c,{label:"Overview",active:p===0,onClick:f=>m(0)},null,8,["active","onClick"]),o(c,{label:"Details",active:p===1,onClick:f=>m(1)},null,8,["active","onClick"])]),default:a(()=>[o(l,{index:0,activeTab:e.activeTab},{default:a(()=>t[0]||(t[0]=[_("p",null,"This is the Overview content.",-1)])),_:1},8,["activeTab"]),o(l,{index:1,activeTab:e.activeTab},{default:a(()=>t[1]||(t[1]=[_("p",null,"This is the Details content.",-1)])),_:1},8,["activeTab"])]),_:1})}const T=C(b,[["render",x]]);b.__docgenInfo={displayName:"NTabPreview",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NTabPreview/NTabPreview.vue"]};const A={component:T,title:"Layout/Tabs/NTabPreview"},n={render:e=>({components:{NTabPreview:T},setup:()=>({args:e}),template:'<NTabPreview v-bind="args" />'})};var v,d,u;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => ({
    components: {
      NTabPreview
    },
    setup: () => ({
      args
    }),
    template: '<NTabPreview v-bind="args" />'
  })
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const B=["Default"];export{n as Default,B as __namedExportsOrder,A as default};
