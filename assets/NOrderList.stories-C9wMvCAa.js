import{d as L,u as c,g as S,w as k,b as i,m as g,f as q,F as T,p as C,n as f,o as l,e as K,E as U}from"./vue.esm-bundler-CE4Cbw1x.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";const h=L({name:"NOrderList",props:{items:{type:Array,required:!0},orderKey:{type:String,default:"position"},updateUrl:{type:String,required:!0},loading:{type:Boolean,default:!1},modelName:{type:String,required:!0},accessToken:{type:String,required:!1}},setup(e){const a=c([...e.items]);let d=c(null);const p=S(()=>[...a.value].sort((t,o)=>(t[e.orderKey]??0)-(o[e.orderKey]??0)));return k(()=>e.items,t=>{a.value=[...t]},{deep:!0,immediate:!0}),{sortedItems:p,onDragStart:(t,o)=>{d.value=o;const r=document.createElement("div");r.style.width="1px",r.style.height="1px",r.style.opacity="0",document.body.appendChild(r),setTimeout(()=>document.body.removeChild(r),0)},onDrop:async t=>{console.log("dropped");const o=a.value.map(r=>({id:r.id,[e.orderKey]:r[e.orderKey]}));try{const r={"Content-Type":"application/json"};e.accessToken&&(r.Authorization=`Bearer ${e.accessToken}`),await fetch(e.updateUrl,{method:"POST",headers:r,body:JSON.stringify({[e.modelName]:o})})}catch(r){console.error("Failed to update order:",r)}finally{d.value=null}},reorder:(t,o)=>{if(t.preventDefault(),e.loading||d.value===null)return;const r=a.value.findIndex(s=>s.id===d.value),m=a.value.findIndex(s=>s.id===o);if(r===-1||m===-1||r===m)return;const[O]=a.value.splice(r,1);a.value.splice(m,0,O),a.value.forEach((s,b)=>{s[e.orderKey]=b+1})},draggedId:d}}}),w={class:"n-order-list"},B={key:0,class:"n-order-list__loading-overlay"},E=["aria-disabled","onDragstart","onDragover","onDrop"];function A(e,a,d,p,_,D){return l(),i("div",w,[e.loading?(l(),i("div",B,a[0]||(a[0]=[g("p",null,"Loading...",-1)]))):q("",!0),g("ul",{role:"list",class:f({"n-order-list__disabled":e.loading})},[(l(!0),i(T,null,C(e.sortedItems,n=>(l(),i("li",{key:n.id,class:f("n-order-list__list-item "+(n.id==e.draggedId?"n-order-list__dragging":"")),role:"listitem",draggable:"true","aria-disabled":e.loading,onDragstart:t=>e.loading?null:e.onDragStart(t,n.id),onDragover:t=>e.reorder(t,n.id),onDrop:t=>e.loading?null:e.onDrop(n.id)},[K(e.$slots,"default",U({ref_for:!0},n))],42,E))),128))],2)])}const I=$(h,[["render",A]]);h.__docgenInfo={displayName:"NOrderList",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"Array as () => OrderItem[]"},required:!0},{name:"orderKey",type:{name:"string"},defaultValue:{func:!1,value:"'position'"}},{name:"updateUrl",type:{name:"string"},required:!0},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"modelName",type:{name:"string"},required:!0},{name:"accessToken",type:{name:"string"},required:!1}],slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/lists/order-list/NOrderList.vue"]};const j={title:"Components/NOrderList",component:I,tags:["autodocs"],argTypes:{updateUrl:{control:{type:"text"}},items:{control:{type:"object"}}},args:{updateUrl:"http://localhost:3000/checklists/update_order",items:[{id:1,name:"Item 1",order:1},{id:2,name:"Item 2",order:2},{id:3,name:"Item 3",order:3}]},parameters:{docs:{description:{component:"An ordered list component that allows reordering via drag-and-drop."}}}},u={render:e=>({components:{NOrderList:I},setup(){return{args:e}},template:`
      <NOrderList v-bind="args">
        <template #default="item">
          <p>{{ item.name }}</p>
        </template>
      </NOrderList>
    `})};var y,v,N;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(N=(v=u.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const z=["Default"];export{u as Default,z as __namedExportsOrder,j as default};
