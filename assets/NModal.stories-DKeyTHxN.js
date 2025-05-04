import{d as M,q as _,b as y,o as l,e as n,j as o,k as r,y as N,z as h,A as k,B as v,t as S,s as m,T,F as $}from"./vue.esm-bundler-DRpLMb8e.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";const f=M({name:"NModal",props:{title:{type:String}},setup(e){const t=_(!1),d=()=>{t.value=!0},i=()=>{t.value=!1},p=y(()=>e.title);return{isOpen:t,openModal:d,closeModal:i,title:p}}}),D={class:"n-modal",role:"dialog","aria-modal":"true"},F={class:"n-modal__header"},L={class:"n-modal__title"},O={class:"n-modal__body"},w={key:0,class:"n-modal__footer"};function B(e,t,d,i,p,U){return l(),n($,null,[o("button",{class:"n-modal__trigger",onClick:t[0]||(t[0]=(...a)=>e.openModal&&e.openModal(...a))},[r(e.$slots,"trigger",{},()=>[t[3]||(t[3]=N("Open Modal"))])]),h(T,{name:"n-modal-fade"},{default:k(()=>[e.isOpen?(l(),n("div",{key:0,class:"n-modal__overlay",onClick:t[2]||(t[2]=v((...a)=>e.closeModal&&e.closeModal(...a),["self"]))},[o("div",D,[o("header",F,[o("h2",L,S(e.title),1),o("button",{class:"n-modal__close",onClick:t[1]||(t[1]=(...a)=>e.closeModal&&e.closeModal(...a)),"aria-label":"Close"},"×")]),o("section",O,[r(e.$slots,"default")]),e.$slots.footer?(l(),n("footer",w,[r(e.$slots,"footer")])):m("",!0)])])):m("",!0)]),_:3})],64)}const b=C(f,[["render",B]]);f.__docgenInfo={displayName:"NModal",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}}],slots:[{name:"trigger"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/NModal/NModal.vue"]};const z={title:"NModal",component:b,tags:["autodocs"],argTypes:{title:{control:{type:"text"},description:"Title text displayed in the modal header"},triggerLabel:{control:{type:"text"},description:"Label for the button that triggers the modal (trigger slot)",table:{category:"Slots"}}},args:{title:"Modal Title",triggerLabel:"Open Modal"},parameters:{docs:{description:{component:"A description of the NModal component with default, trigger and footer slots."}}}},s=e=>({components:{NModal:b},setup(){return{args:e}},template:`
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
  `});var c,u,g;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
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
})`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const I=["Default"];export{s as Default,I as __namedExportsOrder,z as default};
