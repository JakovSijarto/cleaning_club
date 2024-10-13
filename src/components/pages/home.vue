<template>
  <img src="../../assets/home/herosec_main_photo.png" alt="" class="object-cover w-full h-[1020px]">
  <div class="w-full">
    <div class="absolute top-[0%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between gap-[0.5em] mt-[40em] w-[1280px] max-[1340px]:w-full max-[1100px]:mt-[0em] max-[1340px]:px-2 max-[1100px]:flex-col max-[1100px]:items-center ">
      <div class="text-white w-[900px] max-[1100px]:w-full  max-[1100px]:mt-[80em]   max-[754px]:text-center max-[754px]:w-[400px] max-[460px]:w-full">
        <p class="text-[60px] font-bold leading-[1.2em] max-[754px]:text-[35px]">{{ $t("home.naslov_hero_veliki") }}</p>
        <p class="text-[18px] py-8 w-[600px] max-[1100px]:w-full max-[754px]:text-[14px]">{{ $t("home.naslov_hero_mali") }}</p>
        <router-link to="/aboutus" class="button" id="button-7">
    <div id="dub-arrow"><img src="../../assets/home/herosec_main_button,svg.svg" alt="" /></div>
    <a href="#" class="font-bold">{{ $t("home.hero_button") }}</a>
  </router-link>
      </div>
      <div class="bg-linear-css w-[400px] h-[800px] top-[-10em] relative max-[1100px]:top-[25em] max-[1100px]:w-full  max-[1100px]:bg-[#007CFB] max-[1100px]:h-auto max-[1100px]:py-8 max-[460px]:w-full">
        <div class="mt-[100px] max-[1100px]:mt-[0px] flex px-[30px] text-white flex flex-col ">
          <p class="text-[24px] font-semibold mb-[24px]">{{ $t("home.usluga") }}</p>
          <form ref="form" @submit.prevent="sendEmail">
  <input type="text" required name="ime" v-model="ime" class="mb-[18px] h-[46px] bg-[#007CFB] border border-[white] py-[6px] px-[22px] text-[15px] w-full text-white rounded-[5px]" placeholder="Name*">
  
  <input type="text" required name="brojmobitela" v-model="brojmobitela" class="mb-[18px] h-[46px] bg-[#007CFB] border border-[white] py-[6px] px-[22px] text-[15px] w-full text-white rounded-[5px]" placeholder="Telephone*">
  
  <input type="text" required name="email" v-model="email" class="mb-[18px] h-[46px] bg-[#007CFB] border border-[white] py-[6px] px-[22px] text-[15px] w-full text-white rounded-[5px]" placeholder="Email*">
  
  <select required name="usluga" v-model="usluga" class="mb-[18px] h-[46px] bg-[#007CFB] border border-[white] py-[6px] px-[22px] text-[15px] w-full text-white rounded-[5px]">
    <option value="" disabled selected hidden>Pick service*</option>
    <option value="Dubinsko čišcenje tapiciranog namještaja i tepiha">Dubinsko čišcenje tapiciranog namještaja i tepiha</option>
    <option value="Čišcenje stanova i kuća">Čišcenje stanova i kuća</option>
    <option value="Čišcenje nakon adaptacije i gtađevinski radova">Čišcenje nakon adaptacije i gtađevinski radova</option>
    <option value="Čišćenje poslovnih prostora, ureda, firmi, ordinacija...(po dogovoru)">Čišćenje poslovnih prostora, ureda, firmi, ordinacija...(po dogovoru)</option>
    <option value="Ostalo">Ostalo...</option>
  </select>

  <textarea name="poruka" v-model="poruka" class="mb-[18px] h-[100px] max-h-[100px] bg-[#007CFB] border border-[white] py-[15px] px-[22px] text-[15px] w-full text-white rounded-[5px]" placeholder="Message"></textarea>
  
  <button class="button" id="button-7" type="submit" value="Send">
    <div id="dub-arrow" class="font-bold">{{ $t("home.service_button2") }}</div>
    <a href="#" class="font-bold">{{ $t("home.service_button1") }}</a>
  </button>
