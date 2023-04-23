<template>
  <aside class="fixed bottom-0 right-0 w-20 h-20 mb-4 mr-4">
    <router-link to="./eventy" class="z-30 absolute w-full h-full"></router-link>
    <div class="z-20 w-full h-full relative bg-secd rounded-full">
      <img :src="require(`@/assets/spinner_arrow.svg`)" class="absolute inset-0" alt="Menu element icon">
      <img :src="require(`@/assets/spinner_text.svg`)" class="absolute inset-0 animate-spinner" alt="Menu element icon">
    </div>
  </aside>
</template>

<script>
export default {

}
</script>

<style>
</style>