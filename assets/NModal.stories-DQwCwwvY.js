const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./NButton-B2ScmI3L.js","./vue.esm-bundler-8y9Ae8zg.js","./_plugin-vue_export-helper-DlAUqK2U.js","./NButton-C1Nh5Asr.css"])))=>i.map(i=>d[i]);
import{_ as x}from"./iframe-BcL7FeED.js";import{d as L,u as S,w as b,g as T,x as C,D as O,b as n,e as l,A as u,z as D,T as E,F as B,o as s,G as h,H as F,m as c,t as I,f as p,l as U}from"./vue.esm-bundler-8y9Ae8zg.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";const A={class:"n-modal n-container-style"},z={class:"n-modal__header"},P={key:0,class:"n-modal__title"},Y={class:"n-modal__body"},G={key:0,class:"n-modal__footer"},N=L({__name:"NModal",props:{modelValue:{type:Boolean,default:!1},title:{type:String,default:""},buttonLabel:{type:String,default:"Open Modal"}},emits:["update:modelValue","open","close"],setup(o,{expose:V,emit:w}){const g=U(()=>x(()=>import("./NButton-B2ScmI3L.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),d=o,i=w,t=S(d.modelValue);b(()=>d.modelValue,e=>{t.value=e}),b(t,e=>{i("update:modelValue",e),i(e?"open":"close")});const m=()=>{t.value=!0},a=()=>{t.value=!1},f=T(()=>d.title),_=e=>{e.key==="Escape"&&a()};return C(()=>window.addEventListener("keydown",_)),O(()=>window.removeEventListener("keydown",_)),V({openModal:m,closeModal:a,isOpen:t}),(e,H)=>(s(),n(B,null,[l(e.$slots,"trigger",{openModal:m},()=>[u(h(g),{label:o.buttonLabel,class:"n-modal__trigger",onClick:m},null,8,["label"])],!0),u(E,{name:"n-modal-fade"},{default:D(()=>[t.value?(s(),n("div",{key:0,class:"n-modal__overlay",onClick:F(a,["self"]),role:"dialog","aria-modal":"true"},[c("div",A,[c("header",z,[l(e.$slots,"header",{},()=>[f.value?(s(),n("h2",P,I(f.value),1)):p("",!0),u(h(g),{class:"n-modal__close-button",icon:"x",onClick:a})],!0)]),c("section",Y,[l(e.$slots,"default",{},void 0,!0)]),e.$slots.footer?(s(),n("footer",G,[l(e.$slots,"footer",{},void 0,!0)])):p("",!0)])])):p("",!0)]),_:3})],64))}}),k=$(N,[["__scopeId","data-v-c3b744a9"]]);N.__docgenInfo={exportName:"default",displayName:"NModal",description:"",tags:{},expose:[{name:"openModal"},{name:"closeModal"},{name:"isOpen"}],props:[{name:"modelValue",description:"Whether the modal is open (v‑model)",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",description:"Optional heading text",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"buttonLabel",description:"Label for the default trigger button",type:{name:"string"},defaultValue:{func:!1,value:"'Open Modal'"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"open"},{name:"close"}],slots:[{name:"trigger",scoped:!0,bindings:[{name:"openModal",title:"binding"}]},{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NModal/NModal.vue"]};const j={title:"Components/NModal",component:k,tags:["autodocs"],argTypes:{title:{control:{type:"text"},description:"Title text displayed in the modal header"},triggerLabel:{control:{type:"text"},description:"Label for the button that triggers the modal (trigger slot)",table:{category:"Slots"}}},args:{title:"Modal Title",triggerLabel:"Open Modal"},parameters:{docs:{description:{component:"A description of the NModal component with default, trigger and footer slots."}}}},r=o=>({components:{NModal:k},setup(){return{args:o}},template:`
    <!-- Using trigger slot to customize the button text -->
    <NModal v-bind="args">
      <template #trigger>{{ args.triggerLabel }}</template>

      <!-- Default slot (body) -->
      <p>This is some example body content inside the default slot. You can use any markup here.</p>

      <!-- Footer slot -->
      <template #footer>
        <button class="n-modal__trigger" @click="alert('Save clicked!')">Save</button>
      </template>
    </NModal>
  `});var y,v,M;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  components: {
    NModal
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <!-- Using trigger slot to customize the button text -->
    <NModal v-bind="args">
      <template #trigger>{{ args.triggerLabel }}</template>

      <!-- Default slot (body) -->
      <p>This is some example body content inside the default slot. You can use any markup here.</p>

      <!-- Footer slot -->
      <template #footer>
        <button class="n-modal__trigger" @click="alert('Save clicked!')">Save</button>
      </template>
    </NModal>
  \`
})`,...(M=(v=r.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};const q=["Default"];export{r as Default,q as __namedExportsOrder,j as default};
