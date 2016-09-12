<template>
  <div class="panel panel-default" style="margin-bottom:0;" id="indicatorPanel">
    <div class="panel-heading">
      <span class="ips-panel-title">指标列表</span>
    </div>
    <div class="panel-body" style="padding:10px;">
      <input type="search" name="message" placeholder="按指标名称或指标ID查询" class="form-control" style="font-size:12px; margin-bottom:5px;" v-model="filterName">
      <div class="list-group" style="margin-bottom:0;" id="indicatorList">
        <a v-for="item in indicatorList | filterBy filterName in 'name'" href="#" class="list-group-item">{{item.name}}</a>
      </div>
    </div>
  </div> <!-- end left panel -->
</template>

<script>

export default {
  data() {
    return {
      filterName: "",
      indicatorList: [
        {id:101, name:"用户数-全网-1小时"},
        {id:102, name:"流量-区域-5分钟"},
        {id:103, name:"话务量-全网-1小时"},
        {id:104, name:"流量-全网-1小时"},
        {id:105, name:"用户数-区域-5分钟"},
        {id:106, name:"业务大类-区域-5分钟"},
        {id:107, name:"业务小类-区域-5分钟"},
        {id:108, name:"用户数-小区-5分钟"},
        {id:109, name:"话务量-小区-5分钟"}
      ]
    }
  },

  ready() {

  }
}

</script>