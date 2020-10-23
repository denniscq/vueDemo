import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state:{
    count: 0,
  },
  mutations:{
    increment(a, n){
      a.count += n
    }
  },
  actions: {
    increment({state}){
      setTimeout(() => {
        state.count ++
      }, 2000);
    }
  },
  getters:{
    doubleCount(state){
      return state * 2
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
