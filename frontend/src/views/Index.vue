<template>
  <div class="main">
    <player-counter />
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import PlayerCounter from "./../components/PlayerCounter.vue";
import Footer from "./../components/layout/Footer.vue";

@Component({
  components: {
    PlayerCounter,
    Footer
  }
})
export default class Index extends Vue {}
</script>
<style lang="scss" scoped>
.main {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>