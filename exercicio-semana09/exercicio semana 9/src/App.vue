<template>
  <Header />
  <FormularioNovoMedicamento @cadastrar="AdicionaMedicamento" />
  <div>

  </div>
</template>
<script>
    import {v4 as uuidv4} from 'uuid'; 
    import Header from "./components/Header.vue"
    import FormularioNovoMedicamento from "./components/FormularioNovoMedicamento/index.vue"

  export default {
    components : {
      Header,
      FormularioNovoMedicamento, 
    },
    data() {
      return {
        listaMedicamentos: []
      }
    },

    methods: {
      AdicionaMedicamento(nome, laboratorio, preco) {
        let novoMedicamento = {
          id: uuidv4(), 
          nome: nome,
          laboratorio: laboratorio,
          preco: preco,
          favorito: false 
        }
      }
    },
  }
</script>
<style scoped>
  
</style>