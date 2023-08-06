<template >
    <div class="container">
        <h4>Formulário de Cadastro de Medicamentos</h4>
        <br>
        <label for="nome">Nome do Medicamento:</label>
        <input type="text" id="nome" placeholder="Medicamento" v-model="nome"/>

        <label for="labotario">Nome do Laboratório:</label>
        <input type="text" id="laboratorio" placeholder="Laboratório" v-model="laboratorio"/>

        <label for="preco">Preço:</label>
        <input type="number" id="preco" placeholder="Preço em R$" v-model="preco"/>

        <button @click="$emit('cadastrar', nome, laboratorio, preco)">Cadastrar</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nome: "",
            laboratorio: "",
            preco: 0
        }
    }
}
</script>
<style scoped>
    .container {
        margin: 0 auto;
        padding: 20px;
        width: 30%;
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .container>h4 {
        margin: 0 auto;
    }

    input {
        padding: 3px;
    }

</style>