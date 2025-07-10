<template>
    <form>
        <h3>Welcome to the website</h3>

        <div class="container-input">
            <label for="inName">Name <span class="campo-obrigatorio">*</span></label>
            <div class="input-wrapper">
                <input type="text" name="name" id="inName" placeholder="Rafaela Santos">
                <div class="input-icon">
                    <UserRound color="#fff" />
                </div>
            </div>
        </div>

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

        <div class="container-input">
            <label for="inConfirmPassword">Confirm Password <span class="campo-obrigatorio">*</span></label>
            <div class="input-wrapper">
                <input type="password" name="confirmPassword" id="inConfirmPassword" placeholder="***************">
                <div class="input-icon">
                    <LockKeyhole color="#fff" />
                </div>
            </div>
        </div>

        <div class="container-btn">
            <button type="submit">Sign Up Now</button>
        </div>
    </form>

    <p>Already have account? <router-link to="/" class="link">Login</router-link></p>
</template>

<script setup>
import { LockKeyhole, Mail, UserRound } from 'lucide-vue-next';

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
}

.container-btn:hover {
    background-color: rgba(252, 186, 3, 0.863);
}

.link {
    text-decoration: none;
    color: #956D00;
}
</style>