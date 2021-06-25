import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import ApolloClient from 'apollo-boost'
import VueApollo from "vue-apollo"

import App from './App.vue'
import router from './router'
import store from "@/store";

import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'

Vue.use(BootstrapVue)
Vue.use(VueApollo)
Vue.config.productionTip = false

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'http://localhost:5000/graphql'
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  router,
  BootstrapVue,
  apolloProvider,
  store,
  render: h => h(App)
}).$mount('#app')
