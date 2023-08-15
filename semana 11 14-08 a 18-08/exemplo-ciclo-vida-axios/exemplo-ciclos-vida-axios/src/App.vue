
<template >
  <div>
    <h1>ciclos de vida</h1>
    <h2>Nome: {{ usuario.name }}</h2>
  </div>
</template>
<script>
/**
 * PASSOS PARA UTILIZAR O AXIOS
 * 
 * 1 - [x] instalar o axios
 *    `npm install axios`
 * 2 - [x] importar o axios no local que será utilizado
 *    `import axios from "axios"`
 * 3 - [] utilizar o axios usando o método (GET, POST, PUT...) desejado
 */
import axios from "axios"

export default {
  data() {
    return {
      usuario: {}
    }
  },

  mounted() {
    axios.get('https://api.github.com/users/Bruno-Costa-fig')
    .then(res => this.usuario = res.data) 
    .catch(erro => console.log(erro))
  }
}
</script>
<style scoped>
  
</style>