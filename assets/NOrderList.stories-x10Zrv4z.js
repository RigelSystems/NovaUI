import{N as s}from"./NOrderList-BThNi9tZ.js";import"./vue.esm-bundler-DsTscZPD.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const i={title:"Components/NOrderList",component:s,argTypes:{updateUrl:{control:"text"}}},o=a=>({components:{NOrderList:s},setup(){return{args:a}},template:`
    <NOrderList v-bind="args">
      <template #default="item">
        <p>{{ item.name }}</p>
      </template>
    </NOrderList>
  `}),e=o.bind({});e.args={items:[{id:1,name:"Item 1",order:1},{id:2,name:"Item 2",order:2},{id:3,name:"Item 3",order:3}],updateUrl:"http://localhost:3000/checklists/update_order"};var t,r,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
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
})`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const l=["Default"];export{e as Default,l as __namedExportsOrder,i as default};
