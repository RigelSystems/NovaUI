import{d as i,s as c,e as o,j as t,n as r,l as m,t as a,m as p,o as n}from"./vue.esm-bundler-BjHivwhV.js";import{_ as u}from"./_plugin-vue_export-helper-DlAUqK2U.js";const d=i({name:"NDropdown",props:{label:{type:String},content:{type:String},chevron:{type:Boolean,default:!0}},setup(){const e=c(!1);return{isOpen:e,toggleDropdown:()=>{e.value=!e.value}}}}),w={class:"n-dropdown"},f={key:1,class:"n-dropdown__header-text"},_={key:0};function g(e,s,v,y,N,D){return n(),o("div",w,[t("div",{onClick:s[0]||(s[0]=(...l)=>e.toggleDropdown&&e.toggleDropdown(...l)),class:"n-dropdown__header"},[e.chevron?(n(),o("span",{key:0,class:r(["mdi mdi-chevron-up",["n-dropdown__caret",{"n-dropdown__caret--open":e.isOpen}]])},null,2)):m("",!0),e.$props.label?(n(),o("p",f,a(e.$props.label),1)):p(e.$slots,"label",{key:2})]),t("div",{ref:"dropdownContent",class:r(["n-dropdown__content",{"n-dropdown__content--open":e.isOpen}])},[e.$props.content?(n(),o("p",_,a(e.$props.content),1)):p(e.$slots,"content",{key:1})],2)])}const k=u(d,[["render",g]]);d.__docgenInfo={displayName:"NDropdown",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"content",type:{name:"string"}},{name:"chevron",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"label"},{name:"content"}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NDropdown/NDropdown.vue"]};export{k as default};
