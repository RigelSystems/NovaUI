const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./NButton-D-Uqyjyj.js","./vue.esm-bundler-DNlv-ltr.js","./_plugin-vue_export-helper-DlAUqK2U.js","./NButton-C1Nh5Asr.css"])))=>i.map(i=>d[i]);
import{_ as M}from"./iframe-Cikv_qeh.js";import{d as N,u as y,g as v,l as k,q as C,o as n,b as l,A as c,z as S,B as T,m as o,t as B,e as m,f as p,T as D,F as $}from"./vue.esm-bundler-DNlv-ltr.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";const O=k(()=>M(()=>import("./NButton-D-Uqyjyj.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),_=N({name:"NModal",components:{NButton:O},props:{title:{type:String}},setup(e){const t=y(!1),r=()=>{t.value=!0},i=()=>{t.value=!1},d=v(()=>e.title);return{isOpen:t,openModal:r,closeModal:i,title:d}}}),F={class:"n-modal n-container-style",role:"dialog","aria-modal":"true"},w={class:"n-modal__header"},x={class:"n-modal__title"},A={class:"n-modal__body"},E={key:0,class:"n-modal__footer"};function I(e,t,r,i,d,U){const h=C("NButton");return n(),l($,null,[c(h,{label:"Open Modal",class:"n-modal__trigger",onClick:e.openModal},null,8,["onClick"]),c(D,{name:"n-modal-fade"},{default:S(()=>[e.isOpen?(n(),l("div",{key:0,class:"n-modal__overlay",onClick:t[1]||(t[1]=T((...s)=>e.closeModal&&e.closeModal(...s),["self"]))},[o("div",F,[o("header",w,[o("h2",x,B(e.title),1),o("button",{class:"n-modal__close",onClick:t[0]||(t[0]=(...s)=>e.closeModal&&e.closeModal(...s)),"aria-label":"Close"},"×")]),o("section",A,[m(e.$slots,"default")]),e.$slots.footer?(n(),l("footer",E,[m(e.$slots,"footer")])):p("",!0)])])):p("",!0)]),_:3})],64)}const b=L(_,[["render",I]]);_.__docgenInfo={displayName:"NModal",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}}],slots:[{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NModal/NModal.vue"]};const Y={title:"Components/NModal",component:b,tags:["autodocs"],argTypes:{title:{control:{type:"text"},description:"Title text displayed in the modal header"},triggerLabel:{control:{type:"text"},description:"Label for the button that triggers the modal (trigger slot)",table:{category:"Slots"}}},args:{title:"Modal Title",triggerLabel:"Open Modal"},parameters:{docs:{description:{component:"A description of the NModal component with default, trigger and footer slots."}}}},a=e=>({components:{NModal:b},setup(){return{args:e}},template:`
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
  `});var u,g,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
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
})`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const q=["Default"];export{a as Default,q as __namedExportsOrder,Y as default};
