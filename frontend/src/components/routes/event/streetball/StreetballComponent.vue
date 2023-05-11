<template>
  <section class="w-full h-full">
    <article class="w-full h-full grid mb-48">
      <h1 class="text-2xl sm:text-4xl font-bold mb-3">Knury Streetball 2023</h1>
      <p class="mb-3">
        Ostatnio zapisana drużyna
      </p>
      <div class="w-full h-fit px-3 py-2 bg-main grid place-content-center mb-3">
        <p class="text-lg font-bold">
          {{ latest }}
        </p>
      </div>
      <p class="mb-3">
        Ilość zapisanych drużyn w kategoriach
      </p>
      <ul class="grid grid-flow-row sm:grid-flow-col gap-3 mb-3">
        <li v-for="i in 3" :key="i" class="w-full h-fit px-3 py-2 bg-main grid place-content-center">
          <p class="text-lg font-bold">
            {{ categories.name[i-1] }} {{ categories.amount[i-1] }}
          </p>
        </li>
      </ul>
      <p class="mb-3">
        Kliknij w link, aby dowiedzieć się więcej.
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
import {getData} from '@/methods/Get';

export default {
  name: 'StreetballComponent',
  data() {
    return {
      loading: true,
      latest: 'Brak',
      categories: {
        name: ['Szkolna', 'Otwarta', 'Damska'],
        amount: [0, 0, 0]
      }
    }
  },
  beforeMount() {
    getData('events/streetball/teams/name/latest', data => {
      this.latest = data.name;
    });
    getData('events/streetball/teams/amount/categories', data => {
      this.categories.amount = data.amount;
      this.loading = false;
    });
  }
}
</script>

<style>
</style>