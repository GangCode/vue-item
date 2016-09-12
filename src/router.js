import userService from "./components/login/LoginService.js"

export function configRouter (router) {

  router.map({
    // 登录
    '/login': {
      component: require('./components/login/LoginMain.vue')
    },
    // not found handler
    '*': {
      component: require('./components/copyright.vue')
    },
    'job': {
      component: require('./components/job/JobMain.vue')
    },
    'indicator': {
      component: require('./components/indicator/IndMain.vue')
    }
  })

  router.beforeEach((transition) => {
    if(transition.to.path != '/login') {      
      if(userService.isLogin()) {
        router.app.logined = true;
        return true;
      } else {
        transition.redirect("/login");
      }
    }
    return true;
  })
}
