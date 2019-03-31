<template>
    <div id="header">
        <div class="header">
            <h1 class="logo">logo</h1>
        </div>
        <div class="top-nav">
            <ul class="nav-list">
                <li class="nav-btn"><router-link to="/blog">Blog</router-link></li>
                <li class="nav-btn"><router-link to="/qipa">Qipa</router-link></li>
                <li class="nav-btn"><router-link to="/h">点击进入不存在的路径</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'header',
    data () {
        return {
            'nav-btn': 'nav-btn'
        }
    }
}
</script>
<style scoped>
  #header {
    display: flex;
  }
  .nav-list {
    list-style: none;
  }
  .nav-list > li {
    float: left;
  }
</style>
