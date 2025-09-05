import{j as e}from"./jsx-runtime-N83kn9-W.js";import{useMDXComponents as t}from"./index-g1djAheZ.js";import"./_commonjsHelpers-Cpj98o6Y.js";function n(s){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"novaui-component-library---quick-reference",children:"NovaUI Component Library - Quick Reference"}),`
`,e.jsxs(r.p,{children:["Vue 3 component library: ",e.jsx(r.code,{children:"npm install @rigelsystems/novaui"})]}),`
`,e.jsx(r.h2,{id:"setup",children:"Setup"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-javascript",children:`import { createApp } from 'vue'
import NovaUI from '@rigelsystems/novaui'
app.use(NovaUI) // Registers all components globally
`})}),`
`,e.jsx(r.h2,{id:"components",children:"Components"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NButton"})," - Props: label (string, required), primary (boolean, default: true), size (string, default: 'medium'), colour (string), backgroundColor (string), href (string). Events: click. Slots: default"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NCard"})," - Props: title (string, required), subtitle (string), content (string), actionButtons (array). Slots: content, actions"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NCircleProgress"})," - Props: current (number, required), total (number, required), size (number, default: 120), strokeWidth (number), progressColor (string), trackColor (string), fontSize (string)"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NColourPicker"})," - Props: colors (array), allowCustom (boolean, default: true), modelValue (string), label (string). Events: update:modelValue"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NDashboardTile"})," - Props: title (string, required), icon (string, required), value (string, required), bottomText (string, required), colour (string)"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NDataGrid"})," - Props: url (string, required), method (string, default: 'GET'), params (object), accessToken (string), search (boolean), sortable (boolean), pageSize (number), searchableFields (array), sortableFields (array)"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NDropdown"})," - Props: label (string), content (string), chevron (boolean, default: true). Slots: label, content"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NHeroSection"})," - Props: title (string), subtitle (string), content (string), actionButtons (array), layout (string, default: 'center'). Slots: image"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NModal"})," - Props: modelValue (boolean, v-model), title (string), buttonLabel (string). Events: update:modelValue, open, close. Slots: trigger, header, default, footer"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NNavigationBar"})," - Props: links (array), mobileBottomLinks (array), showMobileBottomLinks (boolean), currentPath (string). Slots: logo, user"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NNotification"})," - Props: message (string, required), time (string, required), actionButtons (array)"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NNotificationList"})," - Props: url (string, required), method (string), params (object), accessToken (string)"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NOrderList"})," - Props: items (array, required), orderKey (string), updateUrl (string, required), loading (boolean), modelName (string, required), accessToken (string). Slots: default"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NPaint"})," - Props: gridX (number, default: 8), gridY (number, default: 8), pixelData (array). Events: update:pixelData, save"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NPaintDisplay"})," - Props: pixelData (array), size (number, default: 12)"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NPill"})," - Props: label (string, required), color (string, default: 'default')"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NRow"})," - Props: cols (object, required), gap (string), title (string), subtitle (string). Slots: default"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NScrollArrow"})," - No props, events, or slots"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NSelect"})," - Props: label (string, required), value (string), options (array, required), placeholder (string). Events: update:value"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NSelectInputFromRequest"})," - Props: url (string, required), valueKey (string, required), name (string, required), label (string), multiple (boolean), modelValue (string|array), accessToken (string, required), method (string), headers (object). Events: update:modelValue"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NTab"})," - Props: label (string, required), active (boolean). Events: click"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NTabPanel"})," - Props: index (number, required), activeTab (number, required). Slots: default"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NTabPreview"})," - No props, events, or slots"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NTabs"})," - Slots: tabs (receives activeTab and setActiveTab), default (receives activeTab)"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NTextInput"})," - Props: label (string, required), value (string), placeholder (string). Events: update:value"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NTimeInput"})," - Props: label (string, required), value (string), placeholder (string). Events: update:value"]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"NTimeline"})," - Props: startDateTime (string, required), endDateTime (string, required), minuteInterval (number), items (array, required)"]})]})}function a(s={}){const{wrapper:r}={...t(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(n,{...s})}):n(s)}export{a as default};
