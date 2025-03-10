import{N as a}from"./NOrderList-CwMauLfx.js";import"./vue.esm-bundler-DjLMENKV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"Utilities/NOrderList",component:a,argTypes:{updateUrl:{control:"text"}}},m=n=>({components:{NOrderList:a},setup(){return{args:n}},template:`
    <NOrderList v-bind="args">
      <template #default="item">
        <p>{{ item.name }}</p>
      </template>
    </NOrderList>
  `}),e=m.bind({});e.args={items:[{id:1,name:"Item 1",order:1},{id:2,name:"Item 2",order:2},{id:3,name:"Item 3",order:3}],updateUrl:"http://localhost:3000/checklists/update_order"};var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    NOrderList
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <NOrderList v-bind="args">
      <template #default="item">
        <p>{{ item.name }}</p>
      </template>
    </NOrderList>
  \`
})`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const l=["Default"];export{e as Default,l as __namedExportsOrder,d as default};
