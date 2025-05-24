import{d as f,q as s,o as T,s as w,z as a,A as o,m as p}from"./vue.esm-bundler-DLJ_4Uzc.js";import{N as P}from"./NTabs-CocWrwRH.js";import{N as x}from"./NTab-CRiDWp4y.js";import{N as g}from"./NTabPanel-DhJbv_1q.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";const v=f({name:"NTabPreview",components:{NTabs:P,NTab:x,NTabPanel:g}});function C(r,t,$,D,h,B){const i=s("n-tab"),l=s("n-tab-panel"),_=s("n-tabs");return T(),w(_,null,{tabs:a(({activeTab:e,setActiveTab:c})=>[o(i,{label:"Overview",active:e===0,onClick:N=>c(0)},null,8,["active","onClick"]),o(i,{label:"Details",active:e===1,onClick:N=>c(1)},null,8,["active","onClick"])]),default:a(({activeTab:e})=>[o(l,{index:0,activeTab:e},{default:a(()=>t[0]||(t[0]=[p("p",null,"This is the Overview content.",-1)])),_:2},1032,["activeTab"]),o(l,{index:1,activeTab:e},{default:a(()=>t[1]||(t[1]=[p("p",null,"This is the Details content.",-1)])),_:2},1032,["activeTab"])]),_:1})}const b=k(v,[["render",C]]);v.__docgenInfo={displayName:"NTabPreview",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NTabPreview/NTabPreview.vue"]};const q={component:b,title:"Layout/Tabs/NTabPreview"},n={render:r=>({components:{NTabPreview:b},setup:()=>({args:r}),template:'<NTabPreview v-bind="args" />'})};var m,d,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      NTabPreview
    },
    setup: () => ({
      args
    }),
    template: '<NTabPreview v-bind="args" />'
  })
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const z=["Default"];export{n as Default,z as __namedExportsOrder,q as default};
