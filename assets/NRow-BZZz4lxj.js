import{d as k,u as x,q as C,v as S,w as B,e as r,t as $,s as w,j as F,F as E,l as I,n as j,o as n,p as q,x as R}from"./vue.esm-bundler-B7qKAbrd.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";const N=k({name:"NRow",props:{cols:{type:Object,required:!0},gap:{type:String,default:"1rem"},title:{type:String,default:""},subtitle:{type:String,default:""}},setup(e){const y=x(),s=C(`n-row-${Math.random().toString(36).substr(2,9)}`),i={sm:0,md:768,lg:1024,xl:1280},h=t=>t.endsWith("px")?parseFloat(t):t.endsWith("rem")||t.endsWith("em")?parseFloat(t)*16:16,u=()=>{const t=h(e.gap);let l=`
        .${s.value} {
          display: flex;
          flex-wrap: wrap;
          gap: ${e.gap};
        }
        .${s.value} .n-col {
          box-sizing: border-box;
        }
      `;const d=(a,v)=>{const m=v.length,_=v.map(f=>`calc(${f}% - ${t*(m-1)/m}px)`);let p=i[a]?`@media (min-width: ${i[a]}px) {`:"";_.forEach((f,b)=>{p+=`
            .${s.value} .n-col:nth-child(${m}n + ${b+1}) {
              width: ${f};
            }
          `}),p+=i[a]?"}":"",l+=p},c=Object.keys(e.cols);c.length&&c.forEach(a=>{d(a,e.cols[a])});const g=`style-${s.value}`;let o=document.getElementById(g);o||(o=document.createElement("style"),o.id=g,document.head.appendChild(o)),o.innerHTML=l};return S(u),B(()=>e.cols,u,{deep:!0}),{uniqueClass:s,slots:y}}}),M={key:0,class:"text-center"},W={key:1,class:"text-center"};function z(e,y,s,i,h,u){var t,l;return n(),r("div",null,[e.title?(n(),r("h1",M,$(e.title),1)):w("",!0),e.subtitle?(n(),r("h2",W,$(e.subtitle),1)):w("",!0),F("div",{class:j(e.uniqueClass)},[(n(!0),r(E,null,I(((l=(t=e.slots).default)==null?void 0:l.call(t))||[],(d,c)=>(n(),r("div",{class:"n-col",key:c},[(n(),q(R(d)))]))),128))],2)])}const O=V(N,[["render",z],["__scopeId","data-v-c312b3a3"]]);N.__docgenInfo={displayName:"NRow",exportName:"default",description:"",tags:{},props:[{name:"cols",type:{name:"ColBreakpoints"},required:!0},{name:"gap",type:{name:"string"},defaultValue:{func:!1,value:"'1rem'"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NRow/NRow.vue"]};export{O as default};
