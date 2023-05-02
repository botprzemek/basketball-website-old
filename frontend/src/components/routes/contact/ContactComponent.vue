<template>
  <section v-if="loading" class="z-10 w-full h-fit relative grid place-content-center select-none">
    <p>Ładuję...</p>
  </section>
  <section v-else class="z-10 w-full h-fit relative grid place-content-center select-none">
    <p>{{ contact }}</p>
  </section>
</template>

<script>
import { getData } from '@/methods/Get';

export default {
  name: 'ContactComponent',
  data() {
    return {
      loading: true,
      contact: null,
    }
  },
  beforeMount() {
    getData('webdata/section/contact', async (callback) => {
      this.loading = true;
      this.contact = await callback;
      this.loading = false;
    });
  },
}
</script>

<style>
</style>