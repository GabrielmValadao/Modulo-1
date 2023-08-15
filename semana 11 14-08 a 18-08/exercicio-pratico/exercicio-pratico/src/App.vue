<template>
  <div>
    <h1>Informações do endereço</h1>
    <p> CEP: {{ endereco.cep }}</p>
    <p> Logradouro: {{ endereco.logradouro }}</p>
    <p> Complemento: {{ endereco.complemento }}</p>
    <p> Bairro: {{ endereco.bairro }}</p>
    <p> Localidade: {{ endereco.localidade }}</p>
    <p> UF: {{ endereco.uf }}</p>
    <p> IBGE: {{ endereco.ibge }}</p>
    <p> Gia: {{ endereco.gia }}</p>
    <p> DDD: {{ endereco.ddd }}</p>
    <p> Siafi: {{ endereco.siafi }}</p>
    
  </div>
</template>
<script>
import axios from "axios"

export default {
  data() {
    return {
      endereco: {}
    }
  },
  mounted() {
    axios.get('https://viacep.com.br/ws/01001000/json/')
    .then(res => this.endereco = res.data)
  }
}
</script>
<style scoped>
  
</style>