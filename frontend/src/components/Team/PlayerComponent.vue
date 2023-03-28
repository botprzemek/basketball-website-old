<template>
  <div class="bg-secd/5 aspect-square p-2 relative">
    <h3 class="text-2xl">
      <span class="font-bold">{{ player.name }}</span>
      <br/>
      {{ player.lastname }}
    </h3>
    <p>{{ player.height }}</p>
    <span class="absolute text-4xl right-0 bottom-0 p-4">{{ player.position }}</span>
  </div>
</template>

<script>
export default {
  name: 'PlayerComponent',
  props: [
      'player',
  ]
}
</script>

<style scoped>

</style>