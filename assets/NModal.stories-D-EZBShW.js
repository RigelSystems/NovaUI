const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./NButton-Cmm-t_WV.js","./vue.esm-bundler-C_Ws3nPw.js","./_plugin-vue_export-helper-DlAUqK2U.js","./NButton-C1Nh5Asr.css"])))=>i.map(i=>d[i]);
import{_ as V}from"./iframe-BFBWRp41.js";import{d as w,u as L,w as h,g as S,x as $,E as B,l as D,q as E,o as s,b as r,e as d,A as p,z as O,G as U,m as c,t as F,f as g,T as I,F as A}from"./vue.esm-bundler-C_Ws3nPw.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Y=D(()=>V(()=>import("./NButton-Cmm-t_WV.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),C=w({name:"NModal",components:{NButton:Y},props:{modelValue:{type:Boolean,default:!1},title:{type:String,default:""},buttonLabel:{type:String,default:"Open Modal"}},emits:["update:modelValue","open","close"],setup(e,{emit:o,expose:b}){const t=L(e.modelValue);h(()=>e.modelValue,n=>{t.value=n}),h(t,n=>{o("update:modelValue",n),o(n?"open":"close")});const _=S(()=>e.title),m=()=>{t.value=!0},a=()=>{t.value=!1},l=n=>{n.key==="Escape"&&a()};return $(()=>window.addEventListener("keydown",l)),B(()=>window.removeEventListener("keydown",l)),b({openModal:m,closeModal:a,isOpen:t}),{isOpen:t,modalTitle:_,openModal:m,closeModal:a}}}),q={class:"n-modal n-container-style"},z={class:"n-modal__header"},G={key:0,class:"n-modal__title"},K={class:"n-modal__body"},R={key:0,class:"n-modal__footer"};function W(e,o,b,t,_,m){const a=E("NButton");return s(),r(A,null,[d(e.$slots,"trigger",{openModal:e.openModal},()=>[p(a,{label:e.$props.buttonLabel,class:"n-modal__trigger",onClick:e.openModal},null,8,["label","onClick"])],!0),p(I,{name:"n-modal-fade"},{default:O(()=>[e.isOpen?(s(),r("div",{key:0,class:"n-modal__overlay",onClick:o[0]||(o[0]=U((...l)=>e.closeModal&&e.closeModal(...l),["self"])),role:"dialog","aria-modal":"true"},[c("div",q,[c("header",z,[d(e.$slots,"header",{},()=>[e.modalTitle?(s(),r("h2",G,F(e.modalTitle),1)):g("",!0),p(a,{class:"n-modal__close-button",label:"Close",onClick:e.closeModal},null,8,["onClick"])],!0)]),c("section",K,[d(e.$slots,"default",{},void 0,!0)]),e.$slots.footer?(s(),r("footer",R,[d(e.$slots,"footer",{},void 0,!0)])):g("",!0)])])):g("",!0)]),_:3})],64)}const f=P(C,[["render",W],["__scopeId","data-v-bd1d01a5"]]);C.__docgenInfo={displayName:"NModal",exportName:"default",description:"",tags:{},props:[{name:"modelValue",description:"Whether the modal is open (v-model)",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",description:"Optional heading text",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttonLabel",description:"Label for the default trigger button",type:{name:"string"},defaultValue:{func:!1,value:'"Open Modal"'}}],events:[{name:"update:modelValue"},{name:"open"},{name:"close"}],slots:[{name:"trigger",scoped:!0,bindings:[{name:"openModal",title:"binding"}]},{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NModal/NModal.vue"]};const Q={title:"Components/NModal",component:f,tags:["autodocs"],argTypes:{title:{control:{type:"text"},description:"Title text displayed in the modal header"},buttonLabel:{control:{type:"text"},description:"Label for the button that triggers the modal"}},args:{title:"Modal Title",buttonLabel:"Open Modal"},parameters:{docs:{description:{component:"A description of the NModal component with default, trigger and footer slots."}}}},i=e=>({components:{NModal:f},setup(){return{args:e}},template:`
    <!-- Using the default trigger button -->
    <NModal v-bind="args">
      <!-- Default slot (body) -->
      <p>This is some example body content inside the default slot. You can use any markup here.</p>

      <!-- Footer slot -->
      <template #footer>
        <button class="n-modal__trigger" @click="alert('Save clicked!')">Save</button>
      </template>
    </NModal>
  `}),u=e=>({components:{NModal:f},setup(){return{args:e}},template:`
    <!-- Using custom trigger slot -->
    <NModal v-bind="args">
      <template #trigger="{ openModal }">
        <button @click="openModal" class="custom-trigger-button">{{ args.buttonLabel }}</button>
      </template>

      <!-- Default slot (body) -->
      <p>This modal uses a custom trigger button.</p>
    </NModal>
  `});var M,y,v;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  components: {
    NModal
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <!-- Using the default trigger button -->
    <NModal v-bind="args">
      <!-- Default slot (body) -->
      <p>This is some example body content inside the default slot. You can use any markup here.</p>

      <!-- Footer slot -->
      <template #footer>
        <button class="n-modal__trigger" @click="alert('Save clicked!')">Save</button>
      </template>
    </NModal>
  \`
})`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var N,k,T;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  components: {
    NModal
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <!-- Using custom trigger slot -->
    <NModal v-bind="args">
      <template #trigger="{ openModal }">
        <button @click="openModal" class="custom-trigger-button">{{ args.buttonLabel }}</button>
      </template>

      <!-- Default slot (body) -->
      <p>This modal uses a custom trigger button.</p>
    </NModal>
  \`
})`,...(T=(k=u.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const X=["Default","CustomTrigger"];export{u as CustomTrigger,i as Default,X as __namedExportsOrder,Q as default};
