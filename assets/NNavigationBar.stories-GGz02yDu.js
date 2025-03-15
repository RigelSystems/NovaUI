import{c as o}from"./NButton-CO2DMXm_.js";import"./vue.esm-bundler-CYoDhqdj.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./NOrderList-C7TCzB1q.js";import"./NDropdown-CM8tgal7.js";import"./iframe-DOw1sqeH.js";import"./NPaint-CQBt8TTW.js";const d={title:"Components/NNavigationBar",component:o,tags:["autodocs"],argTypes:{links:{control:{type:"array"}},mobileBottomLinks:{control:{type:"array"}}},args:{links:[{label:"Home",url:"/"},{label:"About",url:"/about"},{label:"Contact",url:"/contact"}],mobileBottomLinks:[{label:"Privacy Policy",url:"/privacy"},{label:"Terms of Service",url:"/terms"}]},parameters:{docs:{description:{component:"A navigation bar component that displays a list of links. You can pass an array of link objects with `label` and `url` properties."},source:{type:"code",state:"open"},iframeHeight:"500px"}}},t={render(n){return{components:{NNavigationBar:o},setup(){return{args:n}},template:`
        <div style="height: 400px;">
          <NNavigationBar v-bind="args" />
        </div>
      `}}};var r,a,e;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render(args) {
    return {
      components: {
        NNavigationBar
      },
      setup() {
        return {
          args
        };
      },
      template: \`
        <div style="height: 400px;">
          <NNavigationBar v-bind="args" />
        </div>
      \`
    };
  }
}`,...(e=(a=t.parameters)==null?void 0:a.docs)==null?void 0:e.source}}};const g=["Default"];export{t as Default,g as __namedExportsOrder,d as default};
