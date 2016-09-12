<template>
  <div class="container-fluid">
    <div class="row">    
      
      <!-- begin col-sm-3 -->
      <div class="col-sm-3 ips-col">
        <div is="JobNav"></div>
      </div> <!-- end col-sm-3 -->

      <!-- begin col-sm-9 -->
      <div class="col-sm-9 ips-col">
        <div is="JobDetail"></div>     
      </div> <!-- end col-sm-9 -->

    </div> <!-- end row -->
  </div> <!-- end container-fluid -->
</template>

<script>
import JobNav from './JobNav.vue';
import JobDetail from './JobDetail.vue';

module.exports = {
  components: {JobNav, JobDetail}
}
</script>