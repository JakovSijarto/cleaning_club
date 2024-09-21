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
    
    <div class="flex justify-center items-center pt-[95px]">
  <div class="flex flex-col items-center w-full max-w-[1200px] px-4">
    <!-- Container for Title and Subtitles -->
    <div class="flex w-full justify-between gap-[1em] items-center max-[1200px]:flex-col max-[1200px]:text-center">
      <div class="max-[1200px]:flex max-[1200px]:flex-col max-[1200px]:items-center">
        <p class="rubik-font text-[18px] font-semibold text-[#3A4268] flex gap-[1em] items-center"> 
          <img src="../../assets/home/stars-aboutus-home.svg" alt="" class="w-[34px]">{{ $t("home.info1_naslov1") }}
        </p>
        <p class="text-[#082680] text-[36px] font-extrabold flex flex-col text-start mt-[15px] max-[1200px]:text-center">
          {{ $t("home.info1_naslov2") }}
          <small class="font-normal mb-[14px]">{{ $t("home.info1_naslov3") }}</small>
        </p>
      </div>
      <p class="w-[430px] text-[#3A4268] rubik-font max-[1200px]:w-[90%] max-[670px]:w-full">{{ $t("home.info1_naslov4") }}</p>
    </div>
    <p class="py-4 text-[15px] opacity-[50%] text-center px-4">{{ $t("home.info1_informativno") }}</p>
    <!-- Container for Cards -->
    <div class="flex max-[840px]:flex-col justify-center w-full gap-[2em] items-center mt-[42px] mb-[100px] max-[850px]:mb-[20px]">
      <div class="bg-white border border-gray-200 rounded-lg h-[500px] max-[440px]:h-auto shadow dark:bg-gray-800 dark:border-gray-700 w-full max-w-[400px]">
        <a href="#">
          <img class="rounded-t-lg w-full" src="../../assets/home/1.jpg" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ $t("home.tab_header1") }}</h5>
          </a>
          <ul class="mb-3 font-normal text-white py-4">
            <li>{{ $t("home.tab_header1") }} <p>{{ $t("home.tab_header1_desc2") }}<b class="tracking-[1px] pl-2">45€</b></p><p>{{ $t("home.tab_header1_desc3") }}<b class="tracking-[1px] pl-2">55€</b></p></li>
          </ul>        
          <router-link to="/kontakt" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {{ $t("home.javitese") }}
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </router-link>
        </div>
      </div>
      <div class="bg-white border border-gray-200 rounded-lg h-[500px] max-[440px]:h-auto shadow dark:bg-gray-800 dark:border-gray-700 w-full max-w-[400px] mx-12">
        <div>
          <img class="rounded-t-lg w-full" src="../../assets/home/2.jpg" alt="" />
        </div>
        <div class="p-5">
          <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ $t("home.tab_header2") }}</h5>
          </div>
          <ul class="mb-3 font-normal text-white py-4 pt-12 max-[850px]:pt-4">
            <li>{{ $t("home.tab_header2_desc1") }}<b class="tracking-[1px] pl-2">13€/h</b></li>
            <li>{{ $t("home.tab_header2_desc2") }}<b class="tracking-[1px] pl-2">4€/m2</b></li>
            <li>{{ $t("home.tab_header2_desc3") }}<b class="tracking-[1px] pl-2">2€/m2</b></li>
          </ul>        
          <router-link to="/kontakt" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {{ $t("home.javitese") }}
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </router-link>
        </div>
      </div>
      <div class="bg-white border border-gray-200 h-[500px] max-[440px]:h-auto rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full max-w-[400px]">
        <div>
          <img class="rounded-t-lg w-full" src="../../assets/home/3.jpg" alt="" />
        </div>
        <div class="p-5">
          <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ $t("home.tab_header3") }}</h5>
          </div>
          <ul class="mb-3 font-normal text-white py-4">
            <li>{{ $t("home.tab_header3_desc1") }} 500m2:<b class="tracking-[1px] pl-2">5€/m2</b></li>
            <li>{{ $t("home.tab_header3_desc2") }} 500m2:<b class="tracking-[1px] pl-2">4€/m2</b></li>
          </ul>       
          <router-link to="/kontakt" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {{ $t("home.javitese") }}
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </router-link>
        </div>
      </div>

    </div>
    <div class="flex flex-row pb-12 w-[80%] justify-between gap-5 max-[600px]:flex-col max-[600px]:w-full max-[600px]:items-center">
      <div class="bg-white border border-gray-200 h-auto max-w-[400px] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full">
  <div>
    <img class="rounded-t-lg w-full" src="../../assets/home/4.jpg" alt="" />
  </div>
  <div class="p-5">
    <div>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ $t("home.tab_header4") }}</h5>
    </div>
    <ul class="mb-3 font-normal text-white py-4">
      <li class="flex justify-between">{{ $t("home.tab_header4_desc1") }}<b class="tracking-[1px] pl-2">35€</b></li>
      <li class="flex justify-between">{{ $t("home.tab_header4_desc2") }}<b class="tracking-[1px] pl-2">30€</b></li>
      <li class="flex justify-between">{{ $t("home.tab_header4_desc3") }}<b class="tracking-[1px] pl-2">15€</b></li>
      <li class="flex justify-between">{{ $t("home.tab_header4_desc4") }}<b class="tracking-[1px] pl-2">10€</b></li>
      <li class="flex justify-between">{{ $t("home.tab_header4_desc5") }}<b class="tracking-[1px] pl-2">15€</b></li>
      <li class="flex justify-between">{{ $t("home.tab_header4_desc6") }}<b class="tracking-[1px] pl-2">30€</b></li>
      <li class="flex justify-between">{{ $t("home.tab_header4_desc7") }}<b class="tracking-[1px] pl-2">45€</b></li>
      <li class="flex justify-between">{{ $t("home.tab_header4_desc8") }}<b class="tracking-[1px] pl-2">4€/m2</b></li>
    </ul>       
    <router-link to="/kontakt" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      {{ $t("home.javitese") }}
      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </router-link>
  </div>
</div>

      <div class="bg-white border border-gray-200 h-[500px] max-[440px]:h-auto rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full max-w-[400px]">
        <div>
          <img class="rounded-t-lg w-full" src="../../assets/home/nasafilozofija-home.jpg" alt="" />
        </div>
        <div class="p-5">
          <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ $t("home.tab_header5") }}</h5>
          </div>
          <ul class="mb-3 font-normal text-white py-4">
            <li>{{ $t("home.tab_header5_desc1") }}</li>
          </ul>       
          <router-link to="/kontakt" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {{ $t("home.javitese") }}
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </router-link>
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

