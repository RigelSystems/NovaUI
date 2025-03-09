import{N as p}from"./NDropdown-XNkeUYOu.js";import"./vue.esm-bundler-CpL-5nD6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const c={title:"NDropdown",component:p,tags:["autodocs"],argTypes:{label:{control:"text"}},args:{label:"Toggle Dropdown"}},t={args:{label:"Click Me"},render:r=>({components:{NDropdown:p},setup(){return{args:r}},template:`<NDropdown>
          <template #label>
            <button>Click Me</button>
          </template>

          <template #content>
            <p>This is the dropdown content!</p>
          </template>
        </NDropdown>`}),parameters:{docs:{source:{code:`<NDropdown>
          <template #label>
            <button>Click Me</button>
          </template>

          <template #content>
            <p>This is the dropdown content!</p>
          </template>
        </NDropdown>`}}}};var e,n,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    label: "Click Me"
  },
  render: args => ({
    components: {
      NDropdown
    },
    setup() {
      return {
        args
      };
    },
    template: \`<NDropdown>
          <template #label>
            <button>Click Me</button>
          </template>

          <template #content>
            <p>This is the dropdown content!</p>
          </template>
        </NDropdown>\`
  }),
  parameters: {
    docs: {
      source: {
        code: \`<NDropdown>
          <template #label>
            <button>Click Me</button>
          </template>

          <template #content>
            <p>This is the dropdown content!</p>
          </template>
        </NDropdown>\`
      }
    }
  }
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const d=["Default"];export{t as Default,d as __namedExportsOrder,c as default};
