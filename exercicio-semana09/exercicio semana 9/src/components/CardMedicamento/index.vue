<template>
    <div class="card">
        <button @click="$emit('favoritar', id)">Favoritar</button>
        <span v-if="favorito">favorito</span>
        <img src="https://farmaceuticodigital.com/wp-content/uploads/2020/11/WhatsApp-Image-2020-11-20-at-11.27.36-730x669.jpeg.webp" alt="imagem do medicamento" :width="150"/>
        <span>Nome: {{ nome }}</span>
        <span>Laboratório: {{ laboratorio }}</span>
        <span>Preço: R$ {{ preco }}</span>
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