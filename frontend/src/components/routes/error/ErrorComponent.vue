<template>
  <section class="flex flex-col items-center">
    <div class="text-3xl font-bold mt-8 mb-2 w-fit relative">
      <h1 class="header z-10 relative w-fit opacity-0">Wystąpił błąd</h1>
      <div class="pseudo z-20 absolute bg-secd w-[150%] h-full inset-0 -left-[25%] transform-gpu transition duration-1000 ease-in-out -translate-x-[40vw] origin-right"></div>
    </div>
    <article class="bg-shadow border-size-shadow border-shadow backdrop-blur-2xl shadow-shadow px-6 py-4 rounded-lg w-fit h-fit flex flex-col items-center">
      <p class="text-light text-md text-justify">
        Strona, której próbowałeś/aś wyszukać jest aktualnie <SpanGradient text="niedostępna!" weight="bold"/>
        Sprawdź adres strony, jeśli uważasz, że strona powinna działać, skontaktuj się nami na <SpanGradient text="naszym serwerze" weight="bold"/> discord.
        Aby Ciebie nie zatrzymywać, za <span class="timer">{{ time }}</span> sekund <SpanGradient text="zostaniesz przeniesiony/a" weight="bold"/> na stronę główną.
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
      if (this.time - 1 !== 0) this.time--;
      clearInterval(interval);
      this.$router.push('/');
      this.time = 15;
    }, 1000);
  },
}
</script>

<style>
</style>