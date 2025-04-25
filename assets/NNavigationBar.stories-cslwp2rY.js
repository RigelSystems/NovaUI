import e from"./NNavigationBar-Cv6Qd4jq.js";import"./vue.esm-bundler-BiSJ2HAR.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const c={title:"Components/NNavigationBar",component:e,tags:["autodocs"],argTypes:{links:{control:{type:"array"}},mobileBottomLinks:{control:{type:"array"}}},args:{links:[{label:"Home",url:"/home"},{label:"About",url:"/about"},{label:"Contact",url:"/contact"}],mobileBottomLinks:[{url:"/home",icon:"mdi-home-account"},{url:"/about",icon:"mdi-information"},{url:"/contact",icon:"mdi-email"}],currentPath:"/home"},parameters:{docs:{description:{component:"A navigation bar component that displays a list of links. You can pass an array of link objects with `label` and `url` properties."},source:{type:"code",state:"open"},iframeHeight:"500px"}}},t={render(r){return{components:{NNavigationBar:e},setup(){return{args:r}},template:`
        <div style="height: 400px;">
          <NNavigationBar v-bind="args" />
        </div>
      `}}};var a,o,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const m=["Default"];export{t as Default,m as __namedExportsOrder,c as default};
