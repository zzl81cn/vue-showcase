<template>
    <div id="MyHeader">
        <div class="my-header">
            <h1 class="logo">logo</h1>
        </div>
        <div class="top-nav">
            <ul class="nav-list">
                <li class="nav-btn"><router-link to="/">Home</router-link></li>
                <li class="nav-btn"><router-link to="/blog">Blog</router-link></li>
                <li class="nav-btn"><router-link to="/qipa">Qipa</router-link></li>
                <li class="nav-btn"><router-link to="/h">点击进入不存在的路径</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MyHeader',
    data () {
        return {
            'nav-btn': 'nav-btn'
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #MyHeader {
    display: flex;
  }
  .logo {
    font-size: 20px;
  }
  .nav-list {
    list-style: none;
  }
  .nav-list > li {
    float: left;
    font-size: 16px;
    line-height: 20px;
  }
  .nav-list > li > a {
    padding: 6px 12px;
  }
</style>
