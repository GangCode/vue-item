<template>
	<div class="panel panel-default" style="margin-bottom:10px;">
		<div class="panel-heading">
			<span class="job-panel-title" @click="delList">任务列表</span>
		</div>
		<table id="job_table"  class="table">
			<thead>
				<tr>
					<th>任务ID</th>
					<th>任务名称</th>
					<th>任务描述</th>
					<th>任务状态</th>
					<th>任务开始执行时间</th>
					<th>任务结束执行时间</th>
					<th>任务下次执行时间</th>
					<th >操作</th>
					<th>cron表达式</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in taskList">
					<td>{{item.id}}</td>
					<td>{{item.name}}</td>
					<td>{{item.content}}</td>
					<td>{{item.status}}</td>
					<td>{{item.begin_time}}</td>
					<td>{{item.end_time}}</td>
					<td>{{item.next_time}}</td>
					<td>{{item.cron}}</td>
					<td ></td>
					<td v-for="i in indexs">{{i}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<style></style>
<script>
var obj=module.exports = {
	  data:()=>{
	  	  return {
          taskList:[ 
            {id:100,name:"话务量-24",cron:"0.0.0.0.0",content:"话务量24小时",begin_time:"2016-25-06 15:00",end_time:'2016-25-06 16:00',next_time:'2016-25-06 17:00'},
            {id:100,name:"流量-24",cron:"0.0.0.0.0",content:"流量",begin_time:"2016-25-06 15:00",end_time:'2016-25-06 16:00',next_time:'2016-25-06 17:00'},
            {id:100,name:"退服基站-24",cron:"0.0.0.0.0",content:"退服基站",begin_time:"2016-25-06 15:00",end_time:'2016-25-06 16:00',next_time:'2016-25-06 17:00'},
            {id:100,name:"无线接通率-24",cron:"0.0.0.0.0",content:"无线接通率",begin_time:"2016-25-06 15:00",end_time:'2016-25-06 16:00',next_time:'2016-25-06 17:00'},
            {id:100,name:"无线掉话率-24",cron:"0.0.0.0.0",content:"无线掉话率",begin_time:"2016-25-06 15:00",end_time:'2016-25-06 16:00',next_time:'2016-25-06 17:00'},
            {id:100,name:"4G流量-24",cron:"0.0.0.0.0",content:"4G流量",begin_time:"2016-25-06 15:00",end_time:'2016-25-06 16:00',next_time:'2016-25-06 17:00'}
         ],
         indexs:5
       } 
	  },
      ready:()=>{
           initJobTable();
      },
      methods:{
       delList:function(){
           this.taskList.shift();
           this.indexs--;
       }
      }
};

     var initJobTable=()=>{
     $('#job_table').Tabledit({
        columns: {
        identifier: [0, 'id'],
        editable: [[1, 'nickname'], [2, 'firstname'], [3, 'lastname']]
    },
    buttons:{
        confirm: {
        class: 'btn btn-sm btn-danger',
        html: '确认'
    }
    }
});
     }
	
</script>