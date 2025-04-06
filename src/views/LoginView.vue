<template>
    <main class="container">
        <section class="form-login">
            <!-- [FORM] -->
            <h1>SGL</h1>
            <RouterView />
        </section>
        <section class="image-login">
            <!-- [IMAGE] -->
            <img src="../assets/img/image.svg" alt="Girl reading book">
        </section>
    </main>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
}

h1 {
    color: #FCBA03;
    font-size: 2rem;
}

.form-login {
    flex: 4;
    text-align: center;
}

.image-login {
    background-color: #F3F3F3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 6;
    width: 100%;
    height: 100vh;
}

.image-login img {
    width: 500px;
}

/* Responsividade */
@media (max-width: 768px) {
    .image-login {
        display: none;
    }
}
</style>