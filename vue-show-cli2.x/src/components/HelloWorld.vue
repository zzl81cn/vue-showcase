<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--<img src="/mapi/verify/img/code?_v=1559458659200" alt="">-->
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <img v-lazy="'//static.gongzuochong.cn/image/ssl/fangan/timg%20copy%2024@2x.png'" alt="">
    <img v-lazy="'//static.gongzuochong.cn/image/ssl/pricec/c01.png'" alt="">
    <img v-lazy="'//static.gongzuochong.cn/image/ssl/pricec/c02.png'" alt="">
    <div class="random-list">
      <div class="random-item" :class="{'hoverBg':index==hoverIndex}" v-for="(item, index) in info" :key="index" @mouseover="hoverIndex = index" @mouseout="hoverIndex = -1">
        <img src="@/assets/logo.png" alt="">
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      info: null,
      hoverIndex: -1,
      // verifyCode: testVerifyCode()
    }
  },
  methods: {
    getData() {
      axios.get("https://easy-mock.com/mock/5a0d2eb685e6ba3feeead78c/example/mock").then(Response => {
        console.log(Response)
        this.info = Response.data.data.projects;
      })
    },
    testVerifyCode() {
      /* axios.get('/mapi/verify/img/code?_v=' + Date.now()).then(res => {
        console.log('codeImg', res);
        this.verifyCode = res.data;
      }) */
      let path = '/mapi/verify/img/code?_v=' + Date.now()
      return path;
    }
  },
  created: function() {
    console.group('created...')
    this.getData()
  },
  mounted: function() {
    console.group('mounted...')
    this.testVerifyCode()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hoverBg{
  background: #ccc;
  color: #fff;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
