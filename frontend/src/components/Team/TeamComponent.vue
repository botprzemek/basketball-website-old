<template>
  <main class="z-10 w-screen h relative grid place-content-center select-none">
    <ul class="grid grid-cols-4 gap-4">
      <li class="" v-for="player in players" :key="player.name">
        <PlayerComponent :player="player" />
      </li>
    </ul>
  </main>
</template>

<script>
import PlayerComponent from "@/components/Team/PlayerComponent.vue";
import { getData } from '@/methods/Get';

export default {
  name: 'TeamCompontent',
  components: {
    PlayerComponent,
  },
  data() {
    return {
      players: {},
    }
  },
  beforeMount() {
    getData('players', async (callback) => this.players = await callback);
  }
}
</script>

<style scoped>

</style>