# vue-show-cli2.x

> A Vue.js project from https://www.cnblogs.com/blackchaos/p/8723724.html

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


# store
## action
...mapActions(['getXxx','getUserInfo','getXxOo']),

[Vue.js中ajax请求代码应该写在组件的methods中还是vuex的actions中？](https://www.zhihu.com/question/57133837)
> 一种是：“请求后端接口”这个ajax代码应该是写在按钮的点击事件处理函数中，然后在这个处理函数里面提交mutations 还一种是：直接将“请求后端接口”这个ajax代码写在actions中，actions中提交mutations，按钮的点击事件处理函数中只写一个分发actions的按钮我会把所有和服务端的交互写在 Actions 中（除非你和服务端的交互不需要界面反馈，比如前端打点的统计这种）其他情况下理论上你的页面的状态应该是和服务端一一对应的。所以把对后端的请求都通过 Actions 来封装，你业务代码里逻辑就只有对Action 的调用操作，更形象的就是直接对数据操作。而再不用管数据的返回之类的，因为数据返回直接会改变state，而state 的改变直接会触发 View 的更新。我觉得这个才是 vuex 和 前端单向数据流方便，提高效率的地方。总体的设计原则是Actions 是异步，处理业务逻辑的，而 Mutation 只是简单对state 的状态进行改变。通过这样你所有的组件进行的操作都可以和你的state 的状态一一对应，代码清晰简单。另外还有一个疑问就是“将后端返回的json做相关处理”这个代码又应该是先处理好，然后将处理好的数据传入mutations，还是直接在mutations里面处理？我肯定会处理好再传入mutations，我的mutation-types 都非常的清晰就是 UPDATE_[XXX] ，ADD_[XXX] 所以除去必要的逻辑，如果有计算逻辑，或是其他格式化的逻辑，我肯定是做完以后，才调用 commit 你可以把state 理解为前端的共用数据库， mutations 这些是增删改，getters 是查，所以mutations 里的逻辑应该是越少越好，记得官网也有建议

> 要早睡的Zzzy: 大四党答一个，毕设用到vue，写了一段时间，有一些小见解。首先你要考虑，你请求来的数据是不是要被其他组件公用？如果不是，仅仅在请求的组件内使用，就不需要放入vuex 的state里。第二，你的ajax请求是不是要被其他地方复用，这个很大几率上是需要的，如果需要，请将请求放入action里，方便复用，并包装成promise返回，在调用处用async await处理返回的数据。如果不要复用这个请求，那么直接写在vue文件里很方便。我个人理解，围绕可复用，易拓展思考解决方案，往往会得到不错的答案。发布于 2017-03-21

> Jason chen: 你所说的两种都可以。我个人如果这个操作只做一次我会把他放在 methods 里，如果能复用，放在 actions 里。另外 mutations 是做状态变更的，你的 json 数据要处理应该放在 actions 或者 methods 里。编辑于 2017-03-16

> 吴昊: 这个想法是完全错误的，首先store是用来管理状态的，注意是状态，不是数据，所以不要过度依赖store，store的数据应该简而又简 编辑于 2017-03-28

> 汕大小吴EricWu: 一般是把所有请求方法，分门别类的写在api.js文件中，然后暴露出方法，给其他文件使用。你可以在需要的时候引入这个api文件，然后可以在组件的methods中使用api里面的方法，也可以在vuex中actions中使用。个人倾向于第二种，为了更好的管理。偶尔使用第一种，因为没有缓存，也容易理解。发布于 2018-11-26

> 赵的拇指： 我现在的项目的目录结构是按照vuex文档上示例的那个项目的目录结构做的，[例如](https://vuex.vuejs.org/zh/guide/structure.html),我的整体项目结构基本和这个一致，所有的 ajax 请求放在api目录里面，然后组件需要发起 ajax 请求的时候，在store相应的modules里中的Action调用请求，请求成功后提交 mutation，判断action是否完成可以用Promise。后端返回的 json 数据，我是放在 mutation 里处理的， Action 负责异步的操作，处理数据交给 mutation。因为项目做的不是很多，所以也没什么经验，但是我感觉官方文档的这个目录结构就很好。