import Vue from 'vue'
import App from './App.vue'

// use store in app by adding it to root vue instance
import { store } from "./store/store";

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
