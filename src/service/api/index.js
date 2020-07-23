/*
 * @Descripttion:
 * @version:
 * @Author: huangyueshi
 * @Date: 2020-07-20 15:48:12
 * @LastEditors: huangyueshi
 * @LastEditTime: 2020-07-23 16:03:03
 */
import HTTP from './../axios';

class ApiIndex extends HTTP {
  getData () {
    return this.request({url: '/error'});
  }
  postData () {
    return this.request({
      url: '/test/cityInfo',
      method: 'post'});
  }
}

export default ApiIndex;
