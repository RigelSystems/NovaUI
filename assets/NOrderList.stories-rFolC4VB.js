import{N as o}from"./NOrderList-Bmpz_va3.js";import"./vue.esm-bundler-BaW5QFdd.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Components/NOrderList",component:o,tags:["autodocs"],argTypes:{updateUrl:{control:{type:"text"}},items:{control:{type:"object"}}},args:{updateUrl:"http://localhost:3000/checklists/update_order",items:[{id:1,name:"Item 1",order:1},{id:2,name:"Item 2",order:2},{id:3,name:"Item 3",order:3}]},parameters:{docs:{description:{component:"An ordered list component that allows reordering via drag-and-drop."}}}},e={render:s=>({components:{NOrderList:o},setup(){return{args:s}},template:`
      <NOrderList v-bind="args">
        <template #default="item">
          <p>{{ item.name }}</p>
        </template>
      </NOrderList>
    `})};var t,r,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => ({
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
  })
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const i=["Default"];export{e as Default,i as __namedExportsOrder,m as default};
