<template>
  <div class="container-form">
    <img src="../../assets/svg/logo.svg" alt="Logo">
    <h3>Welcome back to the SGL</h3>
    <form @submit.prevent="signIn()">
      <div class="container-input">
        <label for="email">E-mail</label>
        <input v-model="form.email" type="email" name="email" id="email" placeholder="example@mail.com" />
      </div>
      <div class="container-input">
        <label for="password">Password</label>
        <input v-model="form.password" type="password" name="password" id="password" label="Password"
          placeholder="***************" />
      </div>
      <div class="container-submit">
        <input type="submit" value="Log in">
      </div>
    </form>
    <p>
      <router-link class="create-account-link" to="/forget-password">Forget Password?</router-link>
    </p>
    <p>Don't have account?
      <router-link class="create-account-link" to="/create-user">Sign up</router-link>
    </p>
    <Message :msg="msg" v-show="msg" :backgroundColorClass="type" />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import api from "@/boot/axios";
import Message from "../MessageFeedback.vue";
import { useAuthStore } from "@/stores/auth";

const router = useRouter();
const msg = ref(null);
const type = ref(null);
const auth = useAuthStore();

const form = ref({
  email: "rafaela@example.com", // passando para facilitar, depois remover
  password: "123@mudaR",
});

// realizar o login do usuário
async function signIn() {
  try {
    if (!form.value.email || !form.value.password) {
      type.value = "error";
      msg.value = "Preencha os campos corretamente!";
      setTimeout(() => (msg.value = ""), 2000);
    }

    const { data } = await api.post("/login", form.value); // acessa os usuários para fazer a verificação

    // Armazenar o token e o id_user no armazenamento local
    auth.setToken(data.acess_token);
    auth.setUser(data.id_user);

    if (data.acess_token) {
      type.value = "sucess";
      msg.value = "Login feito com sucesso!";

      setTimeout(() => (msg.value = ""), 1000);
      setTimeout(() => router.push("/book"), 1000); // realiza o login
    }
  } catch (error) {
    if (error.response) {
      type.value = "error";
      msg.value = "Preencha os campos corretamente!";
      setTimeout(() => (msg.value = ""), 2000);
      
      console.log("Server responded with:", error?.response?.data);
      console.log("HTTP status code:", error.response.status);
    } else {
      console.log("Error details:", error.message);
    }
  }
}

// Função para voltar para a tela principal
// function backToHome() {
//   router.push({ name: "home" });
// }
</script>

<style scoped>
* {
  background-color: #fff;
  color: #000;
}

.container-form img {
  display: block;
  margin: 0 auto;
}

h3 {
  text-align: center;
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

.create-account-link {
  color: #956D00;
  text-decoration: none;
  transition: color .5s ease-in-out;
}

.create-account-link:hover {
  color: #ffbb00;
  transition: color .5s ease-in-out;
}
</style>