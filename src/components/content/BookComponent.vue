<template>
    <div class="book-container">
        <div class="book-start">
            <div class="book-header">
                <h1>
                    <BookMarked /> Minha Coleção de Livros
                </h1>

                <div class="input-container">
                    <input type="search" id="search" placeholder="Buscar livro">
                    <Search color="#ccc" />
                </div>
            </div>
            <div class="book-content1" v-if="books.length == 0">
                <p>Sua lista está vazia, clique no botão cadastrar para começar a preencher sua lista.</p>
                <button type="button" @click="goToAddBook">+ Adicionar livro</button>
            </div>
            <div class="book-content2" v-else>
                [Segunda página]
            </div>
        </div>

    </div>
</template>

<script setup>
import { BookMarked, Search } from 'lucide-vue-next';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const books = ref([]);

const router = useRouter();

console.log(books.value.length)

const goToAddBook = () => {
    router.push('cadastro-livro')
}
</script>

<style scoped>
.book-container {
    background-color: #fff;
    margin: 2%;
    padding: 2%;
}

.book-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #D9D9D9;
}

.input-container {
    background-color: #F2F2F2;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    padding: 0 5px 0 15px;
    border-radius: 6px;
}

.input-container input {
    border: none;
    outline: none;
    background-color: transparent;
}

.book-content1 {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 15px 0;
    height: 55vh;
    border-radius: 4px;
}

.book-content1 p {
    margin-bottom: 15px;
}

.book-content1 button {
    background-color: #4311D2;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 5px 15px;
    box-shadow: 6px 7px 10px rgba(0, 0, 0, 0.25);
    box-shadow: -7px -3px 10px rgba(0, 0, 0, 0.25);
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.25);
    cursor: pointer;
}
</style>