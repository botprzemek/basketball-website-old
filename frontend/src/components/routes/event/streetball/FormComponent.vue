<template>
  <section class="w-full h-full">
    <article class="w-full h-full grid">
      <h1 class="text-2xl sm:text-4xl font-bold">Rejestracja</h1>
      <p class="mb-1.5">Wypełnij formularz, aby zapisać swoją drużynę na Knury Streetball 2023.</p>
    </article>
    <form class="w-full h-fit grid">
      <section v-if="formState > 0 && formState < 6" class="w-full h-fit relative grid grid-flow-col place-content-between mb-3">
        <div class="z-10 w-full h-full absolute flex items-center">
          <div class="w-full h-px bg-secd"></div>
        </div>
        <div v-for="i in 5" :key="i">
          <div v-if="i <= formState"  class="z-20 w-10 h-10 relative bg-main aspect-square grid place-content-center">
            <p class="w-full h-full text-secd text-2xl sm:text-lg font-bold p-2 mt-0.5">{{ i }}</p>
          </div>
          <div v-else class="z-20 w-10 h-10 relative bg-secd aspect-square grid place-content-center">
            <p class="w-full h-full text-main text-2xl sm:text-lg font-bold p-2 mt-0.5">{{ i }}</p>
          </div>
        </div>
      </section>
      <section v-if="formState === 6" class="w-full h-10 bg-main mb-3">
        <img :src="require(`@/assets/icon/check1.svg`)" alt="Check icon" class="p-0.5 w-full h-full">
      </section>
      <section class="flex flex-col" v-if="formState === 1">
        <section class="w-full h-fit grid place-content-start mb-1.5">
          <h2 class="text-2xl font-bold">Nazwa Drużyny</h2>
          <p class="text-sm">Wprowadź nazwę swojej drużyny.</p>
        </section>
        <section class="w-full h-fit flex flex-row flex-grow gap-3">
          <section class="w-full h-fit px-3 py-2 border-secd border-[1px] mb-3">
            <input @input="saveData('teamname', $event.target.value)" id="teamname" v-model="teamData.team.teamname"
                   class="w-full bg-transparent text-secd text-md sm:text-sm placeholder-secd mt-0.5 focus:outline-0"
                   maxlength="24"
                   minlength="5" name="teamname"
                   pattern="[a-zA-Z_0-9\s]{5,24}" placeholder="Nazwa Drużyny" required type="text">
          </section>
          <div class="z-20 w-10 h-10 aspect-square bg-secd">
            <img v-if="!validation.team.teamname" :src="require(`@/assets/icon/x.svg`)" alt="Validation icon" class="p-0.5 w-full h-full">
            <img v-else :src="require(`@/assets/icon/check.svg`)" alt="Validation icon" class="p-0.5 w-full h-full">
          </div>
        </section>
      </section>
      <section class="flex flex-col" v-if="formState === 2">
        <section class="w-full h-fit grid place-content-start mb-1.5">
          <h2 class="text-2xl font-bold">Kategoria Rozgrywek</h2>
          <p class="text-sm">Wybierz kategorię, w której drużyna będzie uczestniczyć.</p>
        </section>
        <section class="grid grid-flow-row sm:grid-flow-col gap-3">
          <div v-if="teamData.team.category === 0" class="w-full h-fit px-3 py-2 border-main bg-main border-[1px] mb-3 grid place-content-center transition-all duration-300 ease-out">
            <p class="text-2xl font-bold mt-1">Szkolna</p>
          </div>
          <div v-else @click="saveData('category', 0)" class="w-full h-fit px-3 py-2 border-secd border-[1px] mb-3 grid place-content-center hover:border-main hover:bg-main transition-all duration-300 ease-out">
            <p class="text-2xl font-bold mt-1">Szkolna</p>
          </div>
          <div v-if="teamData.team.category === 1" class="w-full h-fit px-3 py-2 border-main bg-main border-[1px] mb-3 grid place-content-center transition-all duration-300 ease-out">
            <p class="text-2xl font-bold mt-1">Otwarta</p>
          </div>
          <div v-else @click="saveData('category', 1)" class="w-full h-fit px-3 py-2 border-secd border-[1px] mb-3 grid place-content-center hover:border-main hover:bg-main transition-all duration-300 ease-out">
            <p class="text-2xl font-bold mt-1">Otwarta</p>
          </div>
          <div v-if="teamData.team.category === 2" class="w-full h-fit px-3 py-2 border-main bg-main border-[1px] mb-3 grid place-content-center transition-all duration-300 ease-out">
            <p class="text-2xl font-bold mt-1">Damska</p>
          </div>
          <div v-else @click="saveData('category', 2)" class="w-full h-fit px-3 py-2 border-secd border-[1px] mb-3 grid place-content-center hover:border-main hover:bg-main transition-all duration-300 ease-out">
            <p class="text-2xl font-bold mt-1">Damska</p>
          </div>
        </section>
      </section>
      <section class="flex flex-col" v-if="formState === 3">
        <section class="w-full h-fit grid place-content-start mb-1.5">
          <h2 class="text-2xl font-bold">Twój Zespół</h2>
          <p class="text-sm">Wprowadź graczy, którzy będą uczestniczyć w rozgrywkach.</p>
        </section>
        <PlayerComponent @passPlayer="passData($event, 0)" name="Gracz 1" id="0"/>
        <PlayerComponent @passPlayer="passData($event, 1)" name="Gracz 2" id="1"/>
        <PlayerComponent @passPlayer="passData($event, 2)" name="Gracz 3" id="2"/>
        <PlayerComponent @passPlayer="passData($event, 3)" name="Rezerwa" id="3"/>
      </section>
      <section class="flex flex-col" v-if="formState === 4">
        <section class="w-full h-fit grid place-content-start mb-1.5">
          <h2 class="text-2xl font-bold">Dane Kontaktowe</h2>
          <p class="text-sm">Wprowadź dane kontaktowe kapitana, email zostanie wykorzystany do weryfikacji formularza.</p>
        </section>
        <section class="w-full h-fit flex flex-row flex-grow gap-3">
          <section class="w-full h-fit px-3 py-2 border-secd border-[1px] mb-3">
            <input @input="saveData('email', $event.target.value)" id="email" v-model="teamData.team.email"
                   class="w-full bg-transparent text-secd text-md sm:text-sm placeholder-secd mt-0.5 focus:outline-0"
                   maxlength="24" minlength="3" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$" placeholder="Adres email"
                   required type="email">
          </section>
          <div class="z-20 w-10 h-10 aspect-square bg-secd">
            <img v-if="!validation.team.email" :src="require(`@/assets/icon/x.svg`)" alt="Validation icon" class="p-0.5 w-full h-full">
            <img v-else :src="require(`@/assets/icon/check.svg`)" alt="Validation icon" class="p-0.5 w-full h-full">
          </div>
        </section>
        <section class="w-full h-fit flex flex-row flex-grow gap-3">
          <section class="w-full h-fit px-3 py-2 border-secd border-[1px] mb-3">
            <input @input="saveData('phone', $event.target.value)" id="phone" v-model="teamData.team.phone"
                   class="w-full bg-transparent text-secd text-md sm:text-sm placeholder-secd mt-0.5 focus:outline-0"
                   maxlength="9" minlength="9" name="phone" pattern="[0-9]{9}" placeholder="Numer telefonu*"
                   size="9" type="tel">
          </section>
          <div class="z-20 w-10 h-10 aspect-square bg-secd">
            <img v-if="!validation.team.phone" :src="require(`@/assets/icon/x.svg`)" alt="Validation icon" class="p-0.5 w-full h-full">
            <img v-else :src="require(`@/assets/icon/check.svg`)" alt="Validation icon" class="p-0.5 w-full h-full">
          </div>
        </section>
      </section>
      <section class="flex flex-col" v-if="formState === 5">
        <section class="w-full h-fit grid place-content-start mb-1.5">
          <h2 class="text-2xl font-bold">Podsumowanie</h2>
          <p>
            Zatwierdzając formularz, akceptujesz
            <router-link class="underline" to="/pliki/regulamin_streetball_2023.pdf">regulamin turnieju.</router-link>
          </p>
        </section>
      </section>
      <section class="flex flex-col" v-if="formState === 6">
        <section class="w-full h-fit grid place-content-start mb-1.5">
          <h2 class="text-2xl font-bold">Dziękujemy!</h2>
          <p>
            Zostałeś/aś pomyślnie zarejestrowany/a na Knury Streetball 2023!
            Sprawdź swoją pocztę email, aby potwierdzić rejestrację!
          </p>
        </section>
      </section>
      <section class="w-full h-fit grid place-items-end mb-48">
        <div class="w-fit h-fit flex flex-row">
          <ButtonComponent v-if="this.formState === 0" @click="changeState(true)" :id="3" bgColor="secd" text="Rozpocznij" textColor="main" textWeight="bold" class="text-lg sm:text-md"/>
          <ButtonComponent v-if="(this.formState > 1) && (this.formState <= 5)" @click="changeState(false)" :id="3" bgColor="transparent" text="Powrót" textColor="main" textWeight="light" class="text-lg sm:text-md"/>
          <ButtonComponent v-if="(this.formState > 0) && (this.formState < 5)" @click="changeState(true)" :id="3" bgColor="secd" text="Dalej" textColor="main" textWeight="bold" class="text-lg sm:text-md"/>
          <ButtonComponent v-if="this.formState === 5" @click="sendData" :id="3" bgColor="secd" text="Zatwierdź" textColor="main" textWeight="bold" class="text-lg sm:text-md"/>
        </div>
      </section>
    </form>
  </section>
