
<template>
  <div>

    <h1>Lista de cursos</h1> <br>
    <!-- 3 - Reendeniza na tela -->
    <!-- v-for reendeniza a lista e faz o loop -->
    <!-- key deve ser informado para o não repetir os dados da lista, por hora se usa index, se não passar o id ou qualquer valor unico dentro desse projeto, com ele o loop infinito nunca vai ocorrer  -->
    <CursoItem 
    v-for="(curso, index) in listaCursos"
    :key="index" 
    v-bind:titulo="curso.titulo" 
    :duracao="curso.duracao" 
    :vagas="curso.vagas" />

    <!-- O v-bind é uma diretiva que nos permite passar valores JS dentro das props -->

  </div>
</template>

<script>
// 1 - importa (sempre fora do export)
import CursoItem from "./components/CursoItem.vue"
export default {
  //2 - registra 
  components: {
    CursoItem
  },
  // cria a lista dos cursos
  // função que retornar um objeto
  data() {
    return {
      listaCursos: [
        {
          titulo: "HTML e CSS",
          duracao: 30,
          vagas: 40
        },
        {
          titulo: "Javascript",
          duracao: 20,
          vagas: 40
        },
        {
          titulo: "PHP",
          duracao: 20,
          vagas: 40
        }
      ]
    }
  }
}
</script>

<style scoped></style>
