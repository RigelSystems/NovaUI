import n from"./NNavigationBar-C0rVN3AH.js";import"./vue.esm-bundler-BjHivwhV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const p={title:"Components/NNavigationBar",component:n,tags:["autodocs"],argTypes:{links:{control:{type:"array"}},mobileBottomLinks:{control:{type:"array"}}},args:{links:[{label:"Home",url:"/"},{label:"About",url:"/about"},{label:"Contact",url:"/contact"}],mobileBottomLinks:[{label:"Privacy Policy",url:"/privacy"},{label:"Terms of Service",url:"/terms"}]},parameters:{docs:{description:{component:"A navigation bar component that displays a list of links. You can pass an array of link objects with `label` and `url` properties."},source:{type:"code",state:"open"},iframeHeight:"500px"}}},t={render(o){return{components:{NNavigationBar:n},setup(){return{args:o}},template:`
        <div style="height: 400px;">
          <NNavigationBar v-bind="args" />
        </div>
      `}}};var a,e,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(r=(e=t.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const c=["Default"];export{t as Default,c as __namedExportsOrder,p as default};
