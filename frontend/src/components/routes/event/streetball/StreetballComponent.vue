<template>
  <section class="w-full h-full">
    <article class="w-full h-full grid">
      <h1 class="text-2xl sm:text-4xl font-bold mb-3">Knury Streetball 2023</h1>
      <p class="mb-3">
        Kliknij w link, aby dowiedzieć się więcej.
        Zapisanych drużyn: {{ categories }}
      </p>
      <section class="w-full h-fit grid place-items-end">
        <div class="w-full h-fit grid grid-flow-row sm:flex sm:flex-row gap-3">
          <router-link class="w-full sm:w-fit h-fit px-4 pt-2 pb-1.5 hover:cursor-pointer bg-secd text-lg sm:text-2xl text-center sm:text-left" to="/eventy/streetball/rejestracja">
            <p class="text-main font-bold">Rejestracja</p>
          </router-link>
          <a class="w-full sm:w-fit h-fit px-4 pt-2 pb-1.5 hover:cursor-pointer bg-secd text-lg sm:text-2xl text-center sm:text-left" href="/files/regulamin_knury_streetball_2023_1.pdf" download>
            <p class="text-main font-bold">Regulamin</p>
          </a>
          <a class="w-full sm:w-fit h-fit px-4 pt-2 pb-1.5 hover:cursor-pointer bg-secd text-lg sm:text-2xl text-center sm:text-left" href="/files/zgoda_knury_streetball_2023.pdf" download>
            <p class="text-main font-bold">Zgoda</p>
          </a>
        </div>
      </section>
    </article>
  </section>
</template>

<script>
import {getData} from "@/methods/Get";

export default {
  name: 'StreetballComponent',
  data() {
    return {
      categories: [0, 0, 0]
    }
  },
  beforeMount() {
    this.players = getData('teams/amount', async data => {
      this.categories = data;
    });
  }
}
</script>

<style>
</style>