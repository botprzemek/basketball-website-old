<template>
  <form class="w-full h-fit grid">
    <section class="w-full h-fit relative grid grid-flow-col place-content-between mb-3">
      <div class="z-10 w-full h-full absolute flex items-center">
        <div class="w-full h-px bg-secd"></div>
      </div>
      <div v-for="i in 5" :key="i">
        <div v-if="i <= formState"  class="z-20 w-10 h-10 relative bg-main aspect-square grid place-content-center">
          <p class="w-full h-full text-secd text-lg font-bold p-2 mt-0.5">{{ i }}</p>
        </div>
        <div v-else class="z-20 w-10 h-10 relative bg-secd aspect-square grid place-content-center">
          <p class="w-full h-full text-main text-lg font-bold p-2 mt-0.5">{{ i }}</p>
        </div>
      </div>
    </section>
    <section class="flex flex-col" v-if="formState === 1">
      <section class="w-full h-fit grid place-content-start mb-1.5">
        <h2 class="text-2xl font-bold">Nazwa Drużyny</h2>
        <p class="text-sm">Wprowadź nazwę swojej drużyny.</p>
      </section>
      <section class="w-full h-fit px-3 py-2 border-secd border-[1px] mb-3">
        <input id="teamname" v-model="teamData.team.teamname"
               class="w-full bg-transparent text-secd text-sm placeholder-secd mt-0.5 focus:outline-0"
               maxlength="24"
               minlength="5" name="teamname"
               pattern="[a-z_0-9\s]{5,24}" placeholder="Twoja nazwa" required type="text">
      </section>
    </section>
    <section class="flex flex-col" v-if="formState === 2">
      <section class="w-full h-fit grid place-content-start mb-1.5">
        <h2 class="text-2xl font-bold">Kategoria Rozgrywek</h2>
        <p class="text-sm">Wybierz kategorię, w której drużyna będzie uczestniczyć.</p>
      </section>
      <section class="grid grid-flow-col gap-3">
        <div
            class="w-full h-fit px-3 py-2 border-secd border-[1px] mb-3 grid place-content-center hover:border-main hover:bg-main">
          <p class="text-2xl font-bold mt-1">Szkolna</p>
        </div>
        <div
            class="w-full h-fit px-3 py-2 border-secd border-[1px] mb-3 grid place-content-center hover:border-main hover:bg-main">
          <p class="text-2xl font-bold mt-1">Otwarta</p>
        </div>
        <div
            class="w-full h-fit px-3 py-2 border-secd border-[1px] mb-3 grid place-content-center hover:border-main hover:bg-main">
          <p class="text-2xl font-bold mt-1">Damska</p>
        </div>
      </section>
    </section>
    <section class="flex flex-col" v-if="formState === 3">
      <section class="w-full h-fit grid place-content-start mb-1.5">
        <h2 class="text-2xl font-bold">Twój Zespół</h2>
        <p class="text-sm">Wprowadź graczy, którzy będą uczestniczyć w rozgrywkach.</p>
      </section>
      <section class="grid grid-flow-row gap-3">
        <div
            class="w-full h-fit px-3 py-2 border-secd border-[1px] mb-3 grid place-content-center hover:border-main hover:bg-main">
          <p class="text-2xl font-bold mt-1">Szkolna</p>
        </div>
        <div
            class="w-full h-fit px-3 py-2 border-secd border-[1px] mb-3 grid place-content-center hover:border-main hover:bg-main">
          <p class="text-2xl font-bold mt-1">Otwarta</p>
        </div>
        <div
            class="w-full h-fit px-3 py-2 border-secd border-[1px] mb-3 grid place-content-center hover:border-main hover:bg-main">
          <p class="text-2xl font-bold mt-1">Damska</p>
        </div>
        <div
            class="w-full h-fit px-3 py-2 border-secd border-[1px] mb-3 grid place-content-center hover:border-main hover:bg-main">
          <p class="text-2xl font-bold mt-1">Damska</p>
        </div>
      </section>
    </section>
    <section class="flex flex-col" v-if="formState === 4">
      <section class="w-full h-fit grid place-content-start mb-1.5">
        <h2 class="text-2xl font-bold">Dane Kontaktowe</h2>
        <p class="text-sm">Wprowadź dane kontaktowe kapitana, email zostanie wykorzystany do weryfikacji formularza.</p>
      </section>
      <section class="w-full h-fit px-3 py-2 border-secd border-[1px] mb-3">
        <input id="email" v-model="teamData.team.email"
               class="w-full bg-transparent text-secd text-sm placeholder-secd mt-0.5 focus:outline-0"
               maxlength="24" minlength="3" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Adres email"
               required type="email">
      </section>
      <section class="w-full h-fit px-3 py-2 border-secd border-[1px] mb-3">
        <input id="phone" v-model="teamData.team.phone"
               class="w-full bg-transparent text-secd text-sm placeholder-secd mt-0.5 focus:outline-0"
               maxlength="9" minlength="9" name="phone" pattern="[0-9]{9}" placeholder="Numer telefonu*"
               required
               size="9" type="tel">
      </section>
    </section>
    <section class="w-full h-fit grid place-items-end">
      <div class="w-fit h-fit flex flex-row">
        <ButtonComponent v-if="this.formState === 0" @click="changeState(true)" :id="3" bgColor="secd" text="Rozpocznij" textColor="main" textWeight="bold"/>
        <ButtonComponent v-if="(this.formState > 0) && (this.formState <= 5)" @click="changeState(false)" :id="3" bgColor="transparent" text="Powrót" textColor="main" textWeight="light"/>
        <ButtonComponent v-if="(this.formState > 0) && (this.formState < 5)" @click="changeState(true)" :id="3" bgColor="secd" text="Dalej" textColor="main" textWeight="bold"/>
        <ButtonComponent v-if="this.formState === 5" @click="sendData" :id="3" bgColor="secd" text="Zatwierdź" textColor="main" textWeight="bold"/>
      </div>
    </section>
    <!--    <div class="text-3xl font-bold mt-8 mb-2 w-fit relative">-->
    <!--      <h2 class="header z-10 relative w-fit">Rejestracja</h2>-->
    <!--      <div class="pseudo z-20 absolute bg-secd w-[150%] h-full inset-0 -left-[25%] transform-gpu transition duration-1000 ease-in-out -translate-x-[40vw] origin-right"></div>-->
    <!--    </div>-->
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
    <!--    <button @click.prevent="sendData()">ZATWIERDŹ</button>-->
  </form>
</template>

<script>
import {sendForm} from '@/methods/Post';
import ButtonComponent from "@/components/utils/ButtonComponent.vue";
// import PlayerComponent from '@/components/routes/event/streetball/PlayerComponent.vue';

export default {
  name: 'FormComponent',
  components: {
    ButtonComponent
    // PlayerComponent
  },
  data() {
    return {
      formState: 1 * localStorage.getItem('form-state'),
      teamData: {
        team: {
          teamname: null,
          email: null,
          phone: null,
          category: null,
          players: [],
        }
      }
    }
  },
  methods: {
    changeState(boolean) {
      if ((this.formState <= 0 && !boolean) || (this.formState >= 5 && boolean)) return;
      (boolean) ? this.formState++ : this.formState--;
      localStorage.setItem('form-state', this.formState);
    },
    // passData(data, i) {
    //   this.teamData.team.players[i] = data;
    //   localStorage.setItem('form-state', this.formState);
    // },
    sendData() {
      sendForm('register', this.teamData);
    },
  },
  mounted() {
    if (!localStorage.getItem('form-state')) localStorage.setItem('form-state', '0');
  }
}
</script>

<style>
</style>