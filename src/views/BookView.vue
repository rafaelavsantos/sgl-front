<template>
  <div class="container-book">
    <aside class="aside-container" :class="toggleAsideActive ? 'asideActive' : 'asideHidden'">
      <EssencialLinks></EssencialLinks>
    </aside>
    <main class="main-container">
      <HeaderComponent @activeAside="activeAside"></HeaderComponent>
      <div class="content-container">
        <router-view></router-view>
      </div>
      <div>
        <FooterComponent></FooterComponent>
      </div>
    </main>
  </div>
</template>

<script setup>
import EssencialLinks from "../components/aside/EssencialLinks.vue";
import HeaderComponent from "../components/header/HeaderComponent.vue";
import FooterComponent from "../components/footer/FooterComponent.vue";
import { ref } from "vue";

const toggleAsideActive = ref(false);

function activeAside() {
  toggleAsideActive.value = !toggleAsideActive.value;
}
</script>

<style scoped>
.container-book {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.aside-container {
  width: 250px;
  background-color: #FFE082;
  flex-shrink: 0;
  transition: 0.5s ease;
}

.main-container {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.content-container {
  flex: 1;
  background-color: #FFF8E1;
}

.asideHidden {
  width: 0;
  overflow: hidden;
}

.asideActive {
  width: 250px;
}
</style>