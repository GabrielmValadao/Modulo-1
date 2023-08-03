
<template>
  <div>
    <header>
      <h1>Lista de cursos</h1>
    </header>

  </div>
</template>

<script>
export default {
  // cria a lista dos cursos
  data() {
    // função que retornar um objeto
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
