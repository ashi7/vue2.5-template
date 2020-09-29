/*
 * @Descripttion:
 * @version:
 * @Author: huangyueshi
 * @Date: 2020-07-20 15:48:12
 * @LastEditors: huangyueshi
 * @LastEditTime: 2020-07-23 18:44:57
 */
import HTTP from './../axios';

class ApiIndex extends HTTP {
  getData () {
    return this.request({url: '/test/city'});
  }
  postData () {
    return this.request({
      url: '/test/cityInfo',
      method: 'post'});
  }
}

export default ApiIndex;
