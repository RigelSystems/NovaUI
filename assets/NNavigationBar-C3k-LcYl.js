import{d as b,s as p,e as o,j as s,F as r,k as i,n as m,l,o as t,t as u}from"./vue.esm-bundler-BjHivwhV.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";const g=b({name:"NNavigationBar",props:{links:{type:Array,default:()=>[]},mobileBottomLinks:{type:Array,default:()=>[]}},setup(a){const n=p(!1);function d(){n.value=!n.value}return{isOpen:n,toggleSidebar:d,links:a.links,mobileBottomLinks:a.mobileBottomLinks}}}),f={class:"n-navigation-bar"},c={class:"n-navigation-bar__desktop-nav"},k=["href"],y={class:"n-navigation-bar__mobile-nav"},N=["href"],_={key:0,class:"n-navigation-bar__bottom-nav"},B=["href"],h={key:0,class:"label"};function L(a,n,d,S,C,A){return t(),o(r,null,[s("nav",f,[s("ul",c,[(t(!0),o(r,null,i(a.links,e=>(t(),o("li",{key:e.url},[s("a",{href:e.url},u(e.label),9,k)]))),128))]),s("button",{class:"menu-button",onClick:n[0]||(n[0]=(...e)=>a.toggleSidebar&&a.toggleSidebar(...e))},"☰"),s("div",{class:m(["sidebar",{open:a.isOpen}])},[s("button",{class:"close-button",onClick:n[1]||(n[1]=(...e)=>a.toggleSidebar&&a.toggleSidebar(...e))},"×"),s("ul",y,[(t(!0),o(r,null,i(a.links,e=>(t(),o("li",{key:e.url},[s("a",{href:e.url},u(e.label),9,N)]))),128))])],2),a.isOpen?(t(),o("div",{key:0,class:"overlay",onClick:n[2]||(n[2]=(...e)=>a.toggleSidebar&&a.toggleSidebar(...e))})):l("",!0)]),a.mobileBottomLinks.length>0?(t(),o("div",_,[s("ul",null,[(t(!0),o(r,null,i(a.mobileBottomLinks,e=>(t(),o("li",{key:e.url},[s("a",{href:e.url},[e.label?(t(),o("span",h,u(e.label),1)):l("",!0),e.icon?(t(),o("span",{key:1,class:m(["mdi",e.icon])},null,2)):l("",!0)],8,B)]))),128))])])):l("",!0)],64)}const F=v(g,[["render",L]]);g.__docgenInfo={displayName:"NNavigationBar",exportName:"default",description:"",tags:{},props:[{name:"links",type:{name:"Array as () => NavigationLink[]"},defaultValue:{func:!0,value:"() => []"}},{name:"mobileBottomLinks",type:{name:"Array as () => NavigationLink[]"},defaultValue:{func:!0,value:"() => []"}}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NNavigationBar/NNavigationBar.vue"]};export{F as default};
