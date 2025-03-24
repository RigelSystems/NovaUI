## 🚅 Quick start

Vue component library.

View Components at: https://novaui.rigelsystems.co.uk

### Setup

```shell
npm install @rigelsystems/novaui
```

```js
// main.js
import App from './App.vue'
import NovaUI from '@rigelsystems/novaui'

const app = createApp(App)
app.use(NovaUI, { theme: '#000', borderRadius: '5px' });
app.mount('#app')
```

### Development

Run storybook with:

```shell
yarn storybook
```

Run test suite with:

```shell
npx vitest
```

Generate component template:

```shell
ruby generate.rb NComponentName
```

### Deploying a release

Bump the version in the package.json and tag the commit, this will trigger the pipelines and publish the package.

`git tag v0.0.0`

`git push origin v0.0.0`
