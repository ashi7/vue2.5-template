<!--
 * @Descripttion:
 * @version:
 * @Author: huangyueshi
 * @Date: 2020-07-06 15:23:39
 * @LastEditors: huangyueshi
 * @LastEditTime: 2020-07-22 18:59:15
-->
<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item v-for="item of headerMenuList" :key="item.key">
          {{item.value}}
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :default-selected-keys="['11']"
          :default-open-keys="[siderMenuList[0].key]"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu v-for="item of siderMenuList" :key="item.key" >
            <span slot="title"><a-icon type="user" />{{item.value}}</span>
            <template v-if="item.children">
              <a-menu-item v-for="item of item.children" :key="item.key">
                {{item.value}}
              </a-menu-item>
            </template>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          <home-content>
            <!-- <div>home slot</div> -->
          </home-content>
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>

</template>

<script>
import HomeContent from './component/home-content'
export default {
  name: 'Home',
  components: {
    HomeContent
  },
  data() {
    return {
      collapsed: true,
      headerMenuList: [
        {key: '2', value: 'nav4'},
        {key: '3', value: 'nav5'},
        {key: '4', value: 'nav6'},
      ],
      siderMenuList: [
        {
          key: '1',
          value: 'option1',
          children: [
            {key: '11', value: 'option11'},
            {key: '22', value: 'option22'},
            {key: '33', value: 'option33'},
          ]
        },

      ]
    }
  },
}
</script>


<style lang="scss" scoped>
#components-layout-demo-top-side-2{
  height: 100%
}
</style>
