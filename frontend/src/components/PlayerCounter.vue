<template>
  <div class="wrapper">
    <div v-if="isLoaded">
      <div class="player-counter" v-if="isAlive">
        <h2>🦀 {{ $t("counter.is_alive") }} 🦀</h2>
        <p>{{ $t("counter.currently_playing", { amount: currentPlayers }) }}</p>
        <small>{{ $t("counter.record", { record }) }}</small>
      </div>
      <div v-else>🦀 {{ $t("counter.is_dead") }} 🦀</div>
    </div>
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
    this.update();

    setInterval(() => {
      this.update();
    }, 10000);
  }

  private update() {
    this.getPlayerCount().then(({ data }) => {
      this.currentPlayers = data.playerCount;
      this.record = data.record;
      this.isAlive = data.playerCount > 0;
      this.isLoaded = true;
      this.$forceUpdate();
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

  .player-counter {
    &:after {
      background: url("/assets/arena-brawl.png");
      background-position: center center;
      background-repeat: no-repeat;
      content: "";
      opacity: 0.2;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1;
    }
  }
}
</style>
