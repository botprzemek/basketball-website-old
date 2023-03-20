<template>
  <main class="z-10 w-screen h-screen relative grid place-content-center select-none">
    <FormComponent />
  </main>
</template>

<script>
import FormComponent from '@/components/Register/FormComponent';

export default {
  name: 'RegisterComponent',
  components: {
    FormComponent,
  },
}
</script>

<style scoped>

</style>