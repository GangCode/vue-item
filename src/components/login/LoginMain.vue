<template>
  <div class="ips-login-panel">
    <div class="ips-login-title">LSP-ADMIN</div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="username" v-model="username">
    </div>
    <div class="form-group">
      <input type="password" class="form-control" placeholder="password" v-model="password" @keyup.enter="login()" @change="clearmsg()">
    </div>
    <div class="from-group">
      <button type="submit" @click="login()" class="btn btn-primary btn-lg btn-block">Login</button>
      <div style="padding-top:10px; font-size:14px; text-align:center;" 
        class="text-danger"
        :class="{'shake': errmsg!=''}" >{{errmsg}}</div>
    </div>
  </div>
</template>

<script>
import userService from "./LoginService"

module.exports = {
  data: function() {
    return {      
      username: 'admin',
      password: '',
      errmsg: ''
    }
  },

  methods: {
    clearmsg: function() {
      this.errmsg = ''; 
    },
    login: function() {
      var self = this;
      userService.login(this.username, this.password)
        .then(
          function(){                  
            self.$root.logined = true;
            self.$router.go('/home');
          }, 
          function(msg){
            self.errmsg = msg;
          }
        );
    }
  }
}
</script>