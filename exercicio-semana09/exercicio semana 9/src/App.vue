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
        if (nome == "" || laboratorio == "" || preco == 0) {
          alert("Preencha todas as informações necessárias!")
          return
        }

        const novoMedicamento = {
          id: uuidv4(), 
          nome: nome,
          laboratorio: laboratorio,
          preco: preco,
          favorito: false 
        }

        this.listaMedicamentos.push(novoMedicamento)
      }
    },
  }
</script>
<style scoped>
  
</style>