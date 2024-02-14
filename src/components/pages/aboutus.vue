<template>
    <div class="pt-[112px] max-[571px]:pt-[81px]">   
        <div class=" w-full flex justify-center items-center bg-black">
            <img src="../../assets/home/herosec_about_kontakt.jpg" alt="" class="h-[300px] w-full object-cover opacity-[0.4]">
            <p class="absolute text-[60px] font-bold text-white max-[310px]:text-[40px] tracking-[5px]">O NAMA</p>
        </div>
    </div>
    <div class="w-full flex justify-center items-center flex-col">
        <div class="w-[1280px] flex justify-between py-24 gap-[1em] max-[1300px]:w-full px-6 max-[640px]:flex-col max-[640px]:items-center max-[640px]:py-12 max-[640px]:gap-[5em]">
            <div class="w-[60%] max-[640px]:text-center max-[640px]:w-full">
                <h1 class="text-[#082680] text-[36px] font-extrabold text-start mt-[2em] max-[640px]:text-center max-[640px]:w-full">TREBATE ČIŠĆENJE?</h1>
            <p class="font-normal my-[14px] text-[#082680] text-[18px]">Javite nam se i na Vašoj smo adresi. <br> 
            Prepustite čišćenje Vašeg doma profesionalcima!</p>
            <router-link to="/kontakt" class="mt-[4em]"><button class="rounded-[50px] px-[26px] mt-8 text-[15px] font-bold text-white bg-[#0431b8] leading-[48px] tracking-[2px]">Javite nam se</button></router-link>
            </div>
            <img src="../../assets/aboutus/aboutus-sec.jpg" alt="" class="w-full h-[400px] object-cover rounded-[15px] max-[1060px]:w-[40%] max-[640px]:w-full">
        </div>
        <div class="flex w-[1280px] justify-between max-[1300px]:w-full gap-[1em] items-center max-[670px]:flex-col px-6">
          <div class="max-[670px]:flex max-[670px]:flex-col max-[670px]:items-center">
            <p class="rubik-font text-[18px] font-semibold text-[#3A4268] flex gap-[1em] items-center"> <img src="../../assets/home/stars-aboutus-home.svg" alt="" class="w-[34px]"> Usluge koje nudimo</p>
            <p class="text-[#082680] text-[36px] font-extrabold flex flex-col text-start mt-[15px] max-[670px]:text-center">Zbog naše kvalitete <small class="font-normal mb-[14px]">izaberite nas!</small></p>
          </div>
          <p class="w-[430px] text-[#3A4268] rubik-font max-[670px]:text-center max-[670px]:w-[90%]">Uz našu pomoć imati ćete više slobodnog vremena uz čišćenje prema Vašim potrebama!</p>
        </div>
        <div class="flex w-[1280px] max-[1300px]:w-full justify-between gap-[1em] items-center max-[670px]:flex-col pb-[5em] px-6">
            <img src="../../assets/aboutus/aboutus-sec2.png" alt="" class="w-full pt-8 h-[400px] object-cover rounded-[15px] max-[670px]:w-full">
              
        </div>
    </div>
    <kontaktbottom/>
</template>

<script setup>
import kontaktbottom from "./components/contact-bottom.vue"
import aboutussection from "./components/aboutus-services.vue"
</script>
