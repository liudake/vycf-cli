import Vue from 'vue';
import './common/less/index.less';
import App from './App';
import router from './router';
import store from './store';
import './common/js/rem';
import './common/js/filters';

//  关闭生产环境的调试信息
const isDebugMode = process.env.NODE_ENV !== 'production';
Vue.config.debug = isDebugMode;
Vue.config.devtools = isDebugMode;
Vue.config.productionTip = isDebugMode;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
