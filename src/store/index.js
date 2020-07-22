/*
 * @Descripttion:
 * @version:
 * @Author: huangyueshi
 * @Date: 2020-07-07 17:16:00
 * @LastEditors: huangyueshi
 * @LastEditTime: 2020-07-21 15:15:02
 */
import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';// 然后给 actions 注册一个事件处理函数，当这个函数被触发时，将状态提交到 mutaions中处理
import mutations from './mutations';// 更新状态
import getters from './getters';// 获取状态信息

Vue.use(Vuex);

const state = {
  isLoading: false,
  data: []
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
