import{f as z}from"./index-C_FWhylE.js";import{d as N,k as _,p as U,e as $,t as I,n as R,q,o as E}from"./vue.esm-bundler-CpL-5nD6.js";import"./NOrderList-CZHvHn-j.js";import"./NDropdown-XNkeUYOu.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";const P=Symbol("NovaUIConfig"),C=N({name:"NButton",props:{label:{type:String,required:!0},primary:{type:Boolean,default:!1},size:{type:String,default:"medium"},backgroundColor:String},emits:["click"],setup(e,{emit:o}){const n=U(P,{theme:"blue",borderRadius:"4px"}),l=_(()=>({"storybook-button":!0,"storybook-button--primary":e.primary,"storybook-button--secondary":!e.primary,[`storybook-button--${e.size}`]:!0}));return{novaConfig:n,classes:l,onClick:()=>{o("click")}}}});function V(e,o,n,l,S,j){return E(),$("button",{type:"button",class:R(e.classes),onClick:o[0]||(o[0]=(...v)=>e.onClick&&e.onClick(...v)),style:q({backgroundColor:e.novaConfig.theme,borderRadius:e.novaConfig.borderRadius})},I(e.label),7)}const h=L(C,[["render",V]]);C.__docgenInfo={displayName:"NButton",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"primary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"String as () => 'small' | 'medium' | 'large'"},defaultValue:{func:!1,value:"'medium'"}},{name:"backgroundColor",type:{name:"string"}}],events:[{name:"click"}],sourceFiles:["/Users/alexford/RigelSystems/NovaUI/src/stories/button/NButton.vue"]};const w={title:"Utilities/Button",component:h,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},backgroundColor:{control:"color"}},args:{onClick:z()}},r={args:{primary:!0,label:"Button"}},a={args:{label:"Button"}},t={args:{size:"large",label:"Button"}},s={args:{size:"small",label:"Button"}};var i,u,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var c,p,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,b,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,k,B;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(B=(k=s.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const A=["Primary","Secondary","Large","Small"];export{t as Large,r as Primary,a as Secondary,s as Small,A as __namedExportsOrder,w as default};
