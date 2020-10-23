import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import VueI18n from 'vue-i18n'
import enUS from '../locale/enUS'
import zhCN from '../locale/zhCN'
import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Menu,
  Form,
  Input,
  Select,
  ConfigProvider,
  Dropdown,
  DatePicker
} from "ant-design-vue";
import Authorized from './components/Authorized';
import Auth from './directives/auth'
import queryString from 'query-string'

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.component("Authorized", Authorized);
Vue.use(Auth);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);
Vue.use(ConfigProvider);
Vue.use(Dropdown);
Vue.use(DatePicker);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'zhCN',
  //  () => {
  //   console.log('----locale------')
  //   console.log(location.search)
  //   debugger
  //   return queryString.parse(location.search).locale || 'zhCN'
  // },
  messages: {
    zhCN: { message: zhCN },
    enUS: { message: enUS }
  }
})

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1154049_w87h4oeytph.js'
})
Vue.component('IconFont', IconFont)

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
