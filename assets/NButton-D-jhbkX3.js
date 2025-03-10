import{d as b,b as V,p as y,e as s,f as m,F as C,l as k,o as a,q as B,t as f,g as $,s as h,u as w,v as z,w as F,x as T,k as S,y as c,z as E,n as P}from"./vue.esm-bundler-DjLMENKV.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./NOrderList-CwMauLfx.js";import"./NDropdown-CSC53Ngu.js";const I=b({name:"NNavigationBar",props:{links:{type:Array,required:!1}},setup(e){const t=V(e.links);return{novaConfig:y(v,{theme:"blue",borderRadius:"4px"}),links:t}}}),j={class:"n-navigation-bar"},D=["href"];function L(e,t,l,i,u,d){return a(),s("nav",j,[m("ul",null,[(a(!0),s(C,null,k(e.links,n=>(a(),s("li",{style:B({color:e.novaConfig.theme})},[m("a",{href:n.url},f(n.label),9,D)],4))),256))])])}const M=g(I,[["render",L]]);I.__docgenInfo={displayName:"NNavigationBar",exportName:"default",description:"",tags:{},props:[{name:"links",type:{name:"Array as () => NavigationLink[]"},required:!1}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NNavigationBar/NNavigationBar.vue"]};const x=b({name:"NCard",components:{NButton:oe},props:{title:{type:String,required:!0},subtitle:{type:String,default:""},content:{type:String,default:""},actionButtons:{type:Array,default:()=>[]}},setup(e){return{novaConfig:y(v,{theme:"blue",borderRadius:"4px"})}}}),O={class:"n-card"},H={class:"n-card__title"},G={class:"n-card__subtitle"},J={key:0},K={key:2,class:"n-card__actions"};function Q(e,t,l,i,u,d){const n=h("n-button");return a(),s("div",O,[m("h2",H,f(e.title),1),m("h6",G,f(e.subtitle),1),t[0]||(t[0]=m("hr",null,null,-1)),e.content?(a(),s("p",J,f(e.content),1)):$(e.$slots,"content",{key:1}),t[1]||(t[1]=m("hr",null,null,-1)),e.actionButtons.length>0?(a(),s("div",K,[(a(!0),s(C,null,k(e.actionButtons,(o,r)=>(a(),w(n,{key:r,label:o.label},null,8,["label"]))),128))])):$(e.$slots,"actions",{key:3})])}const W=g(x,[["render",Q]]);x.__docgenInfo={displayName:"NCard",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!0},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"content",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"actionButtons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],slots:[{name:"content"},{name:"actions"}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NCard/NCard.vue"]};const R=b({name:"NRow",props:{cols:{type:Object,required:!0}},setup(e,{slots:t}){const l=y(v,{theme:"blue",borderRadius:"4px"}),i={sm:640,md:768,lg:1024,xl:1280},u="n-row-dynamic-styles",d=()=>{let n=`
        .n-row {
          display: flex;
          flex-wrap: wrap;
        }
        .n-col {
          box-sizing: border-box;
        }
      `;const o=Object.keys(e.cols)[0];if(o){const p=e.cols[o];p.forEach((N,_)=>{n+=`
            .n-col:nth-child(${p.length}n + ${_+1}) {
              width: ${N}%;
            }
          `})}for(const[p,N]of Object.entries(e.cols))i[p]&&(n+=`@media (min-width: ${i[p]}px) {
`,N.forEach((_,A)=>{n+=`
            .n-col:nth-child(${N.length}n + ${A+1}) {
              width: ${_}%;
            }
          `}),n+=`}
`);let r=document.getElementById(u);r||(r=document.createElement("style"),r.id=u,document.head.appendChild(r)),r.innerHTML=n};return z(d),F(()=>e.cols,d,{deep:!0}),{novaConfig:l}}}),X={class:"n-row"};function Y(e,t,l,i,u,d){var n,o;return a(),s("div",X,[(a(!0),s(C,null,k(((o=(n=e.$slots).default)==null?void 0:o.call(n))||[],(r,p)=>(a(),s("div",{class:"n-col",key:p},[(a(),w(T(r)))]))),128))])}const Z=g(R,[["render",Y],["__scopeId","data-v-4ca84b6b"]]);R.__docgenInfo={displayName:"NRow",exportName:"default",description:"",tags:{},props:[{name:"cols",type:{name:"ColBreakpoints"},required:!0}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NRow/NRow.vue"]};const U=b({name:"Preview",components:{NNavigationBar:M,NCard:W,NRow:Z},props:{label:{type:String,required:!0}},setup(e){const t=S(()=>[{label:"Home",url:"/"},{label:"About",url:"/about"},{label:"Contact",url:"/contact"}]);return{novaConfig:y(v,{theme:"blue",borderRadius:"4px"}),links:t}}}),ee={class:"preview"};function te(e,t,l,i,u,d){const n=h("NNavigationBar"),o=h("NCard"),r=h("NRow");return a(),s("div",ee,[c(n,{links:e.links},null,8,["links"]),c(r,{cols:{sm:[100],md:[60,40],lg:[33.33,33.33,33.33]}},{default:E(()=>[c(o,{title:"Card Title",subtitle:"Card Subtitle",content:"Some example text for this card",actionButtons:[{label:"Action Button",url:"/home"}]}),c(o,{title:"Card Title",subtitle:"Card Subtitle",content:"Some example text for this card",actionButtons:[{label:"Action Button",url:"/home"}]}),c(o,{title:"Card Title",subtitle:"Card Subtitle",content:"Some example text for this card",actionButtons:[{label:"Action Button",url:"/home"}]}),c(o,{title:"Card Title",subtitle:"Card Subtitle",content:"Some example text for this card",actionButtons:[{label:"Action Button",url:"/home"}]}),c(o,{title:"Card Title",subtitle:"Card Subtitle",content:"Some example text for this card",actionButtons:[{label:"Action Button",url:"/home"}]}),c(o,{title:"Card Title",subtitle:"Card Subtitle",content:"Some example text for this card",actionButtons:[{label:"Action Button",url:"/home"}]})]),_:1})])}const ie=g(U,[["render",te]]);U.__docgenInfo={displayName:"Preview",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/Preview/Preview.vue"]};const v=Symbol("NovaUIConfig"),q=b({name:"NButton",props:{label:{type:String,required:!0},primary:{type:Boolean,default:!1},size:{type:String,default:"medium"},backgroundColor:{type:String,default:""}},emits:["click"],setup(e,{emit:t}){const l=y(v,{theme:"blue",borderRadius:"4px"}),i=S(()=>({"storybook-button":!0,"storybook-button--primary":e.primary,"storybook-button--secondary":!e.primary,[`storybook-button--${e.size}`]:!0}));return{novaConfig:l,classes:i,onClick:()=>{t("click")}}}});function ne(e,t,l,i,u,d){return a(),s("button",{type:"button",class:P(e.classes),onClick:t[0]||(t[0]=(...n)=>e.onClick&&e.onClick(...n)),style:B({backgroundColor:e.novaConfig.theme,borderRadius:e.novaConfig.borderRadius})},f(e.label),7)}const oe=g(q,[["render",ne]]);q.__docgenInfo={displayName:"NButton",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"primary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"String as () => 'small' | 'medium' | 'large'"},defaultValue:{func:!1,value:"'medium'"}},{name:"backgroundColor",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"click"}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NButton/NButton.vue"]};export{oe as N,ie as P,W as a,M as b,Z as c};
