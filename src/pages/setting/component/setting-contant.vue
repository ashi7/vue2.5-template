<!--
 * @Descripttion:
 * @version:
 * @Author: huangyueshi
 * @Date: 2020-07-15 11:36:29
 * @LastEditors: huangyueshi
 * @LastEditTime: 2020-07-21 15:26:56
-->
<template>
  <div>
    setting {{loadingStatus}}
  </div>
</template>

<script>
import Api from '@/service/api/index'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
const ApiIndex = new Api();
export default {
  name: 'settingContant',
  computed: {
    ...mapState({ // 获取state的值，等于this.$store.state
      loadingStatus: 'isLoading'
    }),
  },
  mounted() {
    ApiIndex.getData().then(res =>{
        // console.log(res);
      })
      .catch(err => {
        // console.log(err);
      })
  },
}
</script>

<style lang="scss" scoped>

</style>
