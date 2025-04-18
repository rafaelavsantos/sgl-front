<template>
    <div>
        <p>SGL</p>
        <h4 @click="goToDashboard">
            <LayoutDashboard /> Dashboard
        </h4>
        <h4 @click="goToBook">
            <BookMarked /> Books
        </h4>
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
    router.push('/book')
}
</script>

<style scoped>
p {
    padding: 5px;
}

h4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    margin: 5px 15px;
    cursor: pointer;
}
</style>