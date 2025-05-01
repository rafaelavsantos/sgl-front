<template>
    <header class="header-container">
        <div class="logo">
            <div class="icon" @click="toggleAside">
                <Menu />
            </div>
            <img src="../../assets/logo.svg" alt="Lâmpada feliz">
            <p class="nome-completo">SISTEMA DE GERENCIAMENTO DE LEITURAS</p>
            <p class="sigla">SGL</p>
        </div>
        <div class="btn-user">
            <button>
                User
                <ChevronDown @click="toggleSelectVisibility" class="btn-cursor" />
            </button>
            <div class="select-dropdown" v-if="isSelectVisible">
                <p>Perfil</p>
                <p>Logout</p>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ChevronDown, CircleUserRound, Menu } from 'lucide-vue-next';
import { ref } from 'vue';

const emit = defineEmits();

const isSelectVisible = ref(false);

const toggleSelectVisibility = () => {
    isSelectVisible.value = !isSelectVisible.value;
}

function toggleAside() {
    emit('activeAside');
}


</script>

<style scoped>
.header-container {
    background-color: #FCBA03;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 18px;
}

.logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
}

.icon {
    height: 24px;
    width: 24px;
    cursor: pointer;
}

.btn-user {
    background-color: #FFE082;
    padding: 5px 15px;
    border-radius: 4px;
    position: relative;
}

.btn-user button {
    border: none;
    background-color: transparent;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
}

.btn-cursor {
    cursor: pointer;
}

.select-dropdown {
    background-color: #FFE082;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 10;
}

.select-dropdown p {
    padding: 5px 15px;
    width: 93.2px;
    cursor: pointer;
}

.sigla {
    display: none;
}

@media (max-width: 570px) {
    .nome-completo {
        display: none;
    }

    .sigla {
        display: block;
    }
}
</style>
