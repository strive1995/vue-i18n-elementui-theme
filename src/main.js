// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import i18n from './i18n/i18n';
import $ from 'jquery';
import "../plugins/ztree/jquery.ztree.all.js"   
import '../plugins/ztree/css/zTreeStyle/zTreeStyle.css';
import "./assets/css/index.css";



import store from '@/store/index'
import '@/assets/css/theme/0000ff/index.css';
import '@/assets/css/theme/00a597/index.css';
import '@/assets/css/theme/02abfd/index.css';
import '@/assets/css/theme/20a0ff/index.css';
import '@/assets/css/theme/800080/index.css';
import '@/assets/css/theme/fa4f52/index.css';
import '@/assets/css/theme/ff0000/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
