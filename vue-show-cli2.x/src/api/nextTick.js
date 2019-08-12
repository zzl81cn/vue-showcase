query: function () {
  var self = this
  self.$nextTick(function () {
    axios.post(localStorage.storageServUrl + 'search',
      {
        param: self.from,
        page: self.searchCondition.pageNo
      },
      {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        timeout: 30000                     // 设置请求超时时间30s
      }
    ).then(function (res) {
      if (res.data.code === 0 && res.data.data.length !== 0) {
        var curquestionList = res.data.data
        if (self.searchCondition.pageNo === 1) {
          self.List = curquestionList
          setTimeout(function () {
            self.showLoadMore = false
            self.showLoadMoreOk = true
          }, 1500)
        } else if (self.searchCondition.pageNo > 1) {
          // 上拉加载，翻页，拼接数组
          self.List = self.List.concat(curquestionList)
        }
        self.scrollMode = 'touch'
      } else if (res.data.code === 0 && res.data.data.length === 0) {
        setTimeout(function () {
          self.showLoadMore = false
          self.showLoadMoreOk = true
        }, 1500)
      } else if (res.status !== 200) {     // status不是200的
        if (self.searchCondition.pageNo === 1) {
          self.showLoadMore = true
          self.showLoadMoreOk = false
        }
      }
    }).catch(function (error) {
      console.log(error)
      var str = error + ''
      if (self.searchCondition.pageNo === 1) {
        if (str.search('timeout') !== -1) {   // 超时error捕获
          self.showLoadMore = true
          self.showLoadMoreOk = false
        }
      }
    })
  })
},
