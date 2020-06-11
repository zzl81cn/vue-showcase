# vue-cli2-ckeditor5

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

## error
``` bash
需要注意的是：

绘图要选择的dom元素必须是原生元素，

不能使用ui库元素,如用iview中的< Content >就会报错。Error: Element is not attached to a Document。

下面代码可以看到，绘图的元素this.$refs.imgTransf指向的是div元素，这样是没有问题的，


        <img class="completeImg" :src="imgURL"/>

        <Content class="zm" >
        <div id="code" ref="imgTransf">
          <!-- 循环拿到每个模块里面的详情 -->
          <!-- 基本信息 -->
 但是我把绘图的元素this.$refs.imgTransf指向的是ui库的<Content>元素就会报Element is not attached to a Document。

<Content class="zm"  ref="imgTransf">   //不能指向非原生元素
        <div id="code">
          <!-- 循环拿到每个模块里面的详情 -->
          <!-- 基本信息 -->
 let imgHeight = window.document.querySelector("#code").offsetHeight; // 获取DOM高度
      let imgWidth = window.document.querySelector("#code").offsetWidth; // 获取DOM宽度
      let scale = window.devicePixelRatio; // 获取设备像素比
      html2canvas(this.$refs.imgTransf, {
        backgroundColor: null, //设置背景颜色
        useCORS: true, //允许图片跨域
        scale: scale, //缩放2倍，使得图片更加清晰
        width: imgWidth,
        height: imgHeight,
```
