# vue-show

## import element-ui
```javascript
import Vue from 'vue'
import ElementUI from 'element-ui' // 1
import 'element-ui/lib/theme-chalk/index.css' // 2

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI) // 3

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
