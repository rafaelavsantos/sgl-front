<template>
    <div class="teste">
        <CardDashboard card-color="#8566DE" quantidade="20" description="Livros Lidos"></CardDashboard>
        <CardDashboard card-color="#4311D2" quantidade="20" description="Livros Lidos"></CardDashboard>
        <CardDashboard card-color="#8566DE" quantidade="20" description="Livros Lidos"></CardDashboard>
        <CardDashboard card-color="#4311D2" quantidade="20" description="Livros Lidos"></CardDashboard>

        [GRAPHIC]
    </div>
</template>

<script setup>
import CardDashboard from '../card/CardDashboard.vue';

</script>

<style scoped>
.teste {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
</style>