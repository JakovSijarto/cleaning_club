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
            <select required class="mb-[18px] h-[46px] bg-[#007CFB] border border-[white] py-[6px] px-[22px] text-[15px] w-full text-white rounded-[5px]">
                <option value="" disabled selected hidden>Pick service*</option>
                <option value="Čiśćenje privatnih stanova/kuća" name="usluga">Čiśćenje privatnih stanova/kuća</option>
                <option value="Čiśćenje okućnice" name="usluga">Čiśćenje okućnice</option>
                <option value="Odvoz nepotrebnog materijala" name="usluga">Odvoz nepotrebnog materijala</option>
            </select>
            <textarea name="poruka" id="" v-model="poruka" class="mb-[18px] h-[100px] max-h-[100px] bg-[#007CFB] border border-[white] py-[15px] px-[22px] text-[15px] w-full text-white rounded-[5px] " placeholder="Message"></textarea>
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
    

    <div class="w-full flex justify-center items-center pt-[95px]">
      <div class="flex w-[880px] justify-center flex-col items-center max-[1100px]:w-full max-[1100px]:px-8 max-[670px]:px-2">
        <div class="flex w-full justify-between gap-[1em] items-center max-[670px]:flex-col">
          <div class="max-[670px]:flex max-[670px]:flex-col max-[670px]:items-center">
            <p class="rubik-font text-[18px] font-semibold text-[#3A4268] flex gap-[1em] items-center"> <img src="../../assets/home/stars-aboutus-home.svg" alt="" class="w-[34px]">{{ $t("home.info1_naslov1") }}</p>
            <p class="text-[#082680] text-[36px] font-extrabold flex flex-col text-start mt-[15px] max-[670px]:text-center">{{ $t("home.info1_naslov2") }}<small class="font-normal mb-[14px]">{{ $t("home.info1_naslov3") }}</small></p>
          </div>
          <p class="w-[430px] text-[#3A4268] rubik-font max-[670px]:text-center max-[670px]:w-[90%]">{{ $t("home.info1_naslov4") }}</p>
        </div>
        <div class="w-[880px] flex justify-center item-center mt-[42px] max-[1100px]:w-full ">
        <tabs class="mb-[10em] max-[620px]:mb-[20em]" :options="{ defaultTabHash: 'second-tab' }" >
        <tab name="Usluge" class="flex h-[400px] max-[620px]:flex-col">
            <div class="w-[50%] pt-[51px] max-[620px]:pt-[30px] pr-[30px] pb-[60px] pl-[40px] max-[620px]:w-full">
              <p class="text-[29px] mb-[10px] font-bold text-[#082680]">{{ $t("home.info1_slide1_naslov1") }}</p>
              <p class="mb-[36px] text-[#3A4268] rubik-font text-[15px]">{{ $t("home.info1_slide1_naslov2") }}</p>
              <router-link to="/aboutus"><button class="rounded-[50px] px-[26px] text-[15px] font-bold text-white bg-[#0431b8] leading-[48px] tracking-[2px]">{{ $t("home.info_slide_button") }}</button></router-link> 
            </div>
            <div class="w-[50%] max-[620px]:w-full">
              <img src="../../assets/home/nasafilozofija-home.jpg" alt="" class="w-[100%] h-[100%] object-cover rounded-[5px]">
            </div>
        </tab>
        <tab name="Dodatne informacije" class="flex h-[400px] max-[620px]:flex-col ">
          <div class="w-[50%] pt-[51px] pr-[30px] pb-[60px]  max-[620px]:w-full max-[620px]:flex max-[620px]:flex-col max-[620px]:items-center max-[620px]:px-4">
              <ul class="text-[18px] mb-[10px]  text-[#082680]">
                <li class="font-bold text-[25px] pb-4">{{ $t("home.info1_slide2_naslov1") }}</li>
                <li>{{ $t("home.info1_slide2_opis1") }}</li>
                <li>{{ $t("home.info1_slide2_opis2") }}</li>
                <li>{{ $t("home.info1_slide2_opis3") }}</li>
                <li>{{ $t("home.info1_slide2_opis4") }}</li>
              </ul>
              <router-link to="/aboutus"><button class="rounded-[50px] px-[26px] text-[15px] font-bold text-white bg-[#0431b8] leading-[48px] tracking-[2px] max-[620px]:mt-12">{{ $t("home.info_slide_button") }}</button></router-link> 
            </div>
            <div class="w-[50%] max-[620px]:w-full">
              <img src="../../assets/home/misijakompanije-home.jpg" alt="" class="w-[100%] h-[100%] object-cover rounded-[5px]">
            </div>
        </tab>
        <tab name="Naša Vizija" class="flex h-[400px] max-[620px]:flex-col">
          <div class="w-[50%] pt-[51px] pr-[30px] pb-[60px] pl-[40px] max-[620px]:w-full">
              <p class="text-[29px] mb-[10px] font-bold text-[#082680]">{{ $t("home.info1_slide3_naslov1") }}</p>
              <p class="mb-[36px] text-[#3A4268] rubik-font text-[15px]">{{ $t("home.info1_slide3_naslov2") }}</p>
             <router-link to="/aboutus"><button class="rounded-[50px] px-[26px] text-[15px] font-bold text-white bg-[#0431b8] leading-[48px] tracking-[2px]">{{ $t("home.info_slide_button") }}</button></router-link> 
            </div>
            <div class="w-[50%] max-[620px]:w-full">
              <img src="../../assets/home/našavizija-home.jpg" alt="" class="w-[100%] h-[100%] object-cover rounded-[5px]">
            </div>
        </tab>
    </tabs>
