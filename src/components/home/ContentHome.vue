<template>
  <div class="card" style="max-width: 600px;">
    <div class="img">
      <img :src="props.src" :alt="props.alt">
    </div>
    <div class="content">
      <h2>{{ props.title }}</h2>
      <p>{{ props.description }}</p>
      <a :href="props.href" target="_blank">Saiba mais</a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  src: {
    type: String,
    default: "Imagem"
  },
  alt: {
    type: String,
    default: "Texto Alternativo"
  },
  title: {
    type: String,
    default: "Título"
  },
  description: {
    type: String,
    default: "Descrição"
  },
  href: {
    type: String,
    default: "Link"
  }
})
</script>

<style scoped>
.card {
  margin: 0px auto;
  margin-bottom: 20px;
  border: 2px solid var(--gold);
  display: flex;
  flex-direction: row;
  padding: 10px;
}

.img {
  display: flex;
  width: 20%;
}

.content {
  width: 80%;
}

.img img {
  width: 100px;
  margin: 0 auto;
}

.content h2 {
  font-size: 1.5em;
  text-align: center;
  padding: 10px;
}

.content p {
  text-align: center;
  line-height: 1.5em;
}

.content a {
  display: block;
  margin: 10px auto;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  padding: 5px 0;
  border-radius: 5px;
  background-color: var(--gold);
  box-shadow: 2px 2px 10px rgba(252, 186, 3, 0.412);
  color: var(--dark);
  width: 150px;
  transition: 0.6s ease;
}

.content a:hover {
  background-color: var(--gold-dark);
  cursor: pointer;
}
</style>