</template>

<script>
import {sendForm} from '@/methods/Post';
import {validateInput} from '@/methods/Validate';
import PlayerComponent from '@/components/routes/event/streetball/PlayerComponent';
import ButtonComponent from '@/components/utils/ButtonComponent.vue';

export default {
  name: 'FormComponent',
  components: {
    PlayerComponent,
    ButtonComponent,
  },
  data() {
    return {
      formState: 1 * localStorage.getItem('form-state'),
      section: [
          'start',
          'teamname',
          'category',
          'players',
          'email',
      ],
      validation: {
        team: {
          teamname: JSON.parse(localStorage.getItem('validate-teamname')),
          category: false,
          players: false,
          email: JSON.parse(localStorage.getItem('validate-email')),
          phone: JSON.parse(localStorage.getItem('validate-phone')),
        },
      },
      teamData: {
        team: {
          teamname: localStorage.getItem('teamname'),
          email: localStorage.getItem('email'),
          phone: localStorage.getItem('phone'),
          category: localStorage.getItem('category'),
          players: [],
        }
      }
    }
  },
  methods: {
    changeState(boolean) {
      if (this.formState === 0) return this.formState++;
      if (this.formState === 5 && boolean) {
        this.formState++;
        localStorage.setItem('form-state', `${this.formState}`);
      }
      if (boolean && !this.validation.team[this.section[this.formState]]) return;
      if ((this.formState <= 1 && !boolean) || (this.formState >= 6 && boolean)) return;
      (boolean) ? this.formState++ : this.formState--;
      localStorage.setItem('form-state', `${this.formState}`);
    },
    saveData(key, value) {
      this.validation.team[key] = validateInput(key, value);
      localStorage.setItem(`validate-${key}`, this.validation.team[key]);
      this.teamData.team[key] = value;
      localStorage.setItem(key, `${value}`);
    },
    sendData() {
      this.changeState(true);
      if (this.teamData.team.category === null) this.teamData.team.category = 1;
      if (this.teamData.team.phone === null) delete this.teamData.team.phone;
      this.teamData.team.players.forEach((player, i) => {
        if (player === null) return delete this.teamData.team.players[i];
        if (player.name === null || player.age === null) return delete this.teamData.team.players[i];
        this.teamData.team.players[i] = {name: player.name, age: player.age};
      });
      sendForm('events/streetball/register', this.teamData, async callback => {
        if (callback.ok) return this.changeState(true);
        console.log(await callback.json());
      });
      localStorage.clear();
    },
    passData(data, i) {
      data.name = `${data.firstName} ${data.lastName}`;
      localStorage.setItem(`player-${i}`, JSON.stringify(data));
      this.teamData.team.players[i] = {name: data.name, age: data.age, validation: data.validation};
      let validation = 0;
      this.teamData.team.players.forEach(player => {
        if (player === null) return;
        if (player.validation) validation++;
      });
      this.validation.team.players = validation >= 3;
      localStorage.setItem(`validate-players`, this.validation.team.players);
    },
    loadPlayers() {
      for (let i = 0; i <= 3; i++) this.teamData.team.players[i] = JSON.parse(localStorage.getItem(`player-${i}`));
    }
  },
  mounted() {
    if (!localStorage.getItem('form-state')) localStorage.setItem('form-state', '0');
    this.loadPlayers();
  }
}
</script>

<style>
</style>