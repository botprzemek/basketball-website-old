<template>
  <section class="z-10 w-full h-full relative place-content-center select-none mx-4">
    <div class="mb-2 w-fit relative">
      <h1 class="header z-10 relative w-fit text-4xl font-bold">Nasz Zespół</h1>
    </div>
    <ul v-if="loading" class="grid place-content-center grid-cols-5 gap-4">
      <li v-for="i in 24" :key="i" class="z-10 w-full h-full p-4 bg-main relative">
        <h3 class="text-lg mb-2 opacity-0">
          <span class="text-md font-bold">Ładujący</span>
          <br/>
          Się
        </h3>
        <p class="text-xl opacity-0">Gracz</p>
        <span class="text-2xl font-bold absolute right-0 bottom-0 p-4 opacity-0">XL</span>
      </li>
    </ul>
    <ul v-else class="grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
      <li v-for="player in players" :key="player.name">
        <PlayerComponent :loading="loading" :player="player"/>
      </li>
    </ul>
  </section>
</template>

<script>
import PlayerComponent from "@/components/routes/team/PlayerComponent.vue";
import {getData} from '@/methods/Get';

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
    this.players = getData('players', async data => {
      this.players = await data;
      this.loading = false;
    });
  }
}
</script>

<style scoped>

</style>