import{d as L,u as c,g as S,w as k,b as l,m as g,f as T,F as q,p as C,n as f,o as u,e as K,G as U}from"./vue.esm-bundler-DLJ_4Uzc.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";const I=L({name:"NOrderList",props:{items:{type:Array,required:!0},orderKey:{type:String,default:"position"},updateUrl:{type:String,required:!0},loading:{type:Boolean,default:!1},modelName:{type:String,required:!0},accessToken:{type:String,required:!1}},setup(e){const a=c([...e.items]);let s=c(null);const p=S(()=>[...a.value].sort((t,o)=>(t[e.orderKey]??0)-(o[e.orderKey]??0)));return k(()=>e.items,t=>{a.value=[...t]},{deep:!0,immediate:!0}),{sortedItems:p,onDragStart:(t,o)=>{var d;s.value=o;const r=document.createElement("div");r.style.width="1px",r.style.height="1px",r.style.opacity="0",document.body.appendChild(r),(d=t.dataTransfer)==null||d.setDragImage(r,0,0),setTimeout(()=>document.body.removeChild(r),0)},onDrop:async t=>{console.log("dropped");const o=a.value.map(r=>({id:r.id,[e.orderKey]:r[e.orderKey]}));try{const r={"Content-Type":"application/json"};e.accessToken&&(r.Authorization=`Bearer ${e.accessToken}`),await fetch(e.updateUrl,{method:"POST",headers:r,body:JSON.stringify({[e.modelName]:o})})}catch(r){console.error("Failed to update order:",r)}finally{s.value=null}},reorder:(t,o)=>{if(t.preventDefault(),e.loading||s.value===null)return;const r=a.value.findIndex(i=>i.id===s.value),d=a.value.findIndex(i=>i.id===o);if(r===-1||d===-1||r===d)return;const[O]=a.value.splice(r,1);a.value.splice(d,0,O),a.value.forEach((i,b)=>{i[e.orderKey]=b+1})},draggedId:s}}}),w={class:"n-order-list"},B={key:0,class:"n-order-list__loading-overlay"},A=["aria-disabled","onDragstart","onDragover","onDrop"];function E(e,a,s,p,_,D){return u(),l("div",w,[e.loading?(u(),l("div",B,a[0]||(a[0]=[g("p",null,"Loading...",-1)]))):T("",!0),g("ul",{role:"list",class:f({"n-order-list__disabled":e.loading})},[(u(!0),l(q,null,C(e.sortedItems,n=>(u(),l("li",{key:n.id,class:f("n-order-list__list-item "+(n.id==e.draggedId?"n-order-list__dragging":"")),role:"listitem",draggable:"true","aria-disabled":e.loading,onDragstart:t=>e.loading?null:e.onDragStart(t,n.id),onDragover:t=>e.reorder(t,n.id),onDrop:t=>e.loading?null:e.onDrop(n.id)},[K(e.$slots,"default",U({ref_for:!0},n))],42,A))),128))],2)])}const h=$(I,[["render",E]]);I.__docgenInfo={displayName:"NOrderList",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"Array as () => OrderItem[]"},required:!0},{name:"orderKey",type:{name:"string"},defaultValue:{func:!1,value:"'position'"}},{name:"updateUrl",type:{name:"string"},required:!0},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"modelName",type:{name:"string"},required:!0},{name:"accessToken",type:{name:"string"},required:!1}],slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/lists/order-list/NOrderList.vue"]};const j={title:"Components/NOrderList",component:h,tags:["autodocs"],argTypes:{updateUrl:{control:{type:"text"}},items:{control:{type:"object"}}},args:{updateUrl:"http://localhost:3000/checklists/update_order",items:[{id:1,name:"Item 1",order:1},{id:2,name:"Item 2",order:2},{id:3,name:"Item 3",order:3}]},parameters:{docs:{description:{component:"An ordered list component that allows reordering via drag-and-drop."}}}},m={render:e=>({components:{NOrderList:h},setup(){return{args:e}},template:`
      <NOrderList v-bind="args">
        <template #default="item">
          <p>{{ item.name }}</p>
        </template>
      </NOrderList>
    `})};var y,v,N;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(N=(v=m.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const z=["Default"];export{m as Default,z as __namedExportsOrder,j as default};
