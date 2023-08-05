<template>
  <Header />
  <FormularioNovoMedicamento @cadastrar="AdicionaMedicamento" />
  <div>

  </div>
</template>
<script>
    import Header from "./components/Header.vue"
    import FormularioNovoMedicamento from "./components/FormularioNovoMedicamento/index.vue"

  export default {
    components : {
      Header,
      FormularioNovoMedicamento, 
    }
  }
</script>
<style scoped>
  
</style>