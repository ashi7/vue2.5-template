/*
 * @Descripttion:
 * @version:
 * @Author: huangyueshi
 * @Date: 2020-07-20 15:48:12
 * @LastEditors: huangyueshi
 * @LastEditTime: 2020-07-20 17:35:50
 */
import HTTP from './../axios'

class ApiIndex extends HTTP {
  getData () {
    return this.request({url: '/api/index.json'})
  }
}

export default ApiIndex
