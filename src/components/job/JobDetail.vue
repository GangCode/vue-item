<template>
  <div class="panel panel-default" style="margin-bottom:10px;">
    <div class="panel-heading">
      <span class="ips-panel-title">任务名称：{{taskName}}</span>
    </div>
    <div class="panel-body" style="padding:10px;">
      <!-- begin job base info -->
      <div class="row" style="margin-bottom:10px;">
        <div class="col-xs-6">
          <div class="input-group">
            <span class="input-group-addon">任务名称</span>
            <input type="text" class="form-control" value="{{taskName}}">
            <input type="hidden" class="form-control" value="{{taskId}}">
          </div>
        </div>
        <div class="col-xs-6">
          <div class="input-group">
            <span class="input-group-addon">Cron</span>
            <input type="text" class="form-control" value="{{taskCron}}">
          </div>
        </div>
      </div> <!-- end job base info -->
      <div class="row"> 
        <div class="col-sm-6">
          <!-- begin selected indicator panel -->
          <div class="panel panel-default" style="margin-bottom:10px;" id="selectedPanel"> 
            <div class="panel-heading">
                <span class="ips-panel-title">已选指标({{selectedIndicators.length}})</span>
                <input v-model="selFilterName" class="ips-panel-search" type="text" placeholder="搜索指标"  >
            </div>
            <div class="panel-body" style="padding:10px">
              <ul class="list-group" id="selectedList">
                <li v-for="item in selectedIndicators | filterBy selFilterName in 'name'" 
                    class="list-group-item lsp-list-item-opt">
                  <span class="item-label">{{item.name}}</span>
                  <span @click="preRemoveSelectedItem(item)" class="opt-icon icon-remove"
                    :class="{'icon-hide':item.removeFlag}"></span>
                  <div v-if="item.removeFlag" transition="opt-group" class="opt-group">
                    <span class="opt-btn btn-remove" @click="doRemoveSelectedItem(item)">删除</span>
                    <span class="opt-btn btn-cancel" @click="undoRemoveSelectedItem(item)">取消</span>
                  </div>
                </li>
              </ul>
            </div> <!-- end selected indicator panel body -->
          </div> <!-- end selected indicator panel -->
        </div> <!-- end selected indicator col -->
        <div class="col-sm-6">
          <!-- begin unselected indicator panel -->
          <div class="panel panel-default" style="margin-bottom:10px;" id="unselectedPanel"> 
            <div class="panel-heading">
                <span class="ips-panel-title">待选指标({{unselectedIndicators.length}})</span>
                <input v-model="unselFilterName" class="ips-panel-search" type="text" placeholder="搜索指标"  >
            </div>
            <div class="panel-body" style="padding:10px;">
              <ul class="list-group" id="unselectedList">
                <li v-for="item in unselectedIndicators | filterBy unselFilterName in 'name'" class="list-group-item lsp-list-item-opt">
                  <span class="item-label">{{item.name}}</span>
                  <span @click="appendSelectedItem(item)" class="opt-icon icon-add"></span>
                </li>
              </ul>
            </div>
          </div> <!-- end unselected indicator panel -->
        </div>
      </div> <!--end indicator row -->
      <!-- begin button group -->
      <div class="text-center">
        <button class="btn btn-default">
          <span class="glyphicon glyphicon-ok" style="margin-right:3px;"></span>
          save
        </button>
        <button class="btn btn-default">
          <span class="glyphicon glyphicon-remove" style="margin-right:3px;"></span>
          remove
        </button>
      </div> <!-- end button group -->      
    </div> <!-- end right panel body -->
  </div> <!-- end right panel -->
</template>

