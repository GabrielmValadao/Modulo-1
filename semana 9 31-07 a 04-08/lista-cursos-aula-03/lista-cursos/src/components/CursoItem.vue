<template>
    <div>
        <h1>Título: {{ titulo }} </h1> 
        <p>Duração: {{ duracao }}</p> 
        <p>Vagas: {{ vagas }}</p>
    </div>
</template>

<script>
    export default {
        props: ['titulo', 'duracao', 'vagas']
    } 
</script>

<style scoped>
    h1 {
        color: gray;
    }
</style>