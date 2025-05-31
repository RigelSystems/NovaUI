const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./NButton-DGxKHMQn.js","./vue.esm-bundler-CeS81aHP.js","./_plugin-vue_export-helper-DlAUqK2U.js","./NButton-C1Nh5Asr.css"])))=>i.map(i=>d[i]);
import{_ as N}from"./iframe-DXKSKEMh.js";import{d as k,u as V,w as _,g as w,x as C,B as L,l as T,q as S,o as s,b as r,e as d,A as m,z as $,C as B,m as p,t as O,f as c,T as E,F as D}from"./vue.esm-bundler-CeS81aHP.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";const I=T(()=>N(()=>import("./NButton-DGxKHMQn.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),v=k({name:"NModal",components:{NButton:I},props:{modelValue:{type:Boolean,default:!1},title:{type:String,default:""},buttonLabel:{type:String,default:"Open Modal"}},emits:["update:modelValue","open","close"],setup(e,{emit:o,expose:g}){const t=V(e.modelValue);_(()=>e.modelValue,n=>{t.value=n}),_(t,n=>{o("update:modelValue",n),o(n?"open":"close")});const f=w(()=>e.title),u=()=>{t.value=!0},a=()=>{t.value=!1},l=n=>{n.key==="Escape"&&a()};return C(()=>window.addEventListener("keydown",l)),L(()=>window.removeEventListener("keydown",l)),g({openModal:u,closeModal:a,isOpen:t}),{isOpen:t,modalTitle:f,openModal:u,closeModal:a}}}),U={class:"n-modal n-container-style"},A={class:"n-modal__header"},z={key:0,class:"n-modal__title"},x={class:"n-modal__body"},P={key:0,class:"n-modal__footer"};function Y(e,o,g,t,f,u){const a=S("NButton");return s(),r(D,null,[d(e.$slots,"trigger",{openModal:e.openModal},()=>[m(a,{label:e.$props.buttonLabel,class:"n-modal__trigger",onClick:e.openModal},null,8,["label","onClick"])],!0),m(E,{name:"n-modal-fade"},{default:$(()=>[e.isOpen?(s(),r("div",{key:0,class:"n-modal__overlay",onClick:o[0]||(o[0]=B((...l)=>e.closeModal&&e.closeModal(...l),["self"])),role:"dialog","aria-modal":"true"},[p("div",U,[p("header",A,[d(e.$slots,"header",{},()=>[e.modalTitle?(s(),r("h2",z,O(e.modalTitle),1)):c("",!0),m(a,{class:"n-modal__close-button",icon:"x",onClick:e.closeModal},null,8,["onClick"])],!0)]),p("section",x,[d(e.$slots,"default",{},void 0,!0)]),e.$slots.footer?(s(),r("footer",P,[d(e.$slots,"footer",{},void 0,!0)])):c("",!0)])])):c("",!0)]),_:3})],64)}const M=F(v,[["render",Y],["__scopeId","data-v-fcf84c15"]]);v.__docgenInfo={displayName:"NModal",exportName:"default",description:"",tags:{},props:[{name:"modelValue",description:"Whether the modal is open (v-model)",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",description:"Optional heading text",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttonLabel",description:"Label for the default trigger button",type:{name:"string"},defaultValue:{func:!1,value:'"Open Modal"'}}],events:[{name:"update:modelValue"},{name:"open"},{name:"close"}],slots:[{name:"trigger",scoped:!0,bindings:[{name:"openModal",title:"binding"}]},{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NModal/NModal.vue"]};const W={title:"Components/NModal",component:M,tags:["autodocs"],argTypes:{title:{control:{type:"text"},description:"Title text displayed in the modal header"},triggerLabel:{control:{type:"text"},description:"Label for the button that triggers the modal (trigger slot)",table:{category:"Slots"}}},args:{title:"Modal Title",triggerLabel:"Open Modal"},parameters:{docs:{description:{component:"A description of the NModal component with default, trigger and footer slots."}}}},i=e=>({components:{NModal:M},setup(){return{args:e}},template:`
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
  `});var b,h,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
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
})`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const j=["Default"];export{i as Default,j as __namedExportsOrder,W as default};
