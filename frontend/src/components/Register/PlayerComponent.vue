<template>
  <div class="aspect-square bg-main">
    <h3>Imię i nazwisko</h3>
    <input @input="passData()" v-model="player.name" id="name" name="name" type="text" pattern="[a-z_0-9-]{3,24}" maxlength="24" minlength="3" required>
    <h3>Wiek</h3>
    <input @input="passData()" v-model="player.age" id="age" name="age" type="number" pattern="[0-9]{1,2}" maxlength="2" minlength="2" required>
  </div>
</template>

<script>
export default {
  name: "PlayerComponent",
  data() {
    return {
      player: {
        name: null,
        age: null,
      }
    }
  },
  methods: {
    passData() {
      this.$emit('passPlayer', this.player);
    }
  }
}
</script>

<style scoped>

</style>