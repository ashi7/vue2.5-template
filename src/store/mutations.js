/*
 * @Descripttion:
 * @version:
 * @Author: huangyueshi
 * @Date: 2020-07-21 14:53:40
 * @LastEditors: huangyueshi
 * @LastEditTime: 2020-07-21 15:54:48
 */
// mutations里面放的是方法，方法主要用于改变state里面的数据
// // 等同于this.$store.commit('方法名', { 参数: 参数值 }) ，修改state里的值
const mutations = {
  updateLoadingStatus (state, payload) {
    state.isLoading = payload.isLoading;
  }
};
export default mutations;