</div>
      </div>
    </div>
    
    <div class="w-full flex justify-center items-center py-18 pb-32 ">
      <div class="flex w-[880px] justify-center flex-col items-center max-[1100px]:w-full max-[1100px]:px-8 max-[920px]:px-2">
        <div class="flex w-full justify-center items-center text-center flex-col">
            <p class="rubik-font text-[18px] font-semibold text-[#3A4268] flex gap-[1em] items-center"> <img src="../../assets/home/stars-aboutus-home.svg" alt="" class="w-[34px]">{{ $t("home.info2_naslov1") }}</p>
            <p class="text-[#082680] text-[36px] font-extrabold flex flex-col mt-[15px] text-center">{{ $t("home.info2_naslov2") }} <small class="font-normal mb-[14px] pt-8">{{ $t("home.info2_naslov3") }}</small></p>
        </div>
        <div class=" flex w-[1280px]  max-[1270px]:w-full  mt-12 justify-between px-4 max-[660px]:items-center max-[660px]:gap-[2em] max-[660px]:w-full max-[920px]:flex-col max-[920px]:justify-center max-[920px]:items-center max-[920px]:gap-20">
          <div class="mb-[3px] flex w-full justify-center flex-col items-center text-center max-[920px]:flex max-[920px]:flex-row   max-[920px]:justify-center max-[920px]:items-center max-[660px]:gap-[1em] max-[530px]:flex-col ">
              <div class="flex justify-center items-center bg-[#F1F3F8] w-[100px] h-[100px] mb-8  rounded-[50%] box-shadow-aboutusimg">
                          <img src="../../assets/home/potražiagentra_home.svg" alt="" class="w-[50px]">
                    </div>
                    <p class="text-[#082680] text-[22px] font-bold py-[17px] max-[920px]:mx-4 max-[530px]:pb-0 max-[530px]:mb-0 ">{{ $t("home.info2_about1_naslov") }}</p>
                    <p class="w-[60%]">{{ $t("home.info2_about1_opis") }}</p>
            </div>

            <div class="mb-[3px] text-center flex flex w-full justify-center flex-col items-center max-[920px]:flex max-[920px]:flex-row max-[660px]:gap-[1em] max-[920px]:justify-center max-[920px]:items-center max-[530px]:flex-col">
              <div class="flex justify-center items-ccenter bg-[#F1F3F8] w-[100px] h-[100px] mb-8 rounded-[50%] box-shadow-aboutusimg">
                          <img src="../../assets/home/target_home.svg" alt="" class="w-[50px]">
                    </div>
                    <p class="text-[#082680] text-[22px] font-bold py-[17px]  max-[920px]:mx-4 max-[530px]:pb-0 max-[530px]:mb-0 ">{{ $t("home.info2_about2_naslov") }}</p>
                    <p class="w-[60%]">{{ $t("home.info2_about2_opis") }}</p>
            </div>

            <div class="mb-[3px] text-center flex flex w-full justify-center flex-col items-center max-[920px]:flex max-[920px]:flex-row max-[660px]:gap-[1em] max-[920px]:justify-center max-[920px]:items-center max-[530px]:flex-col">
              <div class="flex justify-center items-center bg-[#F1F3F8] w-[100px] h-[100px] mb-8  rounded-[50%] box-shadow-aboutusimg">
                          <img src="../../assets/home/calculator_home.svg" alt="" class="w-[50px]">
                    </div>
                    <p class="text-[#082680] text-[22px] font-bold py-[17px] max-[920px]:mx-4 max-[530px]:pb-0 max-[530px]:mb-0">{{ $t("home.info2_about3_naslov") }}</p>
                    <p class="w-[60%]">{{ $t("home.info2_about3_opis") }}</p>
            </div>
        </div>
        <router-link to="/kontakt" class="mt-[4em]"><button class="rounded-[50px] px-[26px] text-[15px] font-bold text-white bg-[#0431b8] leading-[48px] tracking-[2px]">{{ $t("home.info2_button") }}</button></router-link>
      </div>
    </div>

       <kontaktbottom/>
  </div>
</template>



<script>
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import {Tabs, Tab} from 'vue3-tabs-component';

export default {
  components:{
    Tabs,
    Tab
  },
  data(){
    return{
      ime:"",
      email:"",
      poruka:"",
      brojmobitela:""
    }
  },
  methods: {
    sendEmail() {
      emailjs.sendForm('service_clwuk55', 'template_owzjwz9', this.$refs.form, '6y58hytHJtD9eVBSB')
        .then((result) => {
             console.log('SUCCESS!', result.text);
            swal({title: "Uspješno!", text: "Hvala Na poruci", type: 
"success"}).then(function(){ 
   location.reload();
   }
);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
        
    },

  },
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
    font-size: 20px;
    color: #0826808A;
 padding:0 20px 10px;
 text-align: center;
 cursor: pointer;
}
.is-active{
 color:#082680;
}
@media only screen and (max-width: 620px) {
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

