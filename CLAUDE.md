# NovaUI - Vue Component Library

## Project Overview
NovaUI is a Vue 3 component library developed by Rigel Systems. It's published as `@rigelsystems/novaui` on NPM and provides a collection of reusable UI components with consistent styling and theming support.

## Key Information
- **Framework**: Vue 3 with Options API
- **Build Tool**: Vite
- **Testing**: Vitest with Testing Library
- **Documentation**: Storybook
- **Package Manager**: Yarn (preferred) / NPM
- **TypeScript**: Yes, with vue-tsc for type checking
- **Styling**: CSS files co-located with components

## Project Structure
```
src/stories/           # All components are organized here
├── NButton/          # Component folders follow N[Name] convention
│   ├── NButton.vue   # Vue component (Options API)
│   ├── NButton.css   # Component-specific styles
│   ├── NButton.stories.js  # Storybook stories
│   └── NButton.spec.ts     # Vitest tests
├── NCard/
├── NDataGrid/
└── ...               # 20+ components following same pattern
```

## Development Commands
- `yarn storybook` - Run Storybook dev server (port 6006)
- `yarn build` - Build the library for production
- `yarn type-check` - Run TypeScript type checking
- `yarn lint` - Run ESLint with auto-fix
- `yarn format` - Format code with Prettier
- `npx vitest` - Run test suite

## Component Development Guidelines

### Naming Convention
- All components use `N` prefix (e.g., NButton, NCard, NDataGrid)
- Folder structure: `src/stories/N[ComponentName]/`
- Files: `N[ComponentName].vue`, `N[ComponentName].css`, `N[ComponentName].stories.js`, `N[ComponentName].spec.ts`

### Code Style
- **Vue**: Use Options API (not Composition API)
- **CSS**: Component-scoped styles in separate CSS files
- **TypeScript**: Enabled, but not strictly enforced
- **Testing**: Use Testing Library with Vitest

### Component Registration
All new components must be:
1. Added to `index.ts` imports
2. Registered in the plugin's install method
3. Exported for individual use

### Component Generation
Use Ruby generator for consistent component scaffolding:
```bash
ruby generate.rb NComponentName
```

## Theming & Styling
- Global theme options: `theme` (color) and `borderRadius`
- Shared styles in `src/assets/shared.css`
- Material Design Icons included via `@mdi/font`
- Components should follow existing visual patterns

## Publishing
- Bump version in `package.json`
- Create git tag: `git tag v0.0.X`
- Push tag: `git push origin v0.0.X`
- Automated CI/CD will publish to NPM

## Current Components (50+ available)
NButton, NCard, NDataGrid, NDropdown, NModal, NNavigationBar, NTextInput, NSelect, NTabs, NTimeline, NCircleProgress, NPaint, NColourPicker, and many more.

## Dependencies
- **Vue 3**: Core framework
- **Axios**: HTTP client
- **Day.js**: Date handling
- **Material Design Icons**: Icon system
- **Storybook**: Documentation and development
- **Vitest**: Testing framework

## Notes for Development
- Always maintain consistency with existing component patterns
- Follow the established file structure and naming conventions
- Test components thoroughly before adding to the library
- Use Storybook for component development and documentation
- Keep components focused and reusable