import l from"./NDropdown-DUgN-KaE.js";import"./vue.esm-bundler-CeS81aHP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const u={title:"Components/NDropdown",component:l,tags:["autodocs"],argTypes:{label:{control:"text"}},args:{label:"Toggle Dropdown"}},e={render:c=>({components:{NDropdown:l},setup(){return{args:c}},template:`<NDropdown>
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
        </NDropdown>`}}}},t={args:{label:"Click Me",content:"Some great content here!!",chevron:!0}};var n,o,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var p,a,s;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Click Me",
    content: 'Some great content here!!',
    chevron: true
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const w=["WithSlots","WithProps"];export{t as WithProps,e as WithSlots,w as __namedExportsOrder,u as default};
