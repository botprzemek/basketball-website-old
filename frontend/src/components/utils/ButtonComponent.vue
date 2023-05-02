<template>
  <router-link v-if="id===1" :class="`w-fit h-fit px-4 pt-2 pb-1.5 hover:cursor-pointer bg-${bgColor} text-${textSize}`" :to="link">
    <p :class="`text-${textColor} font-${textWeight}`">{{ text }}</p>
  </router-link>
  <a v-else-if="id===2" :class="`w-fit h-fit px-4 pt-2 pb-1.5 hover:cursor-pointer bg-${bgColor} text-${textSize}`" :href="link">
    <p :class="`text-${textColor} font-${textWeight}`">{{ text }}</p>
  </a>
  <div v-else-if="id===3" :class="`w-fit h-fit px-4 pt-2 pb-1.5 hover:cursor-pointer bg-${bgColor} text-${textSize}`">
    <p :class="`text-${textColor} font-${textWeight}`">{{ text }}</p>
  </div>
  <a v-else-if="id===4" :class="`w-fit h-fit px-4 pt-2 pb-1.5 hover:cursor-pointer bg-${bgColor} text-${textSize}`" :href="link" download>
    <p :class="`text-${textColor} font-${textWeight}`">{{ text }}</p>
  </a>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    link: String,
    bgColor: String,
    text: String,
    textSize: String,
    textColor: String,
    textWeight: String,
    id: Number,
  },
}
</script>

<style>
</style>