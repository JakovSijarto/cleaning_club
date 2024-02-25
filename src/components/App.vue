<template>
  <div>
    <navbar/>
      <router-view>
      </router-view>
    <footer_page/>
  </div>
</template>
<script setup>
import navbar from "./pages/navbar_footer/navbar.vue"
import footer_page from "./pages/navbar_footer/footer.vue"
</script>
<style>
.router-link-active{
  border-bottom: 1px solid white;
}
@media only screen and (max-width: 570px) {
  .router-link-active{
  border-bottom: 1px solid rgb(0, 0, 0);
}}
.fade-enter-from, .fade-leave-to{
  opacity:0;
}
.fade-enter-active,.fade-leave-active{
  transition: opacity 0.3s ease-out;
}
</style>