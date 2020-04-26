<template>
  <footer>
    {{ $t("footer.made_with") }}
    <span class="hearth">❤</span>
    {{ $t("footer.by") }} Nivyox
    <span class="subtle">(Niek van Gogh)</span>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Footer extends Vue {}
</script>
<style lang="scss" scoped>
footer {
  padding: 5px;

  .hearth {
    color: red;
  }

  .subtle {
    color: gray;
    opacity: 0.7;
  }
}
</style>
