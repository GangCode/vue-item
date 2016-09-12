<template>
  <div class="container-fluid">
    <div class="row">      
      <!-- begin col-sm-3 -->
      <div class="col-sm-3 ips-col">
        <div is="IndNav"></div>
      </div> <!-- end col-sm-3 -->
      <!-- begin col-sm-9 -->
      <div class="col-sm-9 ips-col">
        <div is="IndDetail"></div>     
      </div> <!-- end col-sm-9 -->
    </div> <!-- end row -->
  </div> <!-- end container-fluid -->  
</template>

<script>

import IndNav from "./IndNav.vue"
import IndDetail from "./IndDetail.vue"

export default {
  components: {
    IndNav,
    IndDetail
  }
}

</script>