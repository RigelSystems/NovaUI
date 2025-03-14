const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./NDropdown-DKJSbasw.js","./vue.esm-bundler-DsTscZPD.js","./_plugin-vue_export-helper-DlAUqK2U.js"])))=>i.map(i=>d[i]);
import{d as N,b as U,p as h,e as r,f as l,F as k,l as B,n as I,j as x,o as n,q as E,t as _,k as O,s as b,u as s,v as R,x as f,g as A,y as V,z as Q,w as K,A as X}from"./vue.esm-bundler-DsTscZPD.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./NOrderList-DEFMUyZh.js";import"./NDropdown-DKJSbasw.js";import{_ as g}from"./iframe-CZy0JZ2P.js";const F=N({name:"NNavigationBar",props:{links:{type:Array,default:()=>[]}},setup(e){const t=h(S,{theme:"blue",borderRadius:"4px"}),a=U(!1);function i(){a.value=!a.value}return{novaConfig:t,isOpen:a,toggleSidebar:i,links:e.links}}}),Y={class:"n-navigation-bar"},Z={class:"n-navigation-bar__desktop-nav"},ee=["href"],te={class:"n-navigation-bar__mobile-nav"},oe=["href"];function ne(e,t,a,i,d,p){return n(),r("nav",Y,[l("ul",Z,[(n(!0),r(k,null,B(e.links,o=>(n(),r("li",{key:o.url,style:E({color:e.novaConfig.theme})},[l("a",{href:o.url},_(o.label),9,ee)],4))),128))]),l("button",{class:"menu-button",onClick:t[0]||(t[0]=(...o)=>e.toggleSidebar&&e.toggleSidebar(...o))},"☰"),l("div",{class:I(["sidebar",{open:e.isOpen}])},[l("button",{class:"close-button",onClick:t[1]||(t[1]=(...o)=>e.toggleSidebar&&e.toggleSidebar(...o))},"×"),l("ul",te,[(n(!0),r(k,null,B(e.links,o=>(n(),r("li",{key:o.url,style:E({color:e.novaConfig.theme})},[l("a",{href:o.url},_(o.label),9,oe)],4))),128))])],2),e.isOpen?(n(),r("div",{key:0,class:"overlay",onClick:t[2]||(t[2]=(...o)=>e.toggleSidebar&&e.toggleSidebar(...o))})):x("",!0)])}const ae=$(F,[["render",ne]]);F.__docgenInfo={displayName:"NNavigationBar",exportName:"default",description:"",tags:{},props:[{name:"links",type:{name:"Array as () => NavigationLink[]"},defaultValue:{func:!0,value:"() => []"}}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NNavigationBar/NNavigationBar.vue"]};const re=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"})),se=b(()=>g(()=>Promise.resolve().then(()=>Ve),void 0,import.meta.url)),le=b(()=>g(()=>import("./NDropdown-DKJSbasw.js"),__vite__mapDeps([0,1,2]),import.meta.url)),ie=b(()=>g(()=>Promise.resolve().then(()=>Be),void 0,import.meta.url)),ue=b(()=>g(()=>Promise.resolve().then(()=>Se),void 0,import.meta.url)),ce=b(()=>g(()=>Promise.resolve().then(()=>re),void 0,import.meta.url)),de=b(()=>g(()=>Promise.resolve().then(()=>He),void 0,import.meta.url)),pe=b(()=>g(()=>Promise.resolve().then(()=>j),void 0,import.meta.url)),z=N({name:"Preview",components:{NNavigationBar:ce,NCard:ue,NRow:ie,NHeroSection:se,NDropdown:le,NTextInput:de,NButton:pe},props:{label:{type:String,required:!0}},setup(e){const t=O(()=>[{label:"Home",url:"/"},{label:"About",url:"/about"},{label:"Contact",url:"/contact"}]);return{novaConfig:h(S,{theme:"blue",borderRadius:"4px"}),links:t}}}),me={class:"preview"};function _e(e,t,a,i,d,p){const o=f("NNavigationBar"),c=f("NHeroSection"),u=f("NCard"),v=f("NRow"),C=f("NDropdown"),m=f("NTextInput"),y=f("NButton");return n(),r("div",me,[s(o,{links:e.links},null,8,["links"]),s(c,{title:"Hero Section Title",subtitle:"Hero Section Subtitle",content:"Some example text for this hero section",actionButtons:[{label:"Action Button",url:"/home"}]}),s(v,{cols:{sm:[100],md:[60,40,40,60],lg:[33.33,33.33,33.33]}},{default:R(()=>[s(u,{title:"Card Title",subtitle:"Card Subtitle",content:"Some example text for this card",actionButtons:[{label:"Action Button",url:"/home"}]}),s(u,{title:"Card Title",subtitle:"Card Subtitle",content:"Some example text for this card",actionButtons:[{label:"Action Button",url:"/home"}]}),s(u,{title:"Card Title",subtitle:"Card Subtitle",content:"Some example text for this card",actionButtons:[{label:"Action Button",url:"/home"}]}),s(u,{title:"Card Title",subtitle:"Card Subtitle",content:"Some example text for this card",actionButtons:[{label:"Action Button",url:"/home"}]}),s(u,{title:"Card Title",subtitle:"Card Subtitle",content:"Some example text for this card",actionButtons:[{label:"Action Button",url:"/home"}]}),s(u,{title:"Card Title",subtitle:"Card Subtitle",content:"Some example text for this card",actionButtons:[{label:"Action Button",url:"/home"}]})]),_:1}),s(v,{cols:{sm:[100],md:[33.3,33.3,33.3]}},{default:R(()=>[s(C,{label:"Click Me",content:"Some hidden information!"}),s(C,{label:"Don't click me!",content:"What did I say..."}),s(C,{label:"Ummmmm",content:"Wow, you're an explorer!"})]),_:1}),t[0]||(t[0]=l("h2",null,"Contact Form",-1)),t[1]||(t[1]=l("p",null,"Please enter your details below and we'll contact you shortly!",-1)),s(v,{cols:{sm:[100],md:[50,50,100,100]}},{default:R(()=>[s(m,{label:"First Name",placeholder:"John"}),s(m,{label:"Last Name",placeholder:"Doe"}),s(m,{label:"Email",placeholder:"Enter your email address"}),s(m,{label:"Message",placeholder:"Enter your message here"}),s(y,{label:"Submit"})]),_:1})])}const Ke=$(z,[["render",_e]]);z.__docgenInfo={displayName:"Preview",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/Preview/Preview.vue"]};const fe=b(()=>g(()=>Promise.resolve().then(()=>j),void 0,import.meta.url)),H=N({name:"NCard",components:{NButton:fe},props:{title:{type:String,required:!0},subtitle:{type:String,default:""},content:{type:String,default:""},actionButtons:{type:Array,default:()=>[]}},setup(e){return{novaConfig:h(S,{theme:"blue",borderRadius:"4px"})}}}),be={class:"n-card"},ge={class:"n-card__title"},ve={class:"n-card__subtitle"},ye={key:0},Ne={key:2,class:"n-card__actions"};function he(e,t,a,i,d,p){const o=f("n-button");return n(),r("div",be,[l("h2",ge,_(e.title),1),l("h6",ve,_(e.subtitle),1),t[0]||(t[0]=l("hr",null,null,-1)),e.content?(n(),r("p",ye,_(e.content),1)):A(e.$slots,"content",{key:1}),t[1]||(t[1]=l("hr",null,null,-1)),e.actionButtons.length>0?(n(),r("div",Ne,[(n(!0),r(k,null,B(e.actionButtons,(c,u)=>(n(),V(o,{key:u,label:c.label},null,8,["label"]))),128))])):A(e.$slots,"actions",{key:3})])}const $e=$(H,[["render",he]]);H.__docgenInfo={displayName:"NCard",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!0},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"content",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"actionButtons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],slots:[{name:"content"},{name:"actions"}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NCard/NCard.vue"]};const Se=Object.freeze(Object.defineProperty({__proto__:null,default:$e},Symbol.toStringTag,{value:"Module"})),q=N({name:"NRow",props:{cols:{type:Object,required:!0},gap:{type:String,default:"1rem"}},setup(e){const t=h(S,{theme:"blue",borderRadius:"4px"}),a=U(`n-row-${Math.random().toString(36).substr(2,9)}`),i={sm:0,md:768,lg:1024,xl:1280},d=o=>o.endsWith("px")?parseFloat(o):o.endsWith("rem")||o.endsWith("em")?parseFloat(o)*16:16,p=()=>{const o=d(e.gap);let c=`
        .${a.value} {
          display: flex;
          flex-wrap: wrap;
          gap: ${e.gap};
        }
        .${a.value} .n-col {
          box-sizing: border-box;
        }
      `;const u=(y,D)=>{const w=D.length,G=D.map(P=>`calc(${P}% - ${o*(w-1)/w}px)`);let T=i[y]?`@media (min-width: ${i[y]}px) {`:"";G.forEach((P,J)=>{T+=`
            .${a.value} .n-col:nth-child(${w}n + ${J+1}) {
              width: ${P};
            }
          `}),T+=i[y]?"}":"",c+=T},v=Object.keys(e.cols);v.length&&v.forEach(y=>{u(y,e.cols[y])});const C=`style-${a.value}`;let m=document.getElementById(C);m||(m=document.createElement("style"),m.id=C,document.head.appendChild(m)),m.innerHTML=c};return Q(p),K(()=>e.cols,p,{deep:!0}),{novaConfig:t,uniqueClass:a}}});function Ce(e,t,a,i,d,p){var o,c;return n(),r("div",{class:I(e.uniqueClass)},[(n(!0),r(k,null,B(((c=(o=e.$slots).default)==null?void 0:c.call(o))||[],(u,v)=>(n(),r("div",{class:"n-col",key:v},[(n(),V(X(u)))]))),128))],2)}const ke=$(q,[["render",Ce],["__scopeId","data-v-d6ee89d2"]]);q.__docgenInfo={displayName:"NRow",exportName:"default",description:"",tags:{},props:[{name:"cols",type:{name:"ColBreakpoints"},required:!0},{name:"gap",type:{name:"string"},defaultValue:{func:!1,value:"'1rem'"}}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NRow/NRow.vue"]};const Be=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"})),Ie=b(()=>g(()=>Promise.resolve().then(()=>j),void 0,import.meta.url)),L=N({name:"NHeroSection",components:{NButton:Ie},props:{title:{type:String},subtitle:{type:String},content:{type:String},actionButtons:{type:Array,default:()=>[]}},setup(e){return{novaConfig:h(S,{theme:"#000000",borderRadius:"4px"})}}}),we={class:"n-hero-section__textarea"},Te={class:"n-hero-section__title"},Pe={class:"n-hero-section__subtitle"},Re={class:"n-hero-section__content"},xe={key:0,class:"n-hero-section__actions"},Ee={key:0,class:"n-hero-section__image"};function Oe(e,t,a,i,d,p){const o=f("n-button");return n(),r("div",{class:I(`n-hero-section ${e.$slots.image?"n-hero-section--with-image":""}`)},[l("div",we,[l("h1",Te,_(e.title),1),l("h2",Pe,_(e.subtitle),1),l("p",Re,_(e.content),1),e.actionButtons.length>0?(n(),r("div",xe,[(n(!0),r(k,null,B(e.actionButtons,(c,u)=>(n(),V(o,{key:u,label:c.label},null,8,["label"]))),128))])):x("",!0)]),e.$slots.image?(n(),r("div",Ee,[A(e.$slots,"image")])):x("",!0)],2)}const Ae=$(L,[["render",Oe]]);L.__docgenInfo={displayName:"NHeroSection",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"subtitle",type:{name:"string"}},{name:"content",type:{name:"string"}},{name:"actionButtons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],slots:[{name:"image"}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NHeroSection/NHeroSection.vue"]};const Ve=Object.freeze(Object.defineProperty({__proto__:null,default:Ae},Symbol.toStringTag,{value:"Module"})),M=N({name:"NTextInput",props:{label:{type:String,required:!0},value:{type:String,default:""},placeholder:{type:String,default:""}},setup(e){return{novaConfig:h(S,{theme:"blue",borderRadius:"4px"})}}}),je={class:"n-text-input"},De={class:"n-text-input__label"},Ue=["placeholder"];function Fe(e,t,a,i,d,p){return n(),r("div",je,[l("label",De,_(e.label),1),l("input",{class:"n-text-input__input",type:"text",placeholder:e.placeholder},null,8,Ue)])}const ze=$(M,[["render",Fe]]);M.__docgenInfo={displayName:"NTextInput",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"value",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NTextInput/NTextInput.vue"]};const He=Object.freeze(Object.defineProperty({__proto__:null,default:ze},Symbol.toStringTag,{value:"Module"})),S=Symbol("NovaUIConfig"),W=N({name:"NButton",props:{label:{type:String,required:!0},primary:{type:Boolean,default:!1},size:{type:String,default:"medium"},backgroundColor:{type:String,default:""}},emits:["click"],setup(e,{emit:t}){const a=h(S,{theme:"blue",borderRadius:"4px"}),i=O(()=>({"storybook-button":!0,"storybook-button--primary":e.primary,"storybook-button--secondary":!e.primary,[`storybook-button--${e.size}`]:!0})),d=O(()=>({backgroundColor:a.theme,borderRadius:a.borderRadius}));return{novaConfig:a,classes:i,styles:d,onClick:()=>{t("click")}}}});function qe(e,t,a,i,d,p){return n(),r("button",{type:"button",class:I(e.classes),onClick:t[0]||(t[0]=(...o)=>e.onClick&&e.onClick(...o)),style:E(e.styles)},_(e.label),7)}const Le=$(W,[["render",qe]]);W.__docgenInfo={displayName:"NButton",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"primary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"String as () => 'small' | 'medium' | 'large'"},defaultValue:{func:!1,value:"'medium'"}},{name:"backgroundColor",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"click"}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NButton/NButton.vue"]};const j=Object.freeze(Object.defineProperty({__proto__:null,default:Le},Symbol.toStringTag,{value:"Module"}));export{Le as N,Ke as P,$e as a,Ae as b,ae as c,ke as d,ze as e};
