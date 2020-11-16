<template>
  <div id="jointjs-view">
    <h2>jointjs</h2>
    <div id="myHolder"></div>
  </div>
</template>

<script>
  /**
   * http://www.bjhee.com/jointjs.html
   * JointJS中的图形主要有两类，一是”元素”（Element），由构造函数创建。上例中的矩形就是JointJS库提供的标准元素，其构造函数为joint.shapes.standard.Rectangle。元素创建后，可以设置各种参数，比如位置，大小，风格等。JointJS提供了丰富的内置元素如矩形，圆形，椭圆等，可以参考API文档。同时，我们可以通过扩展joint.dia.Element类来自定义元素。

   另一类图形是”连接”(Link)，用来将两个”元素”连起来，一般显示为一条连线。上例中的连线是通过JointJS库提供的标准构造函数joint.shapes.standard.Link来创建的，创建后设置其”头”（Source）和”尾”（Target），即可将两个”元素”连起来。我们也可以设置”连接”的各种参数，如颜色，箭头，标签文字等。
   */
  // https://juejin.im/post/5c1116426fb9a04a0440e334
  export default {
    name: "index",
    created() {
      this.$nextTick(() => {
        let graph = new joint.dia.Graph; // 创建画板，所有图上的元素都在画板里
        // 创建画板上的画布，画布是用来渲染画板, document.getElementById
        let paper = new joint.dia.Paper({
          el: $('#myHolder'),
          width: 600,
          height: 200,
          model: graph,
          gridSize: 1
        });

        let rect = new joint.shapes.basic.Rect({
          position: { x: 100, y: 30 },
          size: { width: 100, height: 30 },
          attrs: { rect: { fill: 'blue' }, text: { text: 'my box', fill: 'white' } }
        });

        let rect2 = rect.clone();
        rect2.translate(300);

        let link = new joint.dia.Link({
          source: { id: rect.id },
          target: { id: rect2.id }
        });

        graph.addCells([rect, rect2, link]);


      })
    },
    methods: {
      breakText () {
        var graph = new joint.dia.Graph;

        var paper = new joint.dia.Paper({
            el: $('#paper'),
            width: 700,
            height: 250,
            model: graph,
            gridSize: 1
        });

        var width=200, padding=10;

        var text = joint.util.breakText("breakText example with text block centred veritcally and horizontally and text lines centered.",{width:width-2*padding},{'font-size':12});

        var rect = new joint.shapes.basic.Rect({
            position: { x: 10, y: 10 },
            size: { width: 210, height: 100 },
            attrs: {text: {text:text, 'font-size':12, 'x-alignment':'', 'text-anchor':'middle', ref:'rect'}}
        });

        var text1 = joint.util.breakText("another breakText example with and text aligned top left.",{width:width-2*padding},{'font-size':12});

        var rect1 = new joint.shapes.basic.Rect({
            position: { x: 230, y: 10 },
            size: { width: 210, height: 100 },
            attrs: {text: {text:text1, 'font-size':12, 'x-alignment':'', 'ref-x':padding, 'y-alignment':'', 'ref-y':padding, 'text-anchor':'start', ref:'rect'}}
        });

        var text2 = joint.util.breakText("yet another breakText example with and text aligned bottom right.",{width:width-2*padding},{'font-size':12});

        var rect2 = new joint.shapes.basic.Rect({
            position: { x: 450, y: 10 },
            size: { width: 210, height: 100 },
            attrs: {text: {text:text2, 'font-size':12, 'x-alignment':'', 'ref-x':'', 'ref-dx':-padding, 'y-alignment':-.999, 'ref-y':'', 'ref-dy':-padding, 'text-anchor':'end', ref:'rect'}}
        });

        var text3 = joint.util.breakText("even a fourth breakText example with and text aligned bottom left.",{width:width-2*padding},{'font-size':12});

        var rect3 = new joint.shapes.basic.Rect({
            position: { x: 10, y: 120 },
            size: { width: 210, height: 100 },
            attrs: {text: {text:text3, 'font-size':12, 'x-alignment':'', 'ref-x':padding, 'y-alignment':-.999, 'ref-y':'', 'ref-dy':-padding, 'text-anchor':'start', ref:'rect'}}
            
        });graph.addCells([rect, rect1, rect2, rect3]);
      }
    }
  }
</script>

<style scoped>
  #myholder {
    min-height: 200px;
  }
</style>
