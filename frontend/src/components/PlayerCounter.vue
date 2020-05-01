<template>
  <div v-if="isLoaded" class="wrapper">
    <div v-if="isAlive">
      <h2>🦀 {{ $t("counter.is_alive") }} 🦀</h2>
      <p>{{ $t("counter.currently_playing", { amount: currentPlayers }) }}</p>
    </div>
    <div v-else>🦀 {{ $t("counter.is_dead") }} 🦀</div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class PlayerCounter extends Vue {
  private isAlive?: boolean;
  private currentPlayers?: number;
  private record?: number;

  private isLoaded = false;

  private mounted() {
    this.getPlayerCount().then(({ data }) => {
      this.isLoaded = true;
      this.currentPlayers = data.playerCount;
      this.record = data.record;
      this.isAlive = data.playerCount > 0;
    });
  }

  private getPlayerCount(): Promise<any> {
    return this.axios.get("/api/status");
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
