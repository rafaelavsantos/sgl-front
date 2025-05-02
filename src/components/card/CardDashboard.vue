<template>
  <div class="card-container" :style="{ backgroundColor: props.cardColor }">
    <p class="card-icon">
      <img src="../../assets/img/icon.png" alt="Book">
    </p>
    <p class="card-quant">
      {{ props.quantidade }}
    </p>
    <p class="card">
      {{ props.description }}
    </p>
  </div>
</template>

<script setup>

const props = defineProps(['cardColor', 'description', 'quantidade']);

</script>

<style scoped>
.card-container {
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin: 15px;
}

p {
  color: #fff;
}
</style>