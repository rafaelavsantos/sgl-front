<template>
  <div class="header">
    <p @click="$router.push('')">SGL</p>
    <nav class="navBar">
      <router-link :to="{ name: 'home' }" class="items-nav" id="home">Home</router-link>
      <router-link to="#books" @click="scrollToSection('#books')" class="items-nav">+
        Popular Books</router-link>
      <button @click="navigateToLogin()" class="btn-login">Login</button>
    </nav>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter();

function navigateToLogin() {
  router.push('/login')
}

function scrollToSection(sectionId) {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 2px solid var(--gold);
}

.header p {
  font-weight: bold;
  font-size: 1.5em;
  padding-left: 20px;
  cursor: pointer;
}

.navBar>.items-nav {
  text-decoration: none;
  color: var(--gold);
  margin: 0 20px;
  font-weight: bold;
}

.items-nav {
  transition: border-bottom 0.3s ease;
  border-bottom: 2px solid transparent;
}

.navBar>.items-nav:hover {
  border-bottom: 2px solid var(--gold);
}

#home {
  border-bottom: 2px solid var(--gold);
}

.btn-login {
  cursor: pointer;
  background-color: var(--gold);
  color: var(--dark);
  border: none;
  border-radius: 2px;
  margin: 0 20px;
  padding: 5px 20px;
  font-weight: bold;
  font-size: 1em;
  transition: 0.3s ease;
}

.btn-login:hover {
  background-color: var(--gold-dark)
}
</style>