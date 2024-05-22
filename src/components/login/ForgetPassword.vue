<template>
  <div class="container-create-form">
    <img src="../../assets/svg/logo.svg" alt="Logo">
    <div class="subtitle">
      <h3>Please enter your email adress to valid.</h3>
    </div>
    <form @submit.prevent="forgetPassword()">
      <div class="container-input">
        <label for="email">E-mail</label>
        <input v-model="form.email" type="email" name="email" id="email" placeholder="example@mail.com" />
      </div>
      <div v-if="$route.path == '/login'" class="container-input">
        <label for="password">Password</label>
        <input v-model="form.password" type="password" name="password" id="password" label="Password"
          placeholder="***************" />
      </div>
      <div  v-if="$route.path == '/login'" class="container-input">
        <label for="password">Password Confirm </label>
        <input v-model="form.confirmPassword" type="password" name="password" id="password" label="Password"
          placeholder="***************" />
      </div>
      <div class="container-submit">
        <input type="submit" value="Send">
      </div>
    </form>
    <p>You remember you password? 
      <router-link class="login-link" to="/login">Log in</router-link>
    </p>
    <Message :msg="msg" v-show="msg" :backgroundColorClass="type" />
  </div>
</template>

<script setup>
// import { useRouter } from "vue-router";
import { ref } from "vue";
// import api from "../../boot/axios";
import Message from "../MessageFeedback.vue";

// const email = false;
// const router = useRouter();
const msg = ref(null);
const type = ref(null);

const form = ref({
  email: "",
  password: "",
  confirmPassword: "",
});

// função para atualizar a senha do usuário
async function forgetPassword() {
  type.value = "error";
  msg.value = "Preencha os campos corretamente!";
  setTimeout(() => (msg.value = ""), 2000);
}

</script>

<style scoped>
* {
  background-color: #fff;
  color: #000;
}

.container-create-form img {
  display: block;
  margin: 0 auto;
}

h3 {
  width: 220px;
  text-align: center;
}

.subtitle {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-input {
  display: flex;
  flex-direction: column;
}

.container-input>input {
  background-color: #fcba0350;
  border: none;
  padding: 10px;
  border-radius: 6px;
}

.container-input>input:focus {
  outline-color: var(--gold);
}

.container-input>label {
  text-align: start;
  margin: 5px 0;
}

.container-input>label::after {
  content: ' *';
  color: red;
}

.container-submit {
  background-color: var(--gold);
  margin: 10px 0;
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 0.5s ease-in-out;
}

.container-submit>input {
  background-color: transparent;
  border: none;
  padding: 8px 0;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
}

.container-submit>input:hover {
  transition: opacity 0.3s ease-in-out;
  opacity: 0.9;
}

.container-submit:hover {
  transition: background-color 0.3s ease-in-out;
  opacity: 0.9;
}

p {
  text-align: center;
  color: #333;
  line-height: 1.3em;
  font-size: 0.9em;
}

.login-link {
  color: #956D00;
  text-decoration: none;
  transition: color .5s ease-in-out;
}

.login-link:hover {
  color: #ffbb00;
  transition: color .5s ease-in-out;
}
</style>