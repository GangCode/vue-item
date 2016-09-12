<template>
  <nav class="ips-navbar navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">LSP-ADMIN</a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">数据管理<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#" v-link="{path:'/job'}">调度管理</a></li>
              <li><a href="#" v-link="{path:'/indicator'}" >指标管理</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">界面管理<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">场景管理</a></li>
              <li><a href="#">视图管理</a></li>
            </ul>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">            
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-user " style="padding-right:5px;"></span>admin<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#" @click="logout()">logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

require("./navbar.css");

import userService from "../login/LoginService.js";

module.exports = {
  methods: {
    logout: function() {
      userService.logout();
      this.$root.logined = false;
      this.$router.go('/login');
    }
  }
}

</script>