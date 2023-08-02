<template>
  <div>
    <h1>Numero par ou impar</h1>
    <input type="number" placeholder="Digite o número" v-model="numero" />
    <button @click="verificar()">Verificar</button>
    <span>{{ resultado }}</span> 
  </div>
</template>

<script>
export default {
  data(){
    return {
      numero: 0,
      resultado: ""
    }
  },

  methods: {
    verificar() {
      if(this.numero === "") {
        alert("Digite um número")
        return
      } else if (this.numero % 2 === 0) {
        this.resultado = "O número é par!"
      } else {
        this.resultado = "O número é impar"
      }
    }
  }
  
}
</script>

<style>
    
</style>
