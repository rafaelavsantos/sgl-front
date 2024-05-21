<template>
  <div class="container">
    <!-- Esse é o layout da pagina -->
    <section class="section-form">
      <router-view></router-view>
    </section>
  
    <section class="section-img">
      <!-- [IMG] -->
      <img src="../assets/svg/book-main.svg" alt="Book">
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
* {
  background-color: #fff;
  color: #000;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
}

.section-form {
  flex-grow: 0.3;
  padding: 35px;
}

.section-img {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Garantir que a seção ocupe 100% da altura da viewport */
}

.section-img img {
  width: 100%; /* A imagem deve ocupar 100% da largura */
  height: 100%; /* A imagem deve ocupar 100% da altura */
  object-fit: cover; 
}
</style>