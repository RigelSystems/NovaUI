import e from"./NNavigationBar-C3k-LcYl.js";import"./vue.esm-bundler-BjHivwhV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const c={title:"Components/NNavigationBar",component:e,tags:["autodocs"],argTypes:{links:{control:{type:"array"}},mobileBottomLinks:{control:{type:"array"}}},args:{links:[{label:"Home",url:"/"},{label:"About",url:"/about"},{label:"Contact",url:"/contact"}],mobileBottomLinks:[{url:"/home",icon:"mdi-home-account"},{url:"/about",icon:"mdi-information"},{url:"/contact",icon:"mdi-email"}]},parameters:{docs:{description:{component:"A navigation bar component that displays a list of links. You can pass an array of link objects with `label` and `url` properties."},source:{type:"code",state:"open"},iframeHeight:"500px"}}},t={render(r){return{components:{NNavigationBar:e},setup(){return{args:r}},template:`
        <div style="height: 400px;">
          <NNavigationBar v-bind="args" />
        </div>
      `}}};var a,n,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const p=["Default"];export{t as Default,p as __namedExportsOrder,c as default};
