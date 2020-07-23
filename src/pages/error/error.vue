<!--
 * @Descripttion:
 * @version:
 * @Author: huangyueshi
 * @Date: 2020-07-06 15:26:08
 * @LastEditors: huangyueshi
 * @LastEditTime: 2020-07-23 12:05:55
-->
<template>
  <div class="error-content">
    <p>{{errorContent}}</p>
    <div @click="returnHome" class="return-button">返回首页</div>
  </div>
</template>

<script>
export default {
  name: 'StatusError',
  data() {
    return {
      errorContent: ''
    }
  },
  mounted() {
    this.errorContent = this.$route.query.content;
  },
  methods: {
    // 返回首页
    returnHome() {
      this.$router.push('/');
    }
  },
}
</script>


<style lang="scss" scoped>
.error-content{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(49, 33, 33);
  color: #fff;
  font-size: 25px;
  .return-button{
    background: #4b4b6b;
    border: 1px solid #fff;
    border-radius: 5px;
    font-size: 20px;
    padding: 5px;
    cursor: pointer;
  }
}
</style>
