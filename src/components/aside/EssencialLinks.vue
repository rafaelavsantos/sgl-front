<template>
    <div class="container-links">
        <span>SGL</span>
        <p @click="goToDashboard">
            <LayoutDashboard /> Dashboard
        </p>
        <p @click="goToBook">
            <BookMarked /> Livros
        </p>
    </div>
</template>

<script setup>
import { BookMarked, LayoutDashboard } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToDashboard = () => {
    router.push('/dashboard')
}

const goToBook = () => {
    router.push('/livros')
}
</script>

<style scoped>
.container-links {
    height: 100vh;
}

span {
    padding: 5px;
}

p {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    margin: 15px;
    cursor: pointer;
}
</style>