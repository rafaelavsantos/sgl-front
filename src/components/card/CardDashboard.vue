<template>
  <div class="card-container" :style="{ backgroundColor: props.cardColor }">
    <div>
      <img src="../../assets/img/icon.png" alt="Book">
    </div>
    <div class="card-info">
      <p>{{ props.quantidade }}</p>
      <p>{{ props.description }}</p>
    </div>
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
  cursor: pointer;
}

.card-info p {
  color: #fff;
  text-align: center;
}
</style>