## 🚅 Quick start

Vue component library.

View Components at: https://novaui.rigelsystems.co.uk

### Setup

```shell
npm install @rigelsystems/novaui
```

```js
import NovaUI from '@rigelsystems/novaui'

app.use(NovaUI, { theme: '#000', borderRadius: '5px' });
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
