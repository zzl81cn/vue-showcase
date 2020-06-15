<template>
  <div class="ck-editor">
    <div class="toolbar">
      <button class="btn" @click="saveData">save</button>
      <button class="btn" @click="exportPdf">export pdf</button>
    </div>
    <!-- 工具栏容器 -->
    <div id="toolbarContainer"></div>
    <!-- 编辑器容器 -->
    <div id="editor">
      <p>This is the initial editor content.</p><p><span class="text-big"><i>This is the initial editor content.</i></span></p><p><span class="text-big"><strong>This is the initial editor content.</strong></span></p>
      <img class="img-ax" :src="imgPath" alt="">
      <img class="img-ax" :src="imgPath" alt="">
      <img class="img-ax" :src="imgPath" alt="">
      <img class="img-ax" :src="imgPath" alt="">
      <img class="img-ax" :src="imgPath" alt="">
      <img class="img-ax" :src="imgPath" alt="">
      <img class="img-ax" :src="imgPath" alt="">
      <img class="img-ax" :src="imgPath" alt="">
      <img class="img-ax" :src="imgPath" alt="">
      <img class="img-ax" :src="imgPath" alt="">
      <img class="img-ax" :src="imgPath" alt="">
      <img class="img-ax" :src="imgPath" alt="">
      <img class="img-ax" :src="imgPath" alt="">
    </div>
  </div>
</template>

<script>
  import CKEditor from '@ckeditor/ckeditor5-build-decoupled-document'
  import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn'
  import html2canvas from "html2canvas";
  import JsPDF from "jspdf";

  export default {
    name: "ckeditorDoc",
    data () {
      return {
        // 编辑器实例
        editor: null,
        articleData: '',
        imgPath: require("../../assets/images/axure-crx20200612152243.png")
      }
    },
    mounted() {
      this.initCKEditor()
    },
    methods: {
      initCKEditor() {
        CKEditor.create(document.querySelector('#editor'), {
          /*ckfinder: {
            uploadUrl: '/admin/Upload/uploadUrl'
            //后端处理上传逻辑返回json数据,包括uploaded(选项true/false)和url两个字段
          },*/
          language: 'zh-cn'
        }).then(editor => {
          const toolbarContainer = document.querySelector('#toolbarContainer');
          toolbarContainer.appendChild(editor.ui.view.toolbar.element);
          this.editor = editor //将编辑器保存起来，用来随时获取编辑器中的内容等，执行一些操作
        }).catch(error => {
          console.error(error);
        });
      },
      saveData () {
        this.articleData = this.editor.getData();
        console.log('artical data', this.articleData);
      },
      exportPdf () {
        // this.articleData = this.editor.getData();
        // console.log('artical data', this.articleData);
        // this.downPdf('<div>' + this.articleData + '</div>');
        this.downPdf()
      },
      // downPdf
      downPdf () {
        // console.log('donwpdf', data);
        let pdf = new JsPDF('', 'pt', 'a4')
        /*注意：生成的pdf只有页面窗口可见的区域，有滚动条的下面没有生成出来（要注意这里是一个坑）
        坑：如果截取是body的这个层级，而刚好body设置了overflow: hidden;那超出的部分是永远截取不到的，因为这个节点的dom高就是窗口可见的高度，并不包含滚动条多出来的部分。
        解决办法：只需要在导出之前将overflow:auto设置成visible(默认即可)；导出pdf后再设置回去。*/
        // 导出之前将dom的overflow：auto设置成visible
        // this.$('#boardPdf').css({'overflow-y': 'visible', 'height': 'auto'})
        // this.$('#app').css({'overflow-y': 'visible', 'height': 'auto'})
        // this.$('body').css({'overflow-y': 'visible', 'height': 'auto'})

        let docsDom = document.querySelector('#editor');
        let docsArray = docsDom.childNodes;
        let docsCount = docsDom.childElementCount;
        debugger;
        docsArray.forEach((item, index) => {
          html2canvas(item, {
            scale: 2,
          }).then((canvas) => {
            var contentWidth = canvas.width
            var contentHeight = canvas.height
            // 一页pdf显示html页面生成的canvas高度;
            var pageHeight = contentWidth / 592.28 * 841.89
            // 未生成pdf的html页面高度
            var leftHeight = contentHeight
            // pdf页面偏移
            var position = 0
            // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
            var imgWidth = 595.28
            var imgHeight = 592.28 / contentWidth * contentHeight
            var pageData = canvas.toDataURL('image/jpeg', 1.0)
            // eslint-disable-next-line
            // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
            // 当内容未超过pdf一页显示的范围，无需分页
            if (leftHeight < pageHeight) {
              pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
            } else {
              while (leftHeight > 0) {
                pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                leftHeight -= pageHeight
                position -= 841.89
                // 避免添加空白页
                if (leftHeight > 0) {
                  pdf.addPage()
                }
              }
            }
            // 导出pdf文件命名
            // pdf.save('report_pdf_' + new Date().getTime() + '.pdf');
            console.log('pdf', pdf)
          })
        })
        // 导出pdf后，将dom原本的属性设置回去
        // this.$('#boardPdf').css({'overflow-y': 'auto', 'height': '100%'})
        // this.$('#app').css({'overflow-y': 'auto', 'height': '100%'})
        // this.$('body').css({'overflow-y': 'auto', 'height': '100%'})
      }
    },
  }
</script>

<style scoped>
  .toolbar {
    padding: 5px;
  }
</style>
