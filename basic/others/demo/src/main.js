import Vue from 'vue'
import App from './App.vue'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import ref from 'vue-ref'

Vue.config.productionTip = false

Vue.use(antd);
Vue.use(ref, { name: 'ant-ref' });
new Vue({
  render: h => h(App),
}).$mount('#app')
