<template>
  <form class="grid">
<!--    <div class="text-3xl font-bold mt-8 mb-2 w-fit relative">-->
<!--      <h2 class="header z-10 relative w-fit">Rejestracja</h2>-->
<!--      <div class="pseudo z-20 absolute bg-secd w-[150%] h-full inset-0 -left-[25%] transform-gpu transition duration-1000 ease-in-out -translate-x-[40vw] origin-right"></div>-->
<!--    </div>-->
<!--    <input v-model="teamData.team.teamname" id="teamname" name="teamname" type="text" pattern="[a-z_0-9-]{5,24}" maxlength="24" minlength="5" placeholder="Knurów Basket" required>-->
<!--    <h3>Adres E-mail</h3>-->
<!--    <input v-model="teamData.team.email" id="email" name="email" type="text" pattern="[a-z_0-9-]{3,24}" maxlength="24" minlength="3" placeholder="basket@knurow.pl" required>-->
<!--    <h3>Kategoria</h3>-->
<!--    <input v-model="teamData.team.category" value="0" id="category" name="category1" type="radio" required>-->
<!--    <label for="category">Szkolna</label>-->
<!--    <input v-model="teamData.team.category" value="1" id="category" name="category2" type="radio" required>-->
<!--    <label for="category">Open</label>-->
<!--    <input v-model="teamData.team.category" value="2" id="category" name="category3" type="radio" required>-->
<!--    <label for="category">Damska</label>-->
<!--    <h3>Gracze</h3>-->
<!--    <section class="grid grid-cols-4 gap-4 w-full">-->
<!--      <PlayerComponent @passPlayer="passData($event,i - 1)" v-for="i in 4" :key="i"/>-->
<!--    </section>-->
    <button @click.prevent="sendData()">ZATWIERDŹ</button>
  </form>
</template>

<script>
import { sendForm } from '@/methods/Post';
// import PlayerComponent from '@/components/routes/event/register/PlayerComponent.vue';

export default {
  name: 'FormComponent',
  components: {
    // PlayerComponent
  },
  data() {
    return {
      teamData: {
        team: {
          teamname: null,
          email: null,
          category: null,
          players: [],
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