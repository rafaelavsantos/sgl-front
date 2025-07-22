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
                <p @click="toggleModalVisibility">Logout</p>
            </div>
        </div>
    </header>
    <div class="logout-container" v-if="isModalVisible">
        <div class="logout">
            <h4>Logout</h4>
            <p>Você tem certeza que deseja sair? </p>
            <div class="btn">
                <button type="button" class="btn-logout" @click="backToLogin()">Logout</button>
                <button type="reset" class="btn-cancel" @click="toggleModalVisibility">Cancelar</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ChevronDown, Menu } from 'lucide-vue-next';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const emit = defineEmits();
const router = useRouter();

const isSelectVisible = ref(false);
const isModalVisible = ref(false);

const toggleSelectVisibility = () => {
    isSelectVisible.value = !isSelectVisible.value;
}

const toggleModalVisibility = () => {
    isModalVisible.value = !isModalVisible.value;
}

function toggleAside() {
    emit('activeAside');
}

const backToLogin = () => {
    router.push('/');
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
    position: relative;
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
    font-size: 13px;
    padding: 5px 15px;
    width: 93.2px;
    cursor: pointer;
}

.sigla {
    display: none;
}

.logout-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.logout {
    background-color: #fff;
    padding: 15px;
    width: 350px;
    border-radius: 4px;
}

.logout h4 {
    border-bottom: 1px solid #ccc;
    margin-bottom: 15px;
    font-size: 1.5em;
}

.logout p {
    margin-bottom: 15px;
    font-size: 1em;
    color: #919191;
}

.btn {
    display: flex;
    justify-content: end;
}

.btn-logout {
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
}

.btn-cancel {
    background-color: transparent;
    color: #000;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
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
