<template>
  <div class="bg-main p-4 relative">
    <h3 class="text-2xl mb-2">
      <span class="text-3xl font-bold">{{ player.name }}</span>
      <br/>
      {{ player.lastname }}
    </h3>
    <p class="text-xl">{{ player.height }}</p>
    <span class="text-4xl font-bold absolute right-0 bottom-0 p-4">{{ player.position }}</span>
  </div>
</template>

<script>
export default {
  name: 'PlayerComponent',
  props: [ 'player' ]
}
</script>

<style>
</style>