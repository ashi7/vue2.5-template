/*
 * @Descripttion:
 * @version:
 * @Author: huangyueshi
 * @Date: 2020-07-23 16:07:21
 * @LastEditors: huangyueshi
 * @LastEditTime: 2020-07-23 16:07:21
 */
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export default {
  init () {
    // 模拟异常请求
    let mock = new MockAdapter(axios);

    // mock success request  模拟成功请求
    mock.onGet('/success').reply(200, {
      msg: 'success'
    });
    // mock error request  模拟失败请求
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    });
    // mock error request  模拟失败403请求
    mock.onGet('/error403').reply(403, {
      msg: 'failure'
    });
  }
};
