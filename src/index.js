require("./components/common.css");

import Vue from 'vue';
import VueRouter from 'vue-router';
import Navbar from './components/navbar/Navbar.vue';
import { configRouter } from './router';

// install router
Vue.use(VueRouter)

// create router
const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

// configure router
configRouter(router)

// boostrap the app
const App = Vue.extend({
  data: function(){
    return {
      logined: false
    }
  },
  components: {
    Navbar
  }
})
router.start(App, '#app')

