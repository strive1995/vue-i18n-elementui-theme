<template>
  <div id="app">
    <router-view/>
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-member"></span>
        <span class="mui-tab-label">会员</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-shopcart">
          <span class="mui-badge">{{num}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">查找</span>
      </a>
    </nav>
  </div>
</template>

<script>

import Connect from './components/commons/connect.js';
export default {
  name: "App",
  data() {
    return {
      num: 0,
    };
  }, created() {
        //这里this
        Connect.$on('addCart', (num) => { //接受emit传递的参数
            //这里的this
            //箭头函数的this不再多变、其是根据声明的所在的function内部的this所绑定的，
            //逐级向上绑定function中的this
            this.num += num;

        });
    }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
