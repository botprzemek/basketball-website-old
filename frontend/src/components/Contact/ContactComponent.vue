<template>
  <main class="z-10 w-screen h-screen relative grid place-content-center select-none">
    <p>{{ contact.phone }}</p>
  </main>
</template>

<script>
import { getData } from '@/methods/Get';

export default {
  name: 'ContactComponent',
  data() {
    return {
      loading: true,
      contact: {
        phone: null,
      },
    }
  },
  beforeMount() {
    getData('webdata/contact', async (callback) => {
      this.loading = true;
      this.contact = await callback;
      this.loading = false;
    });
  }
}
</script>

<style>
</style>