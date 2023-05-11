<template>
  <section v-if="playerData != null" class="z-10 w-screen h-screen relative grid place-content-center select-none">
    <div class="bg-main p-4 relative">
      <h3 class="text-lg mb-2">
        <span class="text-md font-bold">{{ playerData.name }}</span>
        <br/>
        {{ playerData.lastname }}
      </h3>
      <p class="text-xl">{{ playerData.height }}</p>
      <span class="text-2xl font-bold absolute right-0 bottom-0 p-4">{{ playerData.position }}</span>
    </div>
  </section>
  <div v-else class="z-10 w-full h-full bg-main p-4 relative" @click="redirect" @mouseover="$event.target.style.cursor = 'pointer'">
    <h3 class="text-lg mb-2">
      <span class="text-md font-bold">{{ player.name }}</span>
      <br/>
      {{ player.lastname }}
    </h3>
    <p class="text-xl">{{ player.height }}</p>
    <span class="text-2xl font-bold absolute right-0 bottom-0 p-4">{{ player.position }}</span>
  </div>
</template>

<script>
import { getData } from '@/methods/Get.js';

export default {
  name: 'PlayerComponent',
  props: [ 'player' ],
  data() {
    return {
      loading: true,
      playerData: null,
    }
  },
  methods: {
    redirect(){
      window.location.href = `${window.location.href}/${this.player.name} ${this.player.lastname}`;
    },
    async getData(player) {
      if (typeof player === 'string') await getData(`players/fullname/${player}`, async (callback) => {
        if (callback.message !== 'Failed to fetch') {
          this.playerData = await callback;
          this.loading = false;
          return;
        }
        window.location.href = '/';
      });
    }
  },
  beforeMount() {
    window.top.document.title = window.top.document.title.replace('Gracz', `${this.player}`);
    this.getData(this.player);
  }
}
</script>

<style>
</style>