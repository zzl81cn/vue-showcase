<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--<img src="/mapi/verify/img/code?_v=1559458659200" alt="">-->
    <div class="drag-field">
      <div class="item"
           draggable="true"
           @dragstart="dragstart($event, item)"
           @dragend="dragend"
           v-for="(item, index) in items" :key="index"
      >
        {{ item.label }}
      </div>
    </div>

    <div class="drop-field"
         @drop="drop"
         @dragover.prevent
    >
      <div class="item"
           v-if="droppedItem !== ''">
        {{ droppedItem }}
      </div>
    </div>
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
      droppedItem: '',
      items: [
        {
          id: 1,
          label: '模块一'
        },
        {
          id: 2,
          label: '模块二'
        },
        {
          id: 3,
          label: '模块三'
        }
      ]
      // verifyCode: testVerifyCode()
    }
  },
  methods: {
    drop (event) {
      this.droppedItem = event.dataTransfer.getData('item')
    },
    dragstart (event, item) {
      event.dataTransfer.setData('item', item.label)
    },
    dragend (event) {
      event.dataTransfer.clearData()
    },
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
  .drag-field,
  .drop-field{
    height: 10rem;
    box-sizing: border-box;
    padding: 1rem;
    background-color: #eee;
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .item{
    width: 30%;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
    font-size: .9rem;
    background-color: royalblue;
    color: #eee;
  }
  .item:hover{
    cursor: pointer;
  }
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
