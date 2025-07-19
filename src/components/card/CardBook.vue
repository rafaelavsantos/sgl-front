<template>
  <div class="card-container">
    <div v-if="props.img">
      <img :src="props.img" alt="Book">
    </div>
    <div class="card-information">
      <div class="card-title">{{ props.title }}</div>
      <p><strong>Autor:</strong> {{ props.author }}</p>
      <p><strong>Quantidade de páginas:</strong> {{ props.quant }}</p>
      <p><strong>Status:</strong> <span class="card-status">{{ props.status }}</span></p>
      <div class="card-icon">
        <Pencil color="#008000" />
        <Trash2 color="#EA0000" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Pencil, Trash2 } from 'lucide-vue-next';


const props = defineProps(['title', 'author', 'quant', 'status', 'img']);

</script>

<style scoped>
.card-container {
  width: 450px;
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 4px;
  box-shadow: -5px -5px 15px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
}

.card-information {
  border-left: 1px solid #ccc;
  padding-left: 15px;
}

.card-information p {
  margin-bottom: 5px;
  color: #000;
}

.card-title {
  text-align: center;
  font-weight: 600;
  margin-bottom: 15px;
}

.card-status {
  background-color: #3B49E7;
  color: #fff;
  padding: 2px 15px;
  border-radius: 20px;
}

.card-icon {
  text-align: end;
}

img {
  width: 100px;
}
</style>