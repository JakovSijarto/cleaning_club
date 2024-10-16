<template>
    <div class="relative inset-x-0 !bottom-0 h-[200px] bg-[#051135] w-full flex justify-center items-center max-[600px]:h-auto max-[600px]:text-center max-[600px]:py-4">
        <div class="w-[1280px] ">
            <ul class="w-full flex justify-between items-center px-4 max-[600px]:flex-col max-[600px]:px-2">
                <li class="text-[#C2D5E7]">
                    <p class="text-[24px] font-bold !text-white leading-relaxed">{{ $t("footer.opis1") }}<span class="text-[#007CFB]">Patal cleaning!</span></p>
                    <p class="my-4 w-[250px]">{{ $t("footer.opis2") }}</p>
                </li>
                <li class="text-[#C2D5E7] text-[14px]">
                    <p class="text-[24px] font-bold !text-white leading-relaxed max-[600px]:mt-8 max-[600px]:text-left">INFO:</p>
                    <span class="flex flex-row items-center"><a href="tel:+38598249896" class="flex items-center gap-[0.5em] my-4"><img src="../../../../public/navbar-footer/phone_footer.svg" alt="" class="w-[20px]">+385 98 249 896</a> <p class="px-4">/</p><a class="text-[#c2cdeb] nav-font" href="tel:+38598342314">+385 98 342 314</a></span>
                    <a href="mailto:oposepatal@gmail.com" class="flex gap-[0.5em]"><img src="../../../../public/navbar-footer/mail_footer.svg" alt="" class="w-[20px]">oposepatal@gmail.com</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="w-full bg-[#1a1a1a] flex items-center ">
        <div class="flex justify-center  items-center w-full text-white py-[5px]  max-[460px]:flex  max-[460px]:flex-col  max-[460px]:justify-center">
            Copyright ©2024 Designed by <a href="https://newagehr.eu/" class="pl-[5px] font-bold">NewAge</a>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>