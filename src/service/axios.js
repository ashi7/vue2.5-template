/*
 * @Descripttion:
 * @version:
 * @Author: huangyueshi
 * @Date: 2020-07-20 12:04:59
 * @LastEditors: huangyueshi
 * @LastEditTime: 2020-07-22 17:54:49
 */
import axios from 'axios';
import store from './../store/index';
var qs = require('qs');

class HTTP {
  // 公开函数
  // http请求函数封装
  // eslint-disable-next-line no-unused-vars
  /**
   * url ：请求路径 —— 由配置文件中config的域名路径 与 传入参数params中的接口路径相结合
   * data：请求参数 —— 调用传入参数params中的data数据
   * method：请求类型 —— 调用传入参数params中的method数据，默认为GET
   * header：请求头
   * resolve —— 返回码为2**时，则把请求结果传入resolve中
   *          否则就调用reject，关闭请求流程, 然后调用 _show_error 内部函数做出提醒,
   * reject：请求失败时的回调函数（常用于网络超时）
   * */
  request ({
    url,
    data = {},
    method = 'get'
  }) {
    store.commit('updateLoadingStatus', { isLoading: true });
    return new Promise((resolve, reject) => {
      axios({
        url: url,
        data: method === 'post' || method === 'put' ? qs.stringify(data) : null,
        params: method === 'get' || method === 'delete' ? qs.stringify(data) : null,
        method: method,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        responseType: 'json',
        baseURL: ''
      })
        .then(res => {
          store.commit('updateLoadingStatus', { isLoading: false });
          resolve(res);
        })
        // eslint-disable-next-line handle-callback-err
        .catch(err => {
          store.commit('updateLoadingStatus', { isLoading: false });
          reject(err); // 调用reject，关闭请求流程
        });
    });
  }
}

// 返回在vue模板中的调用接口
export default HTTP;
