/*
* https://www.jianshu.com/p/d21da2bb22f5
* */

export default {
  method: 'post',
  // 基础url前缀
  // /5a0d2eb685e6ba3feeead78c/example/promise-aticle-list
  baseURL: 'https://easy-mock.com/mock',
  // 请求头信息
  headers: {
    'Content-Type':'application/json;charset=UTF-8'
  },
  // 参数
  data: {},
  // 设置超时时间
  timeout: 500,
  // 携带凭证
  withCredentials: false,
  // 返回数据类型
  responseType: 'json'
}
