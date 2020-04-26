<template>
  <div v-if="isLoaded" class="wrapper">
    <div v-if="isAlive">
      <h2>🦀 Arena Brawl is still alive 🦀</h2>
      <p>There are currently {{ currentPlayers }} playing the dead game!</p>
    </div>
    <div v-else>🦀 Arena Brawl is actually dead 🦀</div>
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
    return this.axios.get("/status");
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
