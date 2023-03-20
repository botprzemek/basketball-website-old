<template>
      <main class="z-10 w-screen h-screen relative grid place-content-center select-none">
        <section class="grid place-items-center overflow-hidden">
          <img src="@/assets/logo.svg" height="230" width="230" alt="Logo">
          <h1 class="heading -translate-y-10 opacity-0 transform-gpu transition-all ease-out duration-700 text-white font-bold text-6xl text-center uppercase pt-10 mb-1">Knury Knurów</h1>
          <p class="description opacity-0 transition-all ease-out duration-1000 rounded-xl backdrop-blur-md bg-white/10 text-white text-md text-center mb-4 py-2 w-full">Strona jest w trakcie tworzenia.</p>
          <a href="https://zrzutka.knuryknurow.pl/" target="_blank" class="button scale-0 opacity-0 transform-gpu transition-all ease-out duration-1000 backdrop-blur-md bg-white/10 py-2 px-3 rounded-full flex col-auto items-center w-fit">
            <box-icon class="aspect-square fill-main border-b-0" type="solid" name="heart" size="sm"></box-icon><p class="mt-0.5 ml-1.5">Wesprzyj nas</p>
          </a>
        </section>
      </main>
</template>

<script>
import 'boxicons';

export default {
  name: 'HomeComponent',
  methods: {
    animations(heading, description, button) {
      setTimeout(()=> document.body.querySelector(`.${heading}`).classList.remove('-translate-y-10', 'opacity-0'), 50);
      setTimeout(()=> document.body.querySelector(`.${description}`).classList.remove('scale-0', 'opacity-0'), 750);
      setTimeout(()=> document.body.querySelector(`.${button}`).classList.remove('scale-0', 'opacity-0'), 1250);
    }
  },
  mounted() {
    this.animations('heading', 'description', 'button');
  }
}
</script>

<style>
</style>
