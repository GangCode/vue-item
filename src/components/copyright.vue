<template>
  <div :style="{textAlign:'center', fontSize: '14px', marginTop:top+'px'}">Large Screen Presentation System  &copy; BOCO</div>
</template>

<script>

export default {
  data() {
    return {
      top: 30
    }
  },

  ready() {
    let h = window.innerHeight || document.documentElement.clientHeight;
    this.top = h - 90;
  }
}

</script>