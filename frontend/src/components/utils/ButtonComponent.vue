<template>
  <router-link v-if="id===1" :class="`w-fit h-fit px-4 pt-2 pb-1.5 hover:cursor-pointer bg-${bgColor}`" :to="link">
    <p :class="`text-${textColor} font-${textWeight}`">{{ text }}</p>
  </router-link>
  <a v-else-if="id===2" :class="`w-fit h-fit px-4 pt-2 pb-1.5 hover:cursor-pointer bg-${bgColor}`" :href="link">
    <p :class="`text-${textColor} font-${textWeight}`">{{ text }}</p>
  </a>
  <div v-else-if="id===3" :class="`w-fit h-fit px-4 pt-2 pb-1.5 hover:cursor-pointer bg-${bgColor}`">
    <p :class="`text-${textColor} font-${textWeight}`">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    link: String,
    bgColor: String,
    text: String,
    textColor: String,
    textWeight: String,
    id: Number,
  },
}
</script>

<style>
</style>