</form>

        </div>
      </div>
    </div>
    <div class="max-[1100px]:mt-[30em]">
      <aboutussection/>  
    </div>
    
    <div class="flex justify-center items-center py-24 bg-gradient-to-b from-blue-50 to-white">
  <div class="flex flex-col items-center w-full max-w-7xl px-4">
    <!-- Container for Title and Subtitles -->
    <div class="flex flex-col md:flex-row md:justify-between w-full gap-6 items-center md:items-start">
      <div class="flex flex-col items-center md:items-start">
        <p class="rubik-font text-lg font-semibold text-blue-700 flex gap-2 items-center">
          <img src="../../assets/home/stars-aboutus-home.svg" alt="Stars Icon" class="w-8">
          {{ $t("home.info1_naslov1") }}
        </p>
        <p class="text-3xl font-extrabold text-blue-900 mt-4 text-center md:text-left">
          {{ $t("home.info1_naslov2") }}
          <small class="font-normal text-xl block mt-2">{{ $t("home.info1_naslov3") }}</small>
        </p>
      </div>
      <p class="w-full md:w-2/5 text-blue-700 rubik-font text-center md:text-left">
        {{ $t("home.info1_naslov4") }}
      </p>
    </div>
    <p class="py-4 text-sm opacity-70 text-center px-4 text-blue-600">
      {{ $t("home.info1_informativno") }}
    </p>
    <!-- Container for Cards -->
    <div class="flex flex-wrap justify-center w-full gap-6 mt-10 mb-24">
      
      
      <!-- Second Card -->
      <div class="bg-white border border-blue-300 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 w-full max-w-sm">
        <a href="#">
          <img class="rounded-t-lg w-full h-48 object-cover" src="../../assets/home/2.jpg" alt="Service 2" loading="lazy" />
        </a>
        <div class="p-6">
          <a href="#">
            <h5 class="mb-3 text-2xl font-bold text-blue-800">{{ $t("home.tab_header2") }}</h5>
          </a>
          <ul class="mb-4 font-normal text-blue-700 space-y-2">
            <li>{{ $t("home.tab_header2_desc1") }} <b class="ml-2">13€/h</b></li>
            <li>{{ $t("home.tab_header2_desc2") }} <b class="ml-2">4€/m²</b></li>
            <li>{{ $t("home.tab_header2_desc3") }} <b class="ml-2">2€/m²</b></li>
          </ul>
          <router-link to="/kontakt" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition">
            {{ $t("home.javitese") }}
            <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </router-link>
        </div>
      </div>
      <!-- First (Highlighted) Card -->
      <div class="bg-white border-4 border-blue-500 rounded-lg shadow-lg w-full max-w-sm transform hover:scale-105 transition-transform duration-300">
        <a href="#">
          <img class="rounded-t-lg w-full h-48 object-cover" src="../../assets/home/1.jpg" alt="Service 1" loading="lazy" />
        </a>
        <div class="p-6">
          <a href="#">
            <h5 class="mb-3 text-2xl font-bold text-blue-800">{{ $t("home.tab_header1") }}</h5>
          </a>
          <ul class="mb-4 font-normal text-blue-700 space-y-2">
            <li>
              {{ $t("home.tab_header1") }}
              <p>{{ $t("home.tab_header1_desc2") }} <b class="ml-2">45€</b></p>
              <p>{{ $t("home.tab_header1_desc3") }} <b class="ml-2">55€</b></p>
            </li>
          </ul>
          <router-link to="/kontakt" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition">
            {{ $t("home.javitese") }}
            <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </router-link>
        </div>
      </div>
      <!-- Third Card -->
      <div class="bg-white border border-blue-300 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 w-full max-w-sm">
        <a href="#">
          <img class="rounded-t-lg w-full h-48 object-cover" src="../../assets/home/3.jpg" alt="Service 3" loading="lazy" />
        </a>
        <div class="p-6">
          <a href="#">
            <h5 class="mb-3 text-2xl font-bold text-blue-800">{{ $t("home.tab_header3") }}</h5>
          </a>
          <ul class="mb-4 font-normal text-blue-700 space-y-2">
            <li>{{ $t("home.tab_header3_desc1") }} 500m²: <b class="ml-2">5€/m²</b></li>
            <li>{{ $t("home.tab_header3_desc2") }} 500m²: <b class="ml-2">4€/m²</b></li>
          </ul>
          <router-link to="/kontakt" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition">
            {{ $t("home.javitese") }}
            <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
    <!-- Additional Cards Section -->
    <div class="flex flex-wrap justify-center w-full gap-6">
      <div class="bg-white border border-blue-300 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 w-full max-w-7xl">
  <!-- Combined Image -->
  <a href="#">
    <img class="rounded-t-lg w-full h-64 object-cover" src="../../assets/home/combined-service.jpg" alt="Combined Services" loading="lazy" />
  </a>
  
  <div class="p-6">
    <!-- Combined Heading -->
    <a href="#">
      <h5 class="mb-3 text-2xl font-bold text-blue-800">OSTALO</h5>
    </a>

    <!-- Split content into two columns on larger screens, stack on smaller screens -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <!-- Left Column: Service 4 Details -->
      <div>
        <h6 class="text-lg font-semibold text-blue-700 mb-2">{{ $t("home.tab_header4") }}</h6>
        <ul class="mb-4 font-normal text-blue-700 space-y-2">
          <li class="flex justify-between">{{ $t("home.tab_header4_desc1") }}<b>35€</b></li>
          <li class="flex justify-between">{{ $t("home.tab_header4_desc2") }}<b>30€</b></li>
          <li class="flex justify-between">{{ $t("home.tab_header4_desc3") }}<b>15€</b></li>
          <li class="flex justify-between">{{ $t("home.tab_header4_desc4") }}<b>10€</b></li>
        </ul>
      </div>

      <!-- Right Column: Philosophy -->
      <div>
        <h6 class="text-lg font-semibold text-blue-700 mb-9"></h6>
        <ul class="mb-4 font-normal text-blue-700 space-y-2">
          <li class="flex justify-between">{{ $t("home.tab_header4_desc5") }}<b>15€</b></li>
          <li class="flex justify-between">{{ $t("home.tab_header4_desc6") }}<b>30€</b></li>
          <li class="flex justify-between">{{ $t("home.tab_header4_desc7") }}<b>45€</b></li>
          <li class="flex justify-between">{{ $t("home.tab_header4_desc8") }}<b>4€/m²</b></li>
        </ul>
      </div>
    </div>

    <!-- CTA Button -->
    <div class="flex justify-start mt-6">
      <router-link to="/kontakt" class="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition">
        {{ $t("home.javitese") }}
        <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </router-link>
    </div>
  </div>
