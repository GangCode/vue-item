<template>
<div class="panel panel-default">
  <div class="panel-heading">
    <span class="ips-panel-title">指标名称：业务量-区域-5分钟</span>            
  </div>
  <div class="panel-body">
    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation" class="active"><a href="#info" aria-controls="info" role="tab" data-toggle="tab">基本信息</a></li>
      <li role="presentation"><a href="#field" aria-controls="field" role="tab" data-toggle="tab">字段</a></li>
      <li role="presentation"><a href="#sql" aria-controls="sql" role="tab" data-toggle="tab">SQL</a></li>
      <li role="presentation"><a href="#redis" aria-controls="redis" role="tab" data-toggle="tab">Redis</a></li>
    </ul>
    <div class="tab-content" style="padding-top:10px;">
      <div role="tabpanel" class="tab-pane active" id="info">
        <table class="ips-table">
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>指标ID</td>
              <td>10203</td>
            </tr>
            <tr>
              <td>指标名称</td>
              <td>业务流量-区域-5分钟</td>
            </tr>
            <tr>
              <td>网元粒度</td>
              <td>区域</td>
            </tr>
            <tr>
              <td>时间粒度</td>
              <td>5分钟</td>
            </tr>
            <tr>
              <td>指标时延</td>
              <td>&lt;5分钟</td>
            </tr>
            <tr>
              <td>指标单位</td>
              <td>MB</td>
            </tr>
            <tr>
              <td>来源厂商</td>
              <td>东信</td>
            </tr>
            <tr>
              <td>来源系统</td>
              <td>集中性能</td>
            </tr>
            <tr>
              <td>接口方式</td>
              <td>WS+FTP,DB,REST</td>
            </tr>
            <tr>
              <td>处理方式</td>
              <td>原始数据</td>
            </tr>
          </tbody>
        </table>
      </div> <!-- end panel#info -->

      <div role="tabpanel" class="tab-pane" id="field">
        <table class="ips-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Label</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>START_TIME</td>
              <td>指标时间</td>
            </tr>
            <tr>
              <td>APP_MINOR</td>
              <td>业务小类</td>
            </tr>
            <tr>
              <td>TRAFF_2G</td>
              <td>2G流量</td>
            </tr>
            <tr>
              <td>TRAFF_3G</td>
              <td>3G流量</td>
            </tr>
            <tr>
              <td>TRAFF_4G</td>
              <td>4G流量</td>
            </tr>
          </tbody>
        </table>
      </div> <!-- end panel#field -->

      <div role="tabpanel" class="tab-pane" id="sql">
        <div>
          <span class="ips-panel-title">SQL-1</span>                   
          <pre>select area_name from t_area</pre>    
        </div>
        <div>
          <span class="ips-panel-title">SQL-2</span>
          <pre>select app_name from ["即时通信", "网页浏览", "应用商店"]</pre>    
        </div>
        <div>
          <span class="ips-panel-title">SQL-3</span>
          <pre>
          select start_time, traff_2g, traff_3g, traff_4g
            from t_kpi
           where area_name = #{area_name}
             and app_major = #{app_name}
             and start_time = ${start_time}
          </pre>    
        </div>
      </div> <!-- end panel#sql -->

      <div role="tabpanel" class="tab-pane" id="redis">
        <ol class="ips-nav-path">
          <li><a href="#"><span class="val">业务流量</span></a></li>
          <li><a href="#">[<span class="key">AREA_NAME</span>=<span class="val">迪士尼</span>]</a></li>
          <li class="active">[<span class="key">APP_MAJOR</span>=<span class="val">应用商店</span>]</li>
        </ol>
        <div class="pull-right" style="margin-bottom:10px;">
          <button type="button" class="btn btn-default">
            <span class="glyphicon glyphicon-refresh" style="margin-right:3px;"></span>
            query
          </button>
          <button type="submit" class="btn btn-default">
            <span class="glyphicon glyphicon-save" style="margin-right:3px;"></span>
            save
          </button>
          <button type="button" class="btn btn-success">
            <span class="glyphicon glyphicon-lock" style="margin-right:3px;"></span>
            lock
          </button>
        </div>

        <table class="ips-table">
          <tr>
            <th>START_TIME</th>
            <th>APP_MINOR</th>
            <th>TRAFF_2G</th>
            <th>TRAFF_3G</th>
            <th>TRAFF_4G</th>
          </tr>
          <tr>
            <td>2016-06-18 00:09:00</td>
            <td>App Store</td>
            <td>100</td>
            <td>200</td>
            <td>300</td>
          </tr>
          <tr>
            <td>2016-06-18 00:09:00</td>
            <td>小米商店</td>
            <td>100</td>
            <td>200</td>
            <td>300</td>
          </tr>
          <tr>
            <td>2016-06-18 00:09:00</td>
            <td>百度应用市场</td>
            <td>100</td>
            <td>200</td>
            <td>300</td>
          </tr>
          <tr>
            <td>2016-06-18 00:09:00</td>
            <td>360应用市场</td>
            <td>100</td>
            <td>200</td>
            <td>300</td>
          </tr>
          <tr>
            <td>2016-06-18 00:09:00</td>
            <td>豌豆荚</td>
            <td>100</td>
            <td>200</td>
            <td>300</td>
          </tr>                  
        </table>
      </div> <!-- end panel#redis -->      
    </div> <!-- end tab-content -->
  </div>
</div> <!-- end right panel -->
</template>

<script>
  
</script>