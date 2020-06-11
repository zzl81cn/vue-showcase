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
      <img src="data:image/png;base64,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" alt="">
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
        articleData: ''
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
        this.articleData = this.editor.getData();
        console.log('artical data', this.articleData);
        this.downPdf('<div>' + this.articleData + '</div>');
      },
      // downPdf () {
      downPdf (data) {
        console.log('donwpdf', data);
        /*注意：生成的pdf只有页面窗口可见的区域，有滚动条的下面没有生成出来（要注意这里是一个坑）
坑：如果截取是body的这个层级，而刚好body设置了overflow: hidden;那超出的部分是永远截取不到的，因为这个节点的dom高就是窗口可见的高度，并不包含滚动条多出来的部分。
解决办法：只需要在导出之前将overflow:auto设置成visible(默认即可)；
        导出pdf后再设置回去。*/
        // 导出之前将dom的overflow：auto设置成visible
        // this.$('#boardPdf').css({'overflow-y': 'visible', 'height': 'auto'})
        // this.$('#app').css({'overflow-y': 'visible', 'height': 'auto'})
        // this.$('body').css({'overflow-y': 'visible', 'height': 'auto'})

        // eslint-disable-next-line
        // html2canvas(document.querySelector('#boardPdf'), {
        // html2canvas(data, {
        html2canvas(document.querySelector('#editor'), {
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
          let pdf = new JsPDF('', 'pt', 'a4')
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
          pdf.save('report_pdf_' + new Date().getTime() + '.pdf')
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