</div>

    </div>
  </div>
</div>


       <kontaktbottom/>
  </div>
</template>


<script>
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import { Tabs, Tab } from 'vue3-tabs-component';

export default {
  components: {
    Tabs,
    Tab
  },
  data() {
    return {
      ime: "",
      email: "",
      poruka: "",
      brojmobitela: "",
      usluga: ""  // Added usluga to data
    };
  },
  methods: {
    sendEmail() {
      // Prepare form data
      const templateParams = {
        ime: this.ime,
        brojmobitela: this.brojmobitela,
        email: this.email,
        usluga: this.usluga,  // Send selected service
        poruka: this.poruka
      };

      // Send the email using emailjs
      emailjs.send('service_clwuk55', 'template_owzjwz9', templateParams, '6y58hytHJtD9eVBSB')
        .then((result) => {
          console.log('SUCCESS!', result.text);
          swal({ title: "Success!", text: "Thank you for your message", icon: "success" })
            .then(function() { 
              location.reload();
            });
        }, (error) => {
          console.log('FAILED...', error.text);
        });
    }
  }
};
</script>



<script setup>
import aboutussection from "./components/aboutus-services.vue"
 import kontaktbottom from "./components/contact-bottom.vue"
</script>
<style>
.tabs-component-tabs{
  border: 0;
   display: flex;
   justify-content:space-between;
   margin-bottom: 33px;
    border-bottom: 1px solid #eaebec;
}
.tabs-component{
  width: 100%;
  
}
.tabs-component-tab-a{
  font-weight: 600;
    font-size: 14px;
    color: #0826808A;
 padding-right:60px;
 text-align: center;
 cursor: pointer; 

}
.is-active{
 color:#082680;
}
@media only screen and (max-width: 967px) {
  .tabs-component-tabs{
  text-align: center;
  flex-direction: column;
  align-items: center;
  border-bottom: 0;
}
.tabs-component-tab{
 padding:20px 0;
 border-bottom: 1px solid #eaebec;
 width: 100%;
}
.tabs-component-tab-a{
  padding-right:0px;
}
}
.small-line::before{
  content: '';
    width: 28px;
    height: 3px;
    background-color: #007cfb;
    position: absolute;
    margin-top: 2em;
    margin-left: 3.2em;
}
.cssdottedborder{
  width: 80px;
  height: 80px;
  padding: 7px;
  border-radius: 50%;
  border: 2px dashed #000E39;
  box-shadow: 0 0 0 4px #fff;
}
.box-shadow-aboutus{
  -webkit-box-shadow: 0px 1px 23px -1px #007dfb34; 
box-shadow: 0px 1px 23px -1px #007dfb44;
}
</style>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
@media only screen and (max-width: 1100px) {
  .bg-linear-css{
  background: #007CFB !important;
}
}
@media only screen and (max-width: 920px) {
  .small-line-responsive2::before{
  content: none !important;
}
.small-line-responsive3::before{
  content: none !important;
}
.small-line-responsive4::before{
  content: none !important;
}
}


