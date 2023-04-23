<template>
  <section class="z-10 w-screen relative select-none mx-4">
    <div class="text-3xl font-bold mt-8 mb-2 w-fit relative">
      <h1 class="header z-10 relative w-fit opacity-0">Nasz Zespół</h1>
      <div class="pseudo z-20 absolute bg-secd w-[150%] h-full inset-0 -left-[25%] transform-gpu transition duration-1000 ease-in-out -translate-x-[40vw] origin-right"></div>
    </div>
    <ul v-if="loading" class="grid place-content-center grid-cols-6 gap-4">
      <li class="z-10 w-full h-full p-4 bg-main relative" v-for="i in 24" :key="i">
<!--        <div class="pseudo-player z-20 absolute w-full h-full bg-main left-0 top-0 transform-gpu transition duration-[500ms] ease-in-out scale-0 origin-top-left"></div>-->
        <h3 class="text-lg mb-2 opacity-0">
          <span class="text-md font-bold">Ładujący</span>
          <br/>
          Się
        </h3>
        <p class="text-xl opacity-0">Gracz</p>
        <span class="text-2xl font-bold absolute right-0 bottom-0 p-4 opacity-0">XL</span>
      </li>
    </ul>
    <ul v-else class="grid place-content-center grid-cols-6 gap-4">
      <li v-for="player in players" :key="player.name">
        <PlayerComponent :player="player" :loading="loading" />
      </li>
    </ul>
  </section>
</template>

<script>
import PlayerComponent from "@/components/routes/team/PlayerComponent.vue";
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
  mounted() {
    document.querySelector('.pseudo').classList.remove('-translate-x-[40vw]', 'scale-x-50');
    setTimeout(() => {
      document.querySelector('.pseudo').classList.add('-translate-x-[60vw]');
    }, 1000);
    setTimeout(() => {
      document.querySelector('.pseudo').classList.remove('-translate-x-[60vw]');
      document.querySelector('.pseudo').classList.add('-translate-x-[60vw]', 'scale-x-20');
      document.querySelector('.header').classList.remove('opacity-0');
      document.querySelector('.pseudo-player').classList.remove('scale-0');
    }, 1500);
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