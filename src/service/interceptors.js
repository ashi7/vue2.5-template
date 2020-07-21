/*
 * @Descripttion:请求拦截器
 * @version:
 * @Author: huangyueshi
 * @Date: 2020-07-20 15:05:57
 * @LastEditors: huangyueshi
 * @LastEditTime: 2020-07-20 18:10:21
 */
import axios from 'axios'

// 请求拦截
const request = axios.interceptors.request.use(config => {
  // console.log(config)
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
const response = axios.interceptors.response.use(res => {
  // console.log(res)
  const apiRes = res.data
  return apiRes
}, async error => {
  if (error.response.status) {
    // 错误状态码
    switch (error.response.status) {
      // 401: 未登录
      // 未登录则跳转登录页面，并携带当前页面的路径
      // 在登录成功后返回当前页面，这一步需要在登录页操作。
      case 401:
        break
      case 403:
        break
      case 500:
        break
    }
  }
  return Promise.reject(error)
})

export default {request, response}
