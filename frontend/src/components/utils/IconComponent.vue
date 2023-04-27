<template>
  <div
      class="nav-moved absolute left-0 bg-secd h-full grid place-content-center transform-gpu transition duration-700 ease-in-out -translate-x-[100.5%]">
    <span class="text-main font-bold px-3 whitespace-nowrap">{{ title }}</span>
  </div>
  <div class="w-full h-auto flex justify-center items-center my-1 py-1">
    <div class="aspect-square w-1/2 h-1/2 rounded-full">
      <img :src="require(`@/assets/icon/${icon}.svg`)" alt="Menu element icon" class="p-0.5 w-full h-full">
    </div>
  </div>
</template>

<script>
export default {
  name: "IconComponent",
  props: {
    title: String,
    icon: String,
  },
}
</script>

<style>
</style>