# NovaUI

A comprehensive Vue 3 component library providing modern, customizable UI components with consistent design patterns.

[![NPM Version](https://img.shields.io/npm/v/@rigelsystems/novaui)](https://www.npmjs.com/package/@rigelsystems/novaui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**[📖 View Components & Documentation (Storybook)](https://novaui.rigelsystems.co.uk)**

## ✨ Features

- 🎯 **50+ Vue 3 Components** - Buttons, forms, data grids, modals, navigation, and more
- 🎨 **Customizable Theming** - Global theme colors and border radius configuration
- 📱 **Responsive Design** - Mobile-first approach with flexible layouts
- 🧪 **Well Tested** - Comprehensive test coverage with Vitest
- 📚 **Storybook Integration** - Interactive component documentation
- 🔧 **TypeScript Support** - Full TypeScript definitions included
- 🎪 **Material Design Icons** - Built-in MDI icon support

## 🚀 Installation

```bash
# npm
npm install @rigelsystems/novaui

# yarn
yarn add @rigelsystems/novaui
```

## 📖 Usage

### Global Registration

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import NovaUI from '@rigelsystems/novaui'

const app = createApp(App)

// Use with default theme
app.use(NovaUI)

// Or customize theme
app.use(NovaUI, { 
  theme: '#007bff', 
  borderRadius: '8px' 
})

app.mount('#app')
```

### Individual Component Import

```js
// Import specific components
import { NButton, NCard, NDataGrid } from '@rigelsystems/novaui'

export default {
  components: {
    NButton,
    NCard,
    NDataGrid
  }
}
```

### Component Usage

```vue
<template>
  <NCard>
    <h2>Welcome to NovaUI</h2>
    <NButton variant="primary" @click="handleClick">
      Click Me
    </NButton>
  </NCard>
</template>
```

## 🧩 Available Components

### Form Components
- **NButton** - Customizable button with variants
- **NTextInput** - Text input with validation
- **NTimeInput** - Time picker input
- **NSelect** - Dropdown select component
- **NColourPicker** - Color selection widget

### Layout & Navigation
- **NCard** - Flexible card container
- **NRow** - Responsive row layout
- **NNavigationBar** - Application navigation
- **NTabs** / **NTab** / **NTabPanel** - Tabbed interfaces
- **NModal** - Modal dialogs

### Data Display
- **NDataGrid** - Advanced data table with sorting/filtering
- **NTimeline** - Event timeline component
- **NCircleProgress** - Circular progress indicator
- **NDashboardTile** - Dashboard widgets

### Feedback & Interaction
- **NNotification** / **NNotificationList** - Toast notifications
- **NDropdown** - Dropdown menus
- **NScrollArrow** - Scroll navigation aids

### Specialized
- **NPaint** / **NPaintDisplay** - Drawing/painting tools
- **NHeroSection** - Landing page hero sections
- **Preview** - Content preview components

## 🛠️ Development

### Prerequisites
- Node.js 16+
- Yarn (recommended) or npm

### Setup Development Environment

```bash
# Clone the repository
git clone https://github.com/RigelSystems/NovaUI.git
cd NovaUI

# Install dependencies
yarn install

# Start Storybook development server
yarn storybook
```

### Development Commands

```bash
# Run Storybook (component development & docs)
yarn storybook

# Build the library
yarn build

# Run tests
npx vitest

# Type checking
yarn type-check

# Lint code
yarn lint

# Format code
yarn format
```

### Creating New Components

Use the Ruby generator for consistent component scaffolding:

```bash
ruby generate.rb NComponentName
```

This creates:
- `src/stories/NComponentName/NComponentName.vue` - Vue component
- `src/stories/NComponentName/NComponentName.css` - Component styles
- `src/stories/NComponentName/NComponentName.stories.js` - Storybook stories
- `src/stories/NComponentName/NComponentName.spec.ts` - Test file

### Component Development Guidelines

1. **Naming Convention**: All components use `N` prefix (e.g., `NButton`)
2. **Options API**: Use Vue 3 Options API, not Composition API
3. **Co-located Files**: Keep `.vue`, `.css`, `.stories.js`, and `.spec.ts` together
4. **Registration**: Add new components to `index.ts`

## 📦 Publishing

1. Update version in `package.json`
2. Create and push a git tag:

```bash
git tag v0.0.X
git push origin v0.0.X
```

The CI/CD pipeline will automatically publish to NPM.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-component`)
3. Make your changes following the development guidelines
4. Add tests for new components
5. Update documentation/stories
6. Commit your changes (`git commit -m 'Add amazing component'`)
7. Push to the branch (`git push origin feature/amazing-component`)
8. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/@rigelsystems/novaui)
- [Storybook Documentation](https://novaui.rigelsystems.co.uk)
- [GitHub Repository](https://github.com/RigelSystems/NovaUI)
- [Issues & Bug Reports](https://github.com/RigelSystems/NovaUI/issues)

---

Built with ❤️ by [Rigel Systems](https://rigelsystems.co.uk)
