<template>
  <div class="dashboard-container">
    <CardDashboard card-color="#8566DE" quantidade="20" description="Livros cadastrados"></CardDashboard>
    <CardDashboard card-color="#4311D2" quantidade="8" description="Livros lidos"></CardDashboard>
    <CardDashboard card-color="#8566DE" quantidade="2" description="Livros em andamento"></CardDashboard>
    <CardDashboard card-color="#4311D2" quantidade="10" description="Próximos livros"></CardDashboard>

    <div class="graphic-container">
      <Pie id="graphic" :options="optionsChart" :data="dataChart" />
    </div>
  </div>
</template>

<script setup>
import { Pie } from 'vue-chartjs';
import CardDashboard from '../card/CardDashboard.vue';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'
import { ref } from 'vue';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const dataChart = ref({
  labels: ['Livros lidos', 'Livros em andamento', 'Livros para ler'],
  datasets: [
    {
      label: 'My Dataset',
      data: [40, 20, 12],
      backgroundColor: ['#FCBA02', '#FB9C02', '#57A2E5']
    }
  ]
})

const optionsChart = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'left',
    },
    title: {
      display: true,
      text: 'Progresso de suas leituras'
    }
  }
})
</script>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.graphic-container {
  background-color: #fff;
  box-shadow: -5px -5px 15px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  width: 500px;
  height: 300px;
  padding: 10px;
  box-sizing: border-box;
  margin: 20px;
  border-radius: 4px;
}

@media screen and (max-width: 800px) {
  .graphic-container {
    width: 350px;
  }
}
</style>