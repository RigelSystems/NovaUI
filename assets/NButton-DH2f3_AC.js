const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./NDropdown-DKJSbasw.js","./vue.esm-bundler-DsTscZPD.js","./_plugin-vue_export-helper-DlAUqK2U.js"])))=>i.map(i=>d[i]);
import{d as g,b as j,p as h,e as s,f as i,F as B,l as k,o as n,q as U,t as f,k as P,s as N,u as a,v as T,x as _,g as R,y as E,z as K,w as X,n as A,A as Y,j as V}from"./vue.esm-bundler-DsTscZPD.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./NOrderList-BThNi9tZ.js";import"./NDropdown-DKJSbasw.js";import{_ as v}from"./iframe-Dsfvj5hL.js";const D=g({name:"NNavigationBar",props:{links:{type:Array,required:!1}},setup(e){const t=j(e.links);return{novaConfig:h(S,{theme:"blue",borderRadius:"4px"}),links:t}}}),Z={class:"n-navigation-bar"},ee=["href"];function te(e,t,r,u,d,p){return n(),s("nav",Z,[i("ul",null,[(n(!0),s(B,null,k(e.links,o=>(n(),s("li",{style:U({color:e.novaConfig.theme})},[i("a",{href:o.url},f(o.label),9,ee)],4))),256))])])}const oe=$(D,[["render",te]]);D.__docgenInfo={displayName:"NNavigationBar",exportName:"default",description:"",tags:{},props:[{name:"links",type:{name:"Array as () => NavigationLink[]"},required:!1}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NNavigationBar/NNavigationBar.vue"]};const ne=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"})),ae=N(()=>v(()=>Promise.resolve().then(()=>Ee),void 0,import.meta.url)),re=N(()=>v(()=>import("./NDropdown-DKJSbasw.js"),__vite__mapDeps([0,1,2]),import.meta.url)),se=N(()=>v(()=>Promise.resolve().then(()=>Ce),void 0,import.meta.url)),le=N(()=>v(()=>Promise.resolve().then(()=>he),void 0,import.meta.url)),ie=N(()=>v(()=>Promise.resolve().then(()=>ne),void 0,import.meta.url)),ue=N(()=>v(()=>Promise.resolve().then(()=>De),void 0,import.meta.url)),ce=N(()=>v(()=>Promise.resolve().then(()=>G),void 0,import.meta.url)),q=g({name:"Preview",components:{NNavigationBar:ie,NCard:le,NRow:se,NHeroSection:ae,NDropdown:re,NTextInput:ue,NButton:ce},props:{label:{type:String,required:!0}},setup(e){const t=P(()=>[{label:"Home",url:"/"},{label:"About",url:"/about"},{label:"Contact",url:"/contact"}]);return{novaConfig:h(S,{theme:"blue",borderRadius:"4px"}),links:t}}}),de={class:"preview"};function pe(e,t,r,u,d,p){const o=_("NNavigationBar"),c=_("NHeroSection"),l=_("NCard"),b=_("NRow"),C=_("NDropdown"),m=_("NTextInput"),y=_("NButton");return n(),s("div",de,[a(o,{links:e.links},null,8,["links"]),a(c,{title:"Hero Section Title",subtitle:"Hero Section Subtitle",content:"Some example text for this hero section",actionButtons:[{label:"Action Button",url:"/home"}]}),a(b,{cols:{sm:[100],md:[60,40,40,60],lg:[33.33,33.33,33.33]}},{default:T(()=>[a(l,{title:"Card Title",subtitle:"Card Subtitle",content:"Some example text for this card",actionButtons:[{label:"Action Button",url:"/home"}]}),a(l,{title:"Card Title",subtitle:"Card Subtitle",content:"Some example text for this card",actionButtons:[{label:"Action Button",url:"/home"}]}),a(l,{title:"Card Title",subtitle:"Card Subtitle",content:"Some example text for this card",actionButtons:[{label:"Action Button",url:"/home"}]}),a(l,{title:"Card Title",subtitle:"Card Subtitle",content:"Some example text for this card",actionButtons:[{label:"Action Button",url:"/home"}]}),a(l,{title:"Card Title",subtitle:"Card Subtitle",content:"Some example text for this card",actionButtons:[{label:"Action Button",url:"/home"}]}),a(l,{title:"Card Title",subtitle:"Card Subtitle",content:"Some example text for this card",actionButtons:[{label:"Action Button",url:"/home"}]})]),_:1}),a(b,{cols:{sm:[100],md:[33.3,33.3,33.3]}},{default:T(()=>[a(C,{label:"Click Me",content:"Some hidden information!"}),a(C,{label:"Don't click me!",content:"What did I say..."}),a(C,{label:"Ummmmm",content:"Wow, you're an explorer!"})]),_:1}),t[0]||(t[0]=i("h2",null,"Contact Form",-1)),t[1]||(t[1]=i("p",null,"Please enter your details below and we'll contact you shortly!",-1)),a(b,{cols:{sm:[100],md:[50,50,100,100]}},{default:T(()=>[a(m,{label:"First Name",placeholder:"John"}),a(m,{label:"Last Name",placeholder:"Doe"}),a(m,{label:"Email",placeholder:"Enter your email address"}),a(m,{label:"Message",placeholder:"Enter your message here"}),a(y,{label:"Submit"})]),_:1})])}const We=$(q,[["render",pe]]);q.__docgenInfo={displayName:"Preview",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/Preview/Preview.vue"]};const me=N(()=>v(()=>Promise.resolve().then(()=>G),void 0,import.meta.url)),F=g({name:"NCard",components:{NButton:me},props:{title:{type:String,required:!0},subtitle:{type:String,default:""},content:{type:String,default:""},actionButtons:{type:Array,default:()=>[]}},setup(e){return{novaConfig:h(S,{theme:"blue",borderRadius:"4px"})}}}),_e={class:"n-card"},fe={class:"n-card__title"},be={class:"n-card__subtitle"},ye={key:0},Ne={key:2,class:"n-card__actions"};function ve(e,t,r,u,d,p){const o=_("n-button");return n(),s("div",_e,[i("h2",fe,f(e.title),1),i("h6",be,f(e.subtitle),1),t[0]||(t[0]=i("hr",null,null,-1)),e.content?(n(),s("p",ye,f(e.content),1)):R(e.$slots,"content",{key:1}),t[1]||(t[1]=i("hr",null,null,-1)),e.actionButtons.length>0?(n(),s("div",Ne,[(n(!0),s(B,null,k(e.actionButtons,(c,l)=>(n(),E(o,{key:l,label:c.label},null,8,["label"]))),128))])):R(e.$slots,"actions",{key:3})])}const ge=$(F,[["render",ve]]);F.__docgenInfo={displayName:"NCard",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!0},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"content",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"actionButtons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],slots:[{name:"content"},{name:"actions"}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NCard/NCard.vue"]};const he=Object.freeze(Object.defineProperty({__proto__:null,default:ge},Symbol.toStringTag,{value:"Module"})),z=g({name:"NRow",props:{cols:{type:Object,required:!0},gap:{type:String,default:"1rem"}},setup(e){const t=h(S,{theme:"blue",borderRadius:"4px"}),r=j(`n-row-${Math.random().toString(36).substr(2,9)}`),u={sm:0,md:768,lg:1024,xl:1280},d=o=>o.endsWith("px")?parseFloat(o):o.endsWith("rem")||o.endsWith("em")?parseFloat(o)*16:16,p=()=>{const o=d(e.gap);let c=`
        .${r.value} {
          display: flex;
          flex-wrap: wrap;
          gap: ${e.gap};
        }
        .${r.value} .n-col {
          box-sizing: border-box;
        }
      `;const l=(y,O)=>{const I=O.length,J=O.map(x=>`calc(${x}% - ${o*(I-1)/I}px)`);let w=u[y]?`@media (min-width: ${u[y]}px) {`:"";J.forEach((x,Q)=>{w+=`
            .${r.value} .n-col:nth-child(${I}n + ${Q+1}) {
              width: ${x};
            }
          `}),w+=u[y]?"}":"",c+=w},b=Object.keys(e.cols);b.length&&b.forEach(y=>{l(y,e.cols[y])});const C=`style-${r.value}`;let m=document.getElementById(C);m||(m=document.createElement("style"),m.id=C,document.head.appendChild(m)),m.innerHTML=c};return K(p),X(()=>e.cols,p,{deep:!0}),{novaConfig:t,uniqueClass:r}}});function $e(e,t,r,u,d,p){var o,c;return n(),s("div",{class:A(e.uniqueClass)},[(n(!0),s(B,null,k(((c=(o=e.$slots).default)==null?void 0:c.call(o))||[],(l,b)=>(n(),s("div",{class:"n-col",key:b},[(n(),E(Y(l)))]))),128))],2)}const Se=$(z,[["render",$e],["__scopeId","data-v-d6ee89d2"]]);z.__docgenInfo={displayName:"NRow",exportName:"default",description:"",tags:{},props:[{name:"cols",type:{name:"ColBreakpoints"},required:!0},{name:"gap",type:{name:"string"},defaultValue:{func:!1,value:"'1rem'"}}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NRow/NRow.vue"]};const Ce=Object.freeze(Object.defineProperty({__proto__:null,default:Se},Symbol.toStringTag,{value:"Module"})),H=g({name:"NHeroSection",components:{NButton:W},props:{title:{type:String},subtitle:{type:String},content:{type:String},actionButtons:{type:Array,default:()=>[]}},setup(e){return{novaConfig:h(S,{theme:"#000000",borderRadius:"4px"})}}}),Be={class:"n-hero-section__textarea"},ke={class:"n-hero-section__title"},Ie={class:"n-hero-section__subtitle"},we={class:"n-hero-section__content"},xe={key:0,class:"n-hero-section__actions"},Te={key:0,class:"n-hero-section__image"};function Pe(e,t,r,u,d,p){const o=_("n-button");return n(),s("div",{class:A(`n-hero-section ${e.$slots.image?"n-hero-section--with-image":""}`)},[i("div",Be,[i("h1",ke,f(e.title),1),i("h2",Ie,f(e.subtitle),1),i("p",we,f(e.content),1),e.actionButtons.length>0?(n(),s("div",xe,[(n(!0),s(B,null,k(e.actionButtons,(c,l)=>(n(),E(o,{key:l,label:c.label},null,8,["label"]))),128))])):V("",!0)]),e.$slots.image?(n(),s("div",Te,[R(e.$slots,"image")])):V("",!0)],2)}const Re=$(H,[["render",Pe]]);H.__docgenInfo={displayName:"NHeroSection",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"subtitle",type:{name:"string"}},{name:"content",type:{name:"string"}},{name:"actionButtons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],slots:[{name:"image"}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NHeroSection/NHeroSection.vue"]};const Ee=Object.freeze(Object.defineProperty({__proto__:null,default:Re},Symbol.toStringTag,{value:"Module"})),L=g({name:"NTextInput",props:{label:{type:String,required:!0},value:{type:String,default:""},placeholder:{type:String,default:""}},setup(e){return{novaConfig:h(S,{theme:"blue",borderRadius:"4px"})}}}),Ae={class:"n-text-input"},Oe={class:"n-text-input__label"},Ve=["placeholder"];function je(e,t,r,u,d,p){return n(),s("div",Ae,[i("label",Oe,f(e.label),1),i("input",{class:"n-text-input__input",type:"text",placeholder:e.placeholder},null,8,Ve)])}const Ue=$(L,[["render",je]]);L.__docgenInfo={displayName:"NTextInput",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"value",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NTextInput/NTextInput.vue"]};const De=Object.freeze(Object.defineProperty({__proto__:null,default:Ue},Symbol.toStringTag,{value:"Module"})),S=Symbol("NovaUIConfig"),M=g({name:"NButton",props:{label:{type:String,required:!0},primary:{type:Boolean,default:!1},size:{type:String,default:"medium"},backgroundColor:{type:String,default:""}},emits:["click"],setup(e,{emit:t}){const r=h(S,{theme:"blue",borderRadius:"4px"}),u=P(()=>({"storybook-button":!0,"storybook-button--primary":e.primary,"storybook-button--secondary":!e.primary,[`storybook-button--${e.size}`]:!0})),d=P(()=>({backgroundColor:r.theme,borderRadius:r.borderRadius}));return{novaConfig:r,classes:u,styles:d,onClick:()=>{t("click")}}}});function qe(e,t,r,u,d,p){return n(),s("button",{type:"button",class:A(e.classes),onClick:t[0]||(t[0]=(...o)=>e.onClick&&e.onClick(...o)),style:U(e.styles)},f(e.label),7)}const W=$(M,[["render",qe]]);M.__docgenInfo={displayName:"NButton",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"primary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"String as () => 'small' | 'medium' | 'large'"},defaultValue:{func:!1,value:"'medium'"}},{name:"backgroundColor",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"click"}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NButton/NButton.vue"]};const G=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));export{W as N,We as P,ge as a,Re as b,oe as c,Se as d,Ue as e};
