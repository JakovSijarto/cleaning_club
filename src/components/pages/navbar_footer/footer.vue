<template>
    <div class="relative inset-x-0 !bottom-0 h-[200px] bg-[#051135] w-full flex justify-center items-center max-[600px]:h-auto max-[600px]:text-center max-[600px]:py-4">
        <div class="w-[1280px] ">
            <ul class="w-full flex justify-between items-center px-4 max-[600px]:flex-col max-[600px]:px-2">
                <li class="text-[#C2D5E7]">
                    <p class="text-[24px] font-bold !text-white leading-relaxed">{{ $t("footer.opis1") }}<span class="text-[#007CFB]">Cleaning Club!</span></p>
                    <p class="my-4 w-[250px]">{{ $t("footer.opis2") }}</p>
                </li>
                <li class="text-[#C2D5E7] text-[14px]">
                    <p class="text-[24px] font-bold !text-white leading-relaxed max-[600px]:mt-8 max-[600px]:text-left">INFO:</p>
                    <a href="tel:+385915078575" class="flex gap-[0.5em] my-4"><img src="../../../assets/navbar-footer/phone_footer.svg" alt="" class="w-[20px]">+385-91-507-8575</a>
                    <a href="mailto:cleaning.club78@gmail.com" class="flex gap-[0.5em]"><img src="../../../assets/navbar-footer/mail_footer.svg" alt="" class="w-[20px]">cleaning.club78@gmail.com</a>
                    <div class="flex pt-4 gap-4">
                       <a href=""><img src="../../../assets/navbar-footer/facebook_footer.svg" alt="" class="w-[30px] h-[30px] "></a> 
                       <a href="https://www.instagram.com/cleaning.club78/"><img src="../../../assets/navbar-footer/instagram_footer.svg" alt="" class="w-[30px] h-[30px]"></a> 
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="w-full bg-[#1a1a1a] flex items-center ">
        <div class="flex justify-center  items-center w-full text-white py-[5px]  max-[460px]:flex  max-[460px]:flex-col  max-[460px]:justify-center">
            Copyright ©2024 Designed by <a href="https://agencycroatia.com/#/" class="pl-[5px] font-bold">NewAge</a>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>