# vue-dev

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


``` bash
    rootState 在App.vue内引入为“state”
    getters.js的“export const getterMsg = state => state.msg;”语句中的“getterMsg”返回所需“msg”;

    App.vue的import {mapGetters} from 'vuex'”以及“export default { ..., computed: {...mapGetters(['getterMsg'])} , ...}”，再在vue组件内使用模板语法绑定“{{ getterMsg }}”就可以由store取出并显示数据了；
    actions(changeMsg commit type is mutationMsg)
                                           V
                                     mutations > mutationMsg

```
