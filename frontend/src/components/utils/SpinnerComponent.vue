<template>
  <aside class="z-50 fixed bottom-0 right-0 w-28 h-28 mb-24 mr-12 md:w-24 md:h-24 md:mb-8 md:mr-8">
    <router-link class="z-30 absolute w-full h-full" to="/eventy/streetball">
      <p class="opacity-0">Link do rejestracji</p>
    </router-link>
    <div class="w-full h-full relative bg-secd rounded-full">
      <img :src="require(`@/assets/spinner_arrow.svg`)" class="absolute inset-0" alt="Menu element icon">
      <img :src="require(`@/assets/spinner_text.svg`)" class="absolute inset-0 animate-spinner" alt="Menu element icon">
    </div>
  </aside>
</template>

<script setup>
</script>

<style>
</style>