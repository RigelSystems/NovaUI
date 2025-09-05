import{j as e,M as i}from"./index-BMZDG3rd.js";import{useMDXComponents as s}from"./index-BIqz4huR.js";import"./iframe-ZkTbd1A2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-pVbLjA8_.js";import"./index-DrFu-skq.js";function o(n){const t={h1:"h1",h2:"h2",h3:"h3",p:"p",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Claude Context"}),`
`,e.jsx("div",{className:"sb-container",children:e.jsxs("div",{className:"sb-section-title",children:[e.jsx(t.h1,{id:"claude-context-for-novaui",children:"Claude Context for NovaUI"}),e.jsx(t.h3,{id:"copy-this-content-to-your-projects-claudemd-file",children:"Copy this content to your project's CLAUDE.md file"}),e.jsx(t.p,{children:"This guide helps AI assistants understand how to use NovaUI components effectively in your project."})]})}),`
`,e.jsxs("div",{className:"sb-container",children:[e.jsx("div",{className:"sb-section-title",children:e.jsx(t.h2,{id:"installation--setup",children:"Installation & Setup"})}),e.jsx("pre",{className:"sb-code-block",children:`# NovaUI Integration Guide

This project uses NovaUI (@rigelsystems/novaui) - a Vue 3 component library by Rigel Systems.

## Installation
\`\`\`bash
npm install @rigelsystems/novaui
\`\`\`

\`\`\`js
// main.js
import { createApp } from 'vue'
import NovaUI from '@rigelsystems/novaui'
import '@rigelsystems/novaui/dist/style.css'

const app = createApp(App)
app.use(NovaUI)
app.mount('#app')
\`\`\``})]}),`
`,e.jsxs("div",{className:"sb-container",children:[e.jsx("div",{className:"sb-section-title",children:e.jsx(t.h2,{id:"component-categories",children:"Component Categories"})}),e.jsx("pre",{className:"sb-code-block",children:`## Component Categories

### 🔧 Inputs
For user interaction and form elements:
- **NButton** - Actions, CTAs, form submissions
- **NTextInput** - Text fields, search inputs
- **NSelect** - Dropdowns with predefined options
- **NDropdown** - Custom dropdown content with slots
- **NTimeInput** - Time selection inputs
- **NColourPicker** - Color selection interface
- **NSelectInputFromRequest** - Dynamic select populated from API

### 📐 Layout
For page structure and content organization:
- **NCard** - Content containers, feature boxes
- **NModal** - Overlays, confirmations, forms
- **NRow** - Grid layout system
- **NHeroSection** - Landing page headers, banner sections
- **NDashboardTile** - Metric display, KPI cards

### 📊 Data Display
For presenting information and data:
- **NDataGrid** - Tables, data lists, search results
- **NTimeline** - Event sequences, schedules, activity feeds
- **NCircleProgress** - Progress indicators, completion status
- **NPaint** - Interactive drawing/design tools
- **NPaintDisplay** - Static paint/image display
- **NOrderList** - Sortable/reorderable lists

### 🧭 Navigation
For moving between content and pages:
- **NNavigationBar** - Main site navigation, headers
- **NTabs** - Content switching, category navigation
- **NTabPanel** - Individual tab content areas
- **NTab** - Individual tab headers
- **NTabPreview** - Tab preview functionality

### 💬 Feedback
For user communication and status:
- **NNotification** - Alerts, messages, status updates
- **NNotificationList** - Multiple notifications, message centers
- **NPill** - Tags, status badges, categories

### 🔧 Utilities
For enhanced functionality:
- **NScrollArrow** - Scroll indicators and controls`})]}),`
`,e.jsxs("div",{className:"sb-container",children:[e.jsx("div",{className:"sb-section-title",children:e.jsx(t.h2,{id:"common-usage-patterns",children:"Common Usage Patterns"})}),e.jsx("pre",{className:"sb-code-block",children:`## Common Usage Patterns

### Basic Form Layout
\`\`\`vue
<n-card title="User Registration">
  <n-text-input label="Full Name" v-model="form.name" />
  <n-text-input label="Email" v-model="form.email" />
  <n-select label="Country" :options="countries" v-model="form.country" />
  <template #actions>
    <n-button primary @click="submitForm">Create Account</n-button>
  </template>
</n-card>
\`\`\`

### Data Display with Actions
\`\`\`vue
<n-card title="User Management">
  <n-data-grid url="/api/users" method="GET" />
  <template #actions>
    <n-button primary>Add User</n-button>
  </template>
</n-card>
\`\`\`

### Dashboard Layout
\`\`\`vue
<n-navigation-bar :links="navLinks">
  <template #logo><img src="/logo.png" /></template>
</n-navigation-bar>

<div class="dashboard-grid">
  <n-dashboard-tile 
    title="Total Users" 
    icon="mdi-account-group"
    value="1,234"
    bottom-text="12% increase" 
  />
</div>
\`\`\`

### Confirmation Modal
\`\`\`vue
<n-modal title="Confirm Action" buttonLabel="Delete">
  <p>This action cannot be undone. Continue?</p>
  <template #footer>
    <n-button @click="cancel">Cancel</n-button>
    <n-button primary @click="confirm">Confirm</n-button>
  </template>
</n-modal>
\`\`\``})]}),`
`,e.jsxs("div",{className:"sb-container",children:[e.jsx("div",{className:"sb-section-title",children:e.jsx(t.h2,{id:"component-selection-guidelines",children:"Component Selection Guidelines"})}),e.jsx("pre",{className:"sb-code-block",children:`## Component Selection Guidelines

- **Choose NButton when:** You need clickable actions, form submissions, navigation links
- **Choose NCard when:** Grouping related content, creating content sections
- **Choose NModal when:** Overlays, confirmations, complex forms that need focus
- **Choose NDataGrid when:** Displaying tabular data, especially from APIs
- **Choose NNotification when:** User feedback, alerts, status messages
- **Choose NNavigationBar when:** Site-wide navigation, main menu systems

## Key Features
- All components prefixed with 'N' (e.g., NButton, NCard)
- Components are globally registered when plugin is installed
- Vue 3 with TypeScript support
- Responsive design built-in
- Material Design Icons (@mdi/font) included
- Consistent prop naming conventions (primary, size, color)

## Styling Classes Available
- \`.n-container-style\` - Standard container styling
- \`.n-primary\`, \`.n-secondary\`, \`.n-success\`, \`.n-danger\`, \`.n-warning\`, \`.n-info\` - Color variants
- \`.standard-container\`, \`.standard-container-2/3/4\` - Responsive grid layouts

## Documentation
Full component library documentation: https://rigelsystems.github.io/NovaUI`})]}),`
`,e.jsx("div",{className:"sb-copy-section",children:e.jsxs("div",{className:"sb-copy-text",children:[e.jsx("h4",{children:"📋 How to Use This"}),e.jsx("p",{children:"1. Select all the content from the code blocks above"}),e.jsx("p",{children:"2. Copy it to your project's CLAUDE.md file"}),e.jsx("p",{children:"3. AI assistants will now understand NovaUI components and usage patterns"})]})}),`
`,e.jsx("style",{children:`
  .sb-container {
    margin-bottom: 32px;
  }

  .sb-section-title {
    margin-bottom: 24px;
  }

  .sb-code-block {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 20px;
    font-family: 'Monaco', 'Consolas', 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.5;
    margin: 16px 0;
    overflow-x: auto;
    white-space: pre-wrap;
    max-height: 500px;
    overflow-y: auto;
  }

  .sb-copy-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 8px;
    color: white;
    padding: 24px;
    margin: 32px 0;
    text-align: center;
  }

  .sb-copy-text h4 {
    color: white;
    margin-top: 0;
    margin-bottom: 16px;
  }

  .sb-copy-text p {
    color: rgba(255, 255, 255, 0.9);
    margin: 8px 0;
    font-size: 16px;
  }

  @media screen and (max-width: 600px) {
    .sb-code-block {
      font-size: 12px;
      padding: 16px;
    }
    
    .sb-copy-section {
      padding: 20px;
    }
  }
  `})]})}function m(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{m as default};