.box-shadow-aboutusimg{
  -webkit-box-shadow: 0px 23px 0px 0px #007CFB; 
box-shadow: 0px 23px 0px 0px #007CFB;
}


.small-line-responsive2::before{
  content: '';
    width: 28px;
    height: 3px;
    background-color: #007cfb;
    position: absolute;
    margin-top: 2em;
    margin-left: 3.2em;
}
.small-line-responsive3::before{
  content: '';
    width: 28px;
    height: 3px;
    background-color: #007cfb;
    position: absolute;
    margin-top: 2em;
    margin-left: 2.7em;
}
.small-line-responsive4::before{
  content: '';
    width: 28px;
    height: 3px;
    background-color: #007cfb;
    position: absolute;
    margin-top: 2em;
    margin-left: 4.2em;
}
::placeholder{
  color:white;
}
.rubik-font{
    font-family: 'Rubik', sans-serif !important;
}
.bg-linear-css{
  background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 15%, rgba(0,124,251,1) 37%);
}
.button {
  display: inline-flex;
  height: 40px;
  width: 150px;
  border: 2px solid #007CFB;
  background: #007CFB;
  margin:0;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-size: .8em;
  letter-spacing: 1.5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

a {
  color: white;
  text-decoration: none;
  letter-spacing: 1px;
}
#button-7 {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

#button-7 a {
  position: relative;
  left: 0;
  transition: all .35s ease-Out;
}

#dub-arrow {
  width: 100%;
  height: 100%;
  background: #007CFB;
  left: -200px;
  position: absolute;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .35s ease-Out;
  bottom: 0;
}

#button-7 img {
  width: 20px;
  height: auto;
}

#button-7:hover #dub-arrow {
  left: 0;
}

#button-7:hover a {
  left: 150px;
}
</style>

