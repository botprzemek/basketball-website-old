<template>
  <form class="grid">
    <h3>Nazwa drużyny</h3>
    <input v-model="teamData.team.teamname" id="teamname" name="teamname" type="text" pattern="[a-z_0-9-]{5,24}" maxlength="24" minlength="5" placeholder="Knurów Basket" required>
    <h3>Adres E-mail</h3>
    <input v-model="teamData.team.email" id="email" name="email" type="text" pattern="[a-z_0-9-]{3,24}" maxlength="24" minlength="3" placeholder="basket@knurow.pl" required>
    <h3>Kategoria</h3>
    <input v-model="teamData.team.category" value="0" id="category1" name="category1" type="radio" required>
    <label for="category1">Szkolna</label>
    <input v-model="teamData.team.category" value="1" id="category2" name="category2" type="radio" required>
    <label for="category1">Open</label>
    <input v-model="teamData.team.category" value="2" id="category3" name="category3" type="radio" required>
    <label for="category1">Damska</label>
    <h3>Gracze</h3>
    <section class="grid grid-cols-4 gap-4 w-full">
      <PlayerComponent @passPlayer="passData($event,0)"  />
      <PlayerComponent @passPlayer="passData($event,1)"  />
      <PlayerComponent @passPlayer="passData($event,2)"  />
      <PlayerComponent @passPlayer="passData($event,3)" />
    </section>
    <button @click.prevent="sendData()">ZATWIERDŹ</button>
  </form>
</template>

<script>
import { sendForm } from '@/methods/Post';
import PlayerComponent from '@/components/routes/event/register/PlayerComponent.vue';

export default {
  name: 'FormComponent',
  components: {
    PlayerComponent
  },
  data() {
    return {
      teamData: {
        team: {
          teamname: null,
          email: null,
          category: null,
          players: {},
        }
      }
    }
  },
  methods: {
    passData(data, i) {
      this.teamData.team.players[i] = data;
    },
    sendData() {
      sendForm('register', this.teamData);
    },
  }
}
</script>

<style>
</style>