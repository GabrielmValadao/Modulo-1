
<template>
  <div>
    <header>
      <h1>Lista de cursos</h1>
      <!-- 3 - Reendeniza na tela --> 
      <CursoItem />
    </header>

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
          duracao: 20,
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
