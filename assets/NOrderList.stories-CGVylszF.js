import{d as L,s as g,b as k,w as S,e as u,j as m,F as T,k as q,n as f,l as C,o as p,m as K,C as U}from"./vue.esm-bundler-BjHivwhV.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";const I=L({name:"NOrderList",props:{items:{type:Array,required:!0},orderKey:{type:String,default:"position"},updateUrl:{type:String,required:!0},loading:{type:Boolean,default:!1},modelName:{type:String,required:!0},accessToken:{type:String,required:!1}},setup(e){const a=g([...e.items]);let s=g(null);const c=k(()=>[...a.value].sort((t,o)=>(t[e.orderKey]??0)-(o[e.orderKey]??0)));return S(()=>e.items,t=>{a.value=[...t]},{deep:!0,immediate:!0}),{sortedItems:c,onDragStart:(t,o)=>{var d;s.value=o;const r=document.createElement("div");r.style.width="1px",r.style.height="1px",r.style.opacity="0",document.body.appendChild(r),(d=t.dataTransfer)==null||d.setDragImage(r,0,0),setTimeout(()=>document.body.removeChild(r),0)},onDrop:async t=>{console.log("dropped");const o=a.value.map(r=>({id:r.id,[e.orderKey]:r[e.orderKey]}));try{const r={"Content-Type":"application/json"};e.accessToken&&(r.Authorization=`Bearer ${e.accessToken}`),await fetch(e.updateUrl,{method:"POST",headers:r,body:JSON.stringify({[e.modelName]:o})})}catch(r){console.error("Failed to update order:",r)}finally{s.value=null}},reorder:(t,o)=>{if(t.preventDefault(),e.loading||s.value===null)return;const r=a.value.findIndex(l=>l.id===s.value),d=a.value.findIndex(l=>l.id===o);if(r===-1||d===-1||r===d)return;const[_]=a.value.splice(r,1);a.value.splice(d,0,_),a.value.forEach((l,b)=>{l[e.orderKey]=b+1})},draggedId:s}}}),w={key:0,class:"n-order-list__loading-overlay"},B=["aria-disabled","onDragstart","onDragover","onDrop"];function A(e,a,s,c,D,O){return e.loading?(p(),u("div",w,[a[0]||(a[0]=m("div",{class:"n-order-list"},[m("p",null,"Loading...")],-1)),m("ul",{role:"list",class:f({"n-order-list__disabled":e.loading})},[(p(!0),u(T,null,q(e.sortedItems,n=>(p(),u("li",{key:n.id,class:f("n-order-list__list-item "+(n.id==e.draggedId?"n-order-list__dragging":"")),role:"listitem",draggable:"true","aria-disabled":e.loading,onDragstart:t=>e.loading?null:e.onDragStart(t,n.id),onDragover:t=>e.reorder(t,n.id),onDrop:t=>e.loading?null:e.onDrop(n.id)},[K(e.$slots,"default",U({ref_for:!0},n))],42,B))),128))],2)])):C("",!0)}const h=$(I,[["render",A]]);I.__docgenInfo={displayName:"NOrderList",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"Array as () => OrderItem[]"},required:!0},{name:"orderKey",type:{name:"string"},defaultValue:{func:!1,value:"'position'"}},{name:"updateUrl",type:{name:"string"},required:!0},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"modelName",type:{name:"string"},required:!0},{name:"accessToken",type:{name:"string"},required:!1}],slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/home/runner/work/NovaUI/NovaUI/src/stories/lists/order-list/NOrderList.vue"]};const V={title:"Components/NOrderList",component:h,tags:["autodocs"],argTypes:{updateUrl:{control:{type:"text"}},items:{control:{type:"object"}}},args:{updateUrl:"http://localhost:3000/checklists/update_order",items:[{id:1,name:"Item 1",order:1},{id:2,name:"Item 2",order:2},{id:3,name:"Item 3",order:3}]},parameters:{docs:{description:{component:"An ordered list component that allows reordering via drag-and-drop."}}}},i={render:e=>({components:{NOrderList:h},setup(){return{args:e}},template:`
      <NOrderList v-bind="args">
        <template #default="item">
          <p>{{ item.name }}</p>
        </template>
      </NOrderList>
    `})};var y,v,N;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(N=(v=i.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const j=["Default"];export{i as Default,j as __namedExportsOrder,V as default};
