import n from"./NNavigationBar-BYKsOpXJ.js";import"./vue.esm-bundler-B7Tz_gfl.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Components/NNavigationBar",component:n,tags:["autodocs"],argTypes:{links:{control:{type:"array"}},mobileBottomLinks:{control:{type:"array"}},showMobileBottomLinks:{control:{type:"boolean"}}},args:{links:[{label:"Home",url:"/home"},{label:"About",url:"/about"},{label:"Contact",url:"/contact"}],mobileBottomLinks:[{url:"/home",icon:"mdi-home-account",label:"Home"},{url:"/about",icon:"mdi-information",label:"About"},{url:"/contact",icon:"mdi-email",label:"Contact"}],currentPath:"/home",showMobileBottomLinks:!0},parameters:{docs:{description:{component:"A navigation bar component that displays a list of links. You can pass an array of link objects with `label` and `url` properties."},source:{type:"code",state:"open"},iframeHeight:"500px"}}},t={render(r){return{components:{NNavigationBar:n},setup(){return{args:r}},template:`
        <div style="height: 400px;">
          <NNavigationBar v-bind="args">
            <template #image>
              <img src="/favicon.png" alt="Profile" style="width: 50px;" />
            </template>
                <template #user>
              <img src="/favicon.png" alt="Profile" style="width: 50px;" />
            </template>
          </NNavigationBar>
        </div>
      `}}};var e,a,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
          <NNavigationBar v-bind="args">
            <template #image>
              <img src="/favicon.png" alt="Profile" style="width: 50px;" />
            </template>
                <template #user>
              <img src="/favicon.png" alt="Profile" style="width: 50px;" />
            </template>
          </NNavigationBar>
        </div>
      \`
    };
  }
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const p=["Default"];export{t as Default,p as __namedExportsOrder,m as default};
