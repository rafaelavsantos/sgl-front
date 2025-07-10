<template>
    <div class="book-container">
        <div class="book-header">
            <h1>
                <BookMarked /> Cadastro de Livros
            </h1>
        </div>

        <div class="input-container">
            <div class="input-form">
                <label for="inTitle">Título: <span class="campo-obrigatorio">*</span></label>
                <input type="text" name="title" id="inTitle" placeholder="Digite o nome do livro">
            </div>

            <div class="input-form">
                <label for="inAuthor">Autor: </label>
                <input type="text" name="author" id="inAuthor" placeholder="Digite o nome do autor">
            </div>

            <div class="input-form">
                <label for="inQtdPage">Quantidade de página:</label>
                <input type="number" name="qtdPage" id="inQtdPage" placeholder="Digite quantidade de página do livro">
            </div>

            <div class="input-form">
                <label for="inDtStart">Data de início:</label>
                <input type="date" name="dtStart" id="inDtStart"
                    placeholder="Digite a data de início da leitura do livro">
            </div>

            <div class="input-form">
                <label for="inDtEnd">Data final:</label>
                <input type="date" name="dtEnd" id="inDtEnd" placeholder="Digite a data de início da leitura do livro">
            </div>

            <div class="input-form">
                <!-- [APENAS PARA O DESIGN] -->
            </div>
        </div>

        <div class="container-switch">
            <input class="switch switch--shadow" type="checkbox" name="switch-shadow" id="switch-shadow" />
            <label for="switch-shadow"></label>
            <p>Lendo no momento</p>
        </div>

        <div class="btn">
            <input type="submit" value="Salvar">
            <input type="reset" value="Cancelar" @click="goToBooks">
        </div>
    </div>
</template>

<script setup>
import { BookMarked } from 'lucide-vue-next';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const books = ref([]);
const router = useRouter();

console.log(books.value.length)
const goToBooks = () => {
    router.push('livros')
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
    display: flex;
    flex-flow: row wrap;
    gap: 16px;
}

.input-form {
    flex: auto;
    display: flex;
    flex-direction: column;
    margin: 6px 0;
    width: 500px;
}

.input-form input {
    background-color: #FEEAB3;
    padding: 10px;
    border: none;
    outline-color: #fce8b1;
    border-radius: 8px;
}

.align-input {
    display: flex;
    flex-direction: row;
    gap: 16px;
}

.campo-obrigatorio {
    color: #ff0000;
}

.container-switch {
    display: flex;
    align-items: center;
}

.container-switch p {
    font-size: 16px;
    align-items: center;
    padding: 2px 0 0 5px;
}

.switch {
    position: absolute;
    visibility: hidden;
}

.switch+label {
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    user-select: none;
}

.switch--shadow+label {
    padding: 2px;
    width: 40px;
    height: 20px;
    background-color: #dddddd;
    border-radius: 30px;
}

.switch--shadow+label::before,
.switch--shadow+label::after {
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
    content: "";
}

.switch--shadow+label::before {
    right: 1px;
    background-color: #f1f1f1;
    border-radius: 3cm;
    transition: 0.4s;
}

.switch--shadow+label::after {
    width: 20px;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.4s;
}

.switch--shadow:checked+label::before {
    background-color: #8ce196;
}

.switch--shadow:checked+label::after {
    transform: translateX(20px);
}

.btn {
    margin-top: 15px;
}

.btn input[type="submit"] {
    background-color: #FCBA03;
    color: #000;
    border: none;
    padding: 5px 20px;
    border-radius: 8px;
    margin-right: 15px;
    cursor: pointer;
}

.btn input[type="reset"] {
    background-color: #000;
    color: #FCBA03;
    border: none;
    padding: 5px 20px;
    border-radius: 8px;
    cursor: pointer;
}

/* Responsividade */
@media (max-width: 640px) {

    .input-form {
        width: 100%;
    }
}
</style>