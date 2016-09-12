<template>
  <!-- begin left panel -->
  <div class="panel panel-default" style="margin-bottom:0;" id="jobPanel">
    <div class="panel-heading">
      <span class="ips-panel-title">任务列表</span>
    </div>
    <div class="panel-body" style="padding:10px;">
      <input type="text" v-model="filterName" name="message" placeholder="搜索任务" class="form-control" style="font-size:12px; margin-bottom:5px;">
      <div class="list-group" style="margin-bottom:0;" id="jobList">
        <a v-for="task in taskList | filterBy filterName in 'name'" href="#" class="list-group-item">{{task.name}}</a>
      </div>
    </div>
  </div> <!-- end left panel -->
</template>

<script>
module.exports = {
  data: function() {
    return {
      filterName: '',
      taskList: [
        {id:101, name:"每5分钟"},
        {id:101, name:"每15分钟"},
        {id:101, name:"每小时整点"},
        {id:101, name:"每小时25分"},
        {id:101, name:"每小时45分"},
        {id:101, name:"每日01时"},
        {id:101, name:"每日05时"}]
    }
  }
}
</script>