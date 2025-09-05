import{d as f,q as r,o as w,s as T,z as a,A as n,m as p}from"./vue.esm-bundler-C_Ws3nPw.js";import{N as P}from"./NTabs-D-DkCzvL.js";import{N as g}from"./NTab-DeaGLXZt.js";import{N as x}from"./NTabPanel-BknN6dSo.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";const u=f({name:"NTabPreview",components:{NTabs:P,NTab:g,NTabPanel:x}});function C(s,t,$,D,h,B){const i=r("n-tab"),l=r("n-tab-panel"),N=r("n-tabs");return w(),T(N,null,{tabs:a(({activeTab:e,setActiveTab:c})=>[n(i,{label:"Overview",active:e===0,onClick:_=>c(0)},null,8,["active","onClick"]),n(i,{label:"Details",active:e===1,onClick:_=>c(1)},null,8,["active","onClick"])]),default:a(({activeTab:e})=>[n(l,{index:0,activeTab:e},{default:a(()=>t[0]||(t[0]=[p("p",null,"This is the Overview content.",-1)])),_:2},1032,["activeTab"]),n(l,{index:1,activeTab:e},{default:a(()=>t[1]||(t[1]=[p("p",null,"This is the Details content.",-1)])),_:2},1032,["activeTab"])]),_:1})}const b=k(u,[["render",C]]);u.__docgenInfo={displayName:"NTabPreview",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NTabPreview/NTabPreview.vue"]};const y={component:b,title:"Navigation/NTabPreview"},o={render:s=>({components:{NTabPreview:b},setup:()=>({args:s}),template:'<NTabPreview v-bind="args" />'})};var m,d,v;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      NTabPreview
    },
    setup: () => ({
      args
    }),
    template: '<NTabPreview v-bind="args" />'
  })
}`,...(v=(d=o.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};const z=["Default"];export{o as Default,z as __namedExportsOrder,y as default};
