<template>
    <form @submit.prevent.stop="realizarLogin">
        <h3>Welcome back to the website</h3>

        <div class="container-input">
            <label for="inEmail">Email <span class="campo-obrigatorio">*</span></label>
            <div class="input-wrapper">
                <input type="email" name="email" id="inEmail" placeholder="rafaela@example.com">
                <div class="input-icon">
                    <Mail color="#fff" />
                </div>
            </div>
        </div>

        <div class="container-input">
            <label for="inPassword">Password <span class="campo-obrigatorio">*</span></label>
            <div class="input-wrapper">
                <input type="password" name="password" id="inPassword" placeholder="***************">
                <div class="input-icon">
                    <LockKeyhole color="#fff" />
                </div>
            </div>
        </div>

        <div class="container-btn">
            <button type="submit">Login Now</button>
        </div>
    </form>

    <p> <router-link to="/esqueceu-senha" class="link">Forget Password?</router-link></p>
    <p>Don't have account? <router-link to="/cadastro" class="link">Sign up</router-link></p>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { LockKeyhole, Mail } from 'lucide-vue-next';

const router = useRouter();

const realizarLogin = () => {
    console.log('Aquu')
    router.push('/dashboard')
}



</script>

<style scoped>
form {
    max-width: 400px;
    margin: 0 auto;
}

.container-input {
    text-align: start;
    margin: 2% 0;
    padding: 0 5%;
}

.input-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #f3f3f3;
    border-radius: 4px;
}

.input-wrapper input {
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    padding-left: 10px;
}

.input-icon {
    background-color: #FCBA03;
    padding: 6px 6px 0 6px;
    border-radius: 4px;
}

.campo-obrigatorio {
    color: #ff0000;
}

.container-btn {
    background-color: #FCBA03;
    margin: 3% 5%;
    padding: 5px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0px 8px 12px rgba(252, 186, 3, 0.3);
    transition: background-color 0.5s ease, color 0.5s ease;
}

.container-btn button {
    background-color: transparent;
    border: none;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
}

.container-btn:hover {
    background-color: rgba(252, 186, 3, 0.863);
}

.link {
    text-decoration: none;
    color: #956D00;
}
</style>