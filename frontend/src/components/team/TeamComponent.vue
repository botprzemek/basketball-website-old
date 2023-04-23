<template>
  <main class="z-10 w-screen h relative grid place-content-center select-none">
    <ul v-if="loading === false" class="grid grid-cols-4 gap-4">
      <li v-for="player in players" :key="player.name">
        <PlayerComponent :player="player" :loading="loading" />
      </li>
    </ul>
  </main>
</template>

<script>
import PlayerComponent from "@/components/team/PlayerComponent.vue";
import { getData } from '@/methods/Get';

export default {
  name: 'TeamCompontent',
  components: {
    PlayerComponent,
  },
  data() {
    return {
      loading: true,
      players: {},
    }
  },
  beforeMount() {
    getData('players', async (callback) => {
      this.loading = true;
      this.players = await callback;
      this.loading = false;
    });
  }
}
</script>

<style scoped>

</style>