<template>
  <main>
    <!-- [Listagem vazia] -->
    <h1>Seus Livros</h1>
    <div v-if="isListEmpty" class="table-empty-container">
      <p>
        Sua lista está vazia, clique no botão cadastrar para começar a
        preencher sua lista.
      </p>
      <div class="add-btn" title="Adicionar Livro">
        <button>+ Adicionar</button>
      </div>
    </div>

    <!-- [Table] -->
    <div v-else class="table-container">
      <div class="filter-add-book">
        <div class="search-container" @click="searchBook()">
          <input type="search" placeholder="Search book " />
          <img src="../../assets/svg/search-icon.svg" alt="Search Icon">
        </div>
        <div class="add-btn" title="Adicionar Livro">
          <button>+ Adicionar</button>
        </div>
      </div>

      <div class="table-scroll">
        <table>
          <thead>
            <tr>
              <th class="border-id">#</th>
              <th>Título</th>
              <th>Autor</th>
              <th>Data de Início</th>
              <th>Data de Fim</th>
              <th>Status</th>
              <th class="border-acoes">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="book in books" :key="book.id">
              <td>{{ book.id }}</td>
              <td :title="book.title">{{ book.title }}</td>
              <td :title="book.author">{{ book.author }}</td>
              <td>{{ book.date_initial }}</td>
              <td>{{ book.date_end }}</td>
              <td><p :class="statusClass(book.status_read)">{{ book.status_read }}</p></td>
              <td class="icon-acoes">
                <img src="../../assets/svg/edit-icon.svg" alt="Edit Icon" @click="editBook(id)">
                <img src="../../assets/svg/delete-icon.svg" alt="Delete Icon" @click="removeBook(id)">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const isListEmpty = false;

const books = ref([
  {
    id: 1,
    title: 'Teste quando ter mais dados na linha a linha ficarar assim consertar isso',
    author: 'Teste competindo com as outras linhas',
    date_initial: '10/10/2023',
    date_end: '10/01/2024',
    status_read: 'Lido'
  },
  {
    id: 1,
    title: 'Teste',
    author: 'Teste',
    date_initial: '10/10/2023',
    date_end: '10/01/2024',
    status_read: 'Lido'
  },
  {
    id: 1,
    title: 'Teste',
    author: 'Teste',
    date_initial: '10/10/2023',
    date_end: '10/01/2024',
    status_read: 'Lendo'
  },
  {
    id: 1,
    title: 'Teste',
    author: 'Teste',
    date_initial: '10/10/2023',
    date_end: '10/01/2024',
    status_read: 'Lerei'
  },
  {
    id: 1,
    title: 'Teste',
    author: 'Teste',
    date_initial: '10/10/2023',
    date_end: '10/01/2024',
    status_read: 'Lido'
  }
]); // recebe os valores

function editBook(id) {
  console.log("Editar livro!", id);
}

function removeBook(id) {
  console.log("Remover livro!", id);
}

function searchBook() {
  console.log("Procurar livro!");
}

function statusClass(status) {
  switch(status) {
    case 'Lido':
      return 'status-lido';
    case 'Lendo':
      return 'status-lendo';
    case 'Lerei':
      return 'status-lerei';
    default:
      return 'status-default';
  }
}

// import api from "@/boot/axios";
// import { onMounted, ref } from "vue";






// // async function buscarDados() {
// //   const { data } = await api.get("/book"); // requisição para pegar todos os dados dos livros cadastrados
// //   books.value = data;
// //   console.log(books.value);
// // }

// // onMounted(() => {
// //   buscarDados();
// // });
</script>

<style scoped>
* {
  background-color: #fff;
  color: #000;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 80%;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
  margin: 0px auto;
}

h1 {
  text-align: center;
  font-size: 32px;
  margin: 20px 0;
  border-bottom: inset;
  width: 90%;
}

.table-empty-container p {
  color: #9b9a9a;
  margin-bottom: 20px;
}

.add-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-btn button {
  border: none;
  background-color: #6f5cc3;
  color: #fff;
  padding: 8px 30px;
  font-size: 1em;
  border-radius: 6px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: .5s;
}

.add-btn button:hover {
  transition: .5s;
  opacity: .8;
}

.table-container {
  width: 100%;
  padding: 0 15px;
}

.filter-add-book {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.search-container {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin-right: 10px;
}

.search-container input[type="search"] {
  width: 100%;
  border: none;
  padding: 10px 40px 10px 10px;
  background: #8080801b;
  border-radius: 6px;
  box-sizing: border-box;
}

.search-container input[type="search"]:focus {
  outline-color: #8080801b;
}

.search-container img {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  cursor: pointer;
  background: transparent;
}

/* Estilo geral da tabela */
table {
  width: 100%;
  border-collapse: collapse;
}

table th,
table td {
  padding: 8px;
  text-align: left;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Estilizando o cabeçalho da tabela */
table th {
  background-color: #fcba0344;
  color: #000;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  font-size: 0.9em;
}

.border-id {
  border-top-left-radius: 12px;
  width: 5%;
}

.border-acoes {
  border-top-right-radius: 12px;
}

.thead-titulo {
  width: 200px;
}

/* Estilizando as linhas da tabela */
table td {
  border-bottom: 1px solid #ffedbc;
  padding: 10px;
  text-align: center;
}

.status-lido {
  background-color: #1976D2;
  color: #fff;
  padding: 2px;
  border-radius: 50px;
}

.status-lendo {
  background-color: #24A397;
  color: #fff;
  padding: 2px;
  border-radius: 50px;
}

.status-lerei {
  background-color:  #FBBC04;
  color: #fff;
  padding: 2px;
  border-radius: 50px;
}

.status-default {
  background-color: #808080;
  color: #fff;
}


.icon-acoes {
  width: 10%;
}

.icon-acoes img {
  cursor: pointer;
}

@media (max-width: 1400px) {
  .table-scroll {
    max-width: 1100px;
    overflow-x: auto;
  }
}
@media (max-width: 1300px) {
  .table-scroll {
    max-width: 900px;
    overflow-x: auto;
  }
}
@media (max-width: 1200px) {
  .table-scroll {
    max-width: 900px;
    overflow-x: auto;
  }
}
@media (max-width: 900px) {
  .table-scroll {
    max-width: 800px;
    overflow-x: auto;
  }
}
@media (max-width: 800px) {
  .table-scroll {
    max-width: 700px;
    overflow-x: auto;
  }

}
@media (max-width: 700px) {
  .table-scroll {
    max-width: 600px;
    overflow-x: auto;
  }
}
@media (max-width: 600px) {
  main {
    height: 100vh;
  }
  .table-scroll {
    max-width: 600px;
    overflow-x: auto;
  }
}
@media (max-width: 500px) {
  .table-scroll {
    max-width: 600px;
    overflow-x: auto;
  }
}
@media (max-width: 400px) {
  .table-scroll {
    max-width: 400px;
    overflow-x: auto;
  }
}
@media (max-width: 350px) {
  .table-scroll {
    max-width: 400px;
    overflow-x: auto;
  }
}
</style>
