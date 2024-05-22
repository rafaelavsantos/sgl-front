<template>
  <div class="msg-container" :class="props.backgroundColorClass">
    <p>{{ props.msg }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  msg: String, 
  backgroundColorClass: String,
});
</script>

<style scoped>
.msg-container {
  font-size: 14px;
  padding: 5px;
  width: 300px;
  text-align: center;
  margin: 30px auto;
}
.sucess {
  border: none;
  background-color: #11D23E;
}
.sucess p {
  background-color: #11D23E;
  color: #FFFFFF;
}

.error {
  border: none;
  background-color: #E30000;
}
.error p {
  background-color: #E30000;
  color: #FFFFFF;
}
</style>