<style>
.lsp-list-item-opt {
  padding: 0px 15px;
  overflow: hidden;
  transition: all .7s ease;
}
.lsp-list-item-opt .item-label {
  display: inline-block;
  margin-top: 10px;
}
.lsp-list-item-opt .opt-group {
  display: inline-block;
  position: relative;
  float: right;
  right: -50px;
  top: 0px;
  width: 80px;
  margin: 0px;
  vertical-align: middle;
  transition: right 0.6s ease-in-out;
}
.lsp-list-item-opt .opt-group-enter {
  right: -150px;
}
.lsp-list-item-opt .opt-group-leave {
  right: -150px;
}
.lsp-list-item-opt .opt-btn {
  display: inline-block;  
  float: left;
  width: 40px;
  height: 35px;
  text-align: center;
  padding-top: 10px;
  cursor: pointer;
  box-sizing: border-box;
}
.lsp-list-item-opt .btn-remove {
  color: #fff;
  background-color: #f00;
}
.lsp-list-item-opt .btn-cancel {
  color: #fff;
  background-color: #b2b2b2;
}
.lsp-list-item-opt .opt-icon {
  display: block;
  float: right;
  width: 24px;
  height: 24px;
  margin: 6px;
  cursor: pointer;
}
.lsp-list-item-opt .icon-hide {
  transform: rotate(-90deg);
}
.lsp-list-item-opt .icon-add {  
  background-image: url(img/add_24.png);
  background-repeat: no-repeat;
}
.lsp-list-item-opt .icon-remove {  
  background-image: url(img/remove_24.png);
  background-repeat: no-repeat;
  transition: all 0.5s ease;
}
</style>

<script>
module.exports = {
  data: function() {
    return {
      selFilterName: '',
      unselFilterName: '',
      removeSelectedItemFlag: false,
      removeUnselectedItemFlag: false,
      taskId: 101,
      taskName: "每小时15分",
      taskCron: "0 /15 * * * ?",
      selectedIndicators: [
        {id:101, name:"2G流量-全网-24小时", removeFlag:false},
        {id:102, name:"3G流量-全网-24小时", removeFlag:false},
        {id:103, name:"4G流量-全网-24小时", removeFlag:false}
      ],
      unselectedIndicators: [
        {id:104, name:"2G流量-区域-24小时", removeFlag:false},
        {id:105, name:"3G流量-区域-24小时", removeFlag:false},
        {id:106, name:"4G流量-区域-24小时", removeFlag:false},
        {id:107, name:"业务大类-区域", removeFlag:false},
        {id:108, name:"业务小类-区域", removeFlag:false},
        {id:109, name:"性能告警-区域", removeFlag:false},
        {id:110, name:"设备告警-区域", removeFlag:false},
        {id:111, name:"投诉工单-区域", removeFlag:false},
        {id:112, name:"终端分布-区域", removeFlag:false},
        {id:113, name:"2G话务量-区域-24小时", removeFlag:false},
        {id:114, name:"3G话务量-区域-24小时", removeFlag:false},
        {id:115, name:"2G无线接通率-区域-24小时", removeFlag:false}
      ]
    }
  },

  methods: {
    preRemoveSelectedItem: function(item) {
      item.removeFlag = true;
    },

    doRemoveSelectedItem: function(item) {
      this.selectedIndicators.$remove(item);
      this.unselectedIndicators.push(item);
      item.removeFlag = false;
    },

    undoRemoveSelectedItem: function(item) {
      item.removeFlag = false;
    },

    appendSelectedItem: function(item) {
      item.removeFlag = false;
      this.unselectedIndicators.$remove(item);
      this.selectedIndicators.push(item);
    }
  },

  ready: function() {
    initHeight();  
  }
}

/**
 * 初始化模块页面高度
 * @return {[type]} [description]
 */
function initHeight() {
  var h = window.innerHeight || document.documentElement.clientHeight;
  $("#selectedPanel").css("height", (h-220)+"px");
  $("#unselectedPanel").css("height", (h-220)+"px");
  
  var list1 = $("#selectedList");
  var h1 = list1.prop("clientHeight");
  if(h1 > 345) {
    list1.css({
      maxHeight: (h-300)+"px",
      overflowY: "scroll"
    });
  }

  var list2 = $("#unselectedList");
  var h2 = list2.prop("clientHeight");
  if(h2 > 345) {
    list2.css({
      maxHeight: (h-300)+"px",
      overflowY: "scroll"
    });
  } 
} 
</script>