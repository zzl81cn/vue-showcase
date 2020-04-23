<template>
  <div id="aboutCon">
    <h2>About {{info}}</h2>
    <div>
      <button @click="testHmt">testHmt</button>
      <button @click="add">+</button>
      <button @click="dec">-</button>
      <button @click="incrementStatictics">incrementStatic</button>
      <button @click="decrementStatictics">decrementStatic</button>
      <button @click="addAct">addAct</button>
    </div>
    <div>{{count}} statictics {{ statictics }}</div>
    <div>{{ dou }}</div>
    <hr>
    <div id="tab">
      <div class="tab-title">
        <a href="javascript:;" @click="activeId = 0" :class="{'active': activeId === 0}">html</a>
        <a href="javascript:;" @click="activeId = 1" :class="{'active': activeId === 1}">css</a>
        <a href="javascript:;" @click="activeId = 2" :class="{'active': activeId === 2}">js</a>
        <a href="javascript:;" @click="activeId = 3" :class="{'active': activeId === 3}">vue</a>
      </div>
      <div class="tab-con">
        <div v-show="activeId === 0">
          html
          <ul>
            <!--price:"99"
service_id:100
service_name:"换胎"
small_pic:""
-->
            <li v-for="(item, index) in serviceList" :key="index">{{item.service_id}}{{item.service_name}}{{item.small_pic}}{{item.price}}</li>
          </ul>
        </div>
        <div v-show="activeId === 1">css</div>
        <div v-show="activeId === 2">js</div>
        <div v-show="activeId === 3">vue
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  const axios = require('axios');
  import * as api from "../api/interface";
  import * as api2 from '../api/api'
  export default {
    data: function () {
      return {
        activeId: 0,
        info: null,
        serviceList: null
      }
    },
    computed: {
      count() {
        return this.$store.state.count
      },
      statictics() {
        return this.$store.state.statictics
      },
      dou() {
        return this.$store.state.dou
      }
    },
    methods: {
      testHmt () {
        console.log('hmt')
        window._hmt.push(['_trackEvent', 'common', 'click', '1', '2']);
      },
      add() {
        this.$store.commit('add')
      },
      dec() {
        this.$store.commit('dec')
      },
      incrementStatictics() {
        this.$store.commit('incrementStatictics', 5)
      },
      decrementStatictics() {
        this.$store.commit({
          type: 'decrementStatictics',
          amount: 5
        })
      },
      addAct() {
        console.log('add action')
        this.$store.dispatch('plusDouAction', 5)
      },
      getServiceList () {
        let params = {
          token: 'token'
        };
        api2.getServiceList(params)
            .then(res => {
              console.log('getServiceList ', res)
              this.serviceList = res.data.data
            })
            .catch(error => {
              console.log('error ', error)
            })
      },
      getBusinessList () {
        let params = {
          token: 'token'
        };
        api2.getBusinessList(params)
            .then(res => {
              console.log('getBusinessList ', res)
              // this.serviceList = res.data.data
            })
            .catch(error => {
              console.log('error ', error)
            })
      },
      postMockEx () {
        // https://easy-mock.com/mock/5a0d2eb685e6ba3feeead78c/example/upload
        api2.postExampleUpload()
            .then(res => {
              console.log('res', res)
            })
      }
    },
    beforeMount() {
      // debugger
      console.log('beforeMount');
      /* 此处对请求服务器或服务器响应超时做了处理，首先在axios的实例添加拦截器 */
      api.article().then(res => {
        console.log(res)
      }).catch(err => {
        console.log('components err: ', err);
        if (err.code === 'ECONNABORTED' || err.message.indexOf('timeout') !== -1) {
          this.activeId = 1;
        }
      })
    },
    mounted() {
      console.log('mounted')
      axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response))
      // this.getServiceList()
      // this.getBusinessList()
      this.postMockEx()
    }
  }
</script>

<style>
  .tab-title a.active {
    color: #0ff;
  }
</style>
