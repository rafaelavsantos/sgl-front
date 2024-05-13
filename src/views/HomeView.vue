<template>
  <div class="home">
    <HeaderHome />
    <BannerHome />
    <CardHome id="books" />
    <span class="material-symbols-outlined icon" @click="backToStart('.home')">
      arrow_upward
    </span>
    <FooterHome />
  </div>
</template>

<script setup>
// @ is an alias to /src
import HeaderHome from '@/components/home/HeaderHome.vue';
import BannerHome from '@/components/home/BannerHome.vue';
import CardHome from '@/components/home/CardHome.vue';
import FooterHome from '@/components/home/FooterHome.vue';

function backToStart(sectionId) {
  const element = document.querySelector(sectionId);
  if (element) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Linden+Hill&display=swap");

.icon {
  display: flex;
  justify-content: flex-end;
  margin: 0 5% 2% 0;
  cursor: pointer;
  font-size: 25px;
}
</style>
