<template>
    <div class="card">
        <button @click="$emit('favoritar', id)">Favoritar</button>
        <img src="https://farmaceuticodigital.com/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-20-at-11.27.36-730x669.jpeg.webp" alt="imagem do medicamento" :width="150"/>
        <p>Nome: {{ nome }}</p>
        <p>Laboratório: {{ laboratorio }}</p>
        <p>Preço: {{ preco }}</p>
    </div>
</template>
<script>
export default {
    props : ['nome', 'laboratorio', 'preco', 'favorito', 'id']
}
</script>
<style scoped>
    .card {
        padding: 2px;
        display: flex;
        flex-direction: column;
        width: calc(100%/4);
        margin: 1em;
        background-color:rgb(247, 247, 247); 
        color: black;     
    }
</style>