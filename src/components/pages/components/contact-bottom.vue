<template>
    <div class="flex items-center justify-center flex-col pb-[5em]">
          <div class="flex gap-[1em] my-8 flex-row items-center">
          <img src="../../../../public/home/stars-aboutus-home.svg" alt="" class="w-[34px]">
          <p class="rubik-font text-[18px] font-semibold text-[#3A4268]">{{ $t("contact-bottom.naslov") }}</p>
        </div>
        <div class="text-[#082680] text-[36px] font-extrabold flex flex-col text-center  max-[640px]:flex max-[640px]:items-center max-[640px]:justify-center max-[302px]:px-2">
          {{ $t("contact-bottom.naslov2") }}
          <small class="font-normal mb-[14px] pt-8">{{ $t("contact-bottom.naslov3") }}</small>
          </div>

          <div class="w-[1280px] flex justify-between items-center pt-[30px] gap-[1em] max-[1300px]:w-full max-[1300px]:px-4 max-[870px]:flex-col max-[870px]:w-[70%] max-[440px]:w-full">
            <a href="tel:+38598249896" class="p-[15px] w-[100%] flex items-center border h-full py-[30px] hover-class" style="transition:0.2s all ease-in">
              <img src="../../../../public/home/telephonecall_contact.svg" alt="" class="mr-[16px]">
              <div class="flex flex-col" >
                <p class="text-[20px] text-[#082680] font-bold">{{ $t("contact-bottom.button1_naslov") }}</p>
              </div>
            </a>
            <a href="mailto:oposepatal@gmail.com" class="p-[15px] w-[100%] flex items-center border h-full py-[30px] hover-class" style="transition:0.2s all ease-in">
              <img src="../../../../public/contact/mail_contact.svg" alt="" class="mr-[16px]">
              <div class="flex flex-col " >
                <p class="text-[20px] text-[#082680] mb-[10px] max-[500px]:mb-0 font-bold">{{ $t("contact-bottom.button2_naslov") }}</p>
                <p class="text-[#3A4268] nav-font max-[500px]:hidden" >oposepatal@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
</template>
<style>
.hover-class:hover{
  -webkit-box-shadow: 0px 1px 23px -1px #007dfb34; 
box-shadow: 0px 1px 23px -1px #007dfb44;
transition: 0.4s all ease-out;
}
</style>