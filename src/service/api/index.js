/*
 * @Descripttion:
 * @version:
 * @Author: huangyueshi
 * @Date: 2020-07-20 15:48:12
 * @LastEditors: huangyueshi
 * @LastEditTime: 2020-07-22 17:58:44
 */
import HTTP from './../axios';

class ApiIndex extends HTTP {
  getData () {
    return this.request({url: '/api/index.json'});
  }
}

export default ApiIndex;
