<template>
  <Header />
  <FormularioNovoMedicamento @cadastrar="AdicionaMedicamento" />
  <div class="container">
    <CardMedicamento 
    v-if="!!listaMedicamentos" 
    v-for="medicamento in listaMedicamentos" 
    :key="medicamento.id"
    @favoritar="FavoritarMedicamento" 
    :nome="medicamento.nome" 
    :laboratorio="medicamento.laboratorio"
    :preco="medicamento.preco" 
    :id="medicamento.id" 
    />
  </div>
</template>
    
<script>
import { v4 as uuidv4 } from 'uuid';
import Header from "./components/Header.vue"
import FormularioNovoMedicamento from "./components/FormularioNovoMedicamento/index.vue"
import CardMedicamento from "./components/CardMedicamento/index.vue"

export default {
  components: {
    Header,
    FormularioNovoMedicamento,
    CardMedicamento
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

    },
    FavoritarMedicamento(id) {
      //editar o medicamento e marca como favorito 
      this.listaMedicamentos = this.listaMedicamentos.map(item => {
        if (item.id == id) {
          item.favorito = !item.favorito
        }
        console.log(this.listaMedicamentos)
        return(item)

      })
    }
  }
}
</script>
<style scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
    padding: 1em;
  }
</style>