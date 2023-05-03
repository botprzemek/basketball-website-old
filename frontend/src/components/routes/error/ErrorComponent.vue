<template>
  <section class="w-full h-full">
    <article class="w-full h-full grid">
      <h1 class="text-2xl sm:text-4xl font-bold">Wystąpił Błąd!</h1>
      <p>
        Za <span class="timer">{{ time }}</span> sekund/y zostaniesz przeniesiony/a na stronę główną.
      </p>
    </article>
  </section>
</template>

<script>
export default {
  name: 'ErrorComponent',
  data() {
    return {
      time: 15,
    }
  },
  mounted() {
    this.time = 15;
    let interval = setInterval(() => {
      if (this.time - 1 !== 0) {
        return this.time--;
      }
      else {
        clearInterval(interval);
        this.$router.push('/');
        this.time = 15;
      }
    }, 1000);
  },
}
</script>

<style>
</style>