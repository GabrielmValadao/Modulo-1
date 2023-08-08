<template >
  <div>
    <form @submit.prevent="handleLogin" class="formulario">

      <div class="error-box">
        <ul>
          <li v-if="errorInputEmail"> {{ errorInputEmail }} </li>
          <li v-if="errorInputPassword"> {{ errorInputPassword }} </li>
        </ul>
      </div>
      <!-- teste para ver se esta pegando email e senha 
        {{ email }}
        {{ password }}
      -->

      <input type="e-mail" placeholder="Digite o e-mail" v-model="email" />

      <input type="password" placeholder="Digite sua senha" v-model="password" />


      <button type="submit">Logar</button>

    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      errorInputEmail: '',
      errorInputPassword: ''
    }
  },

  methods: {
    handleLogin() {

      // limpa os campos após preencher os inputs
      this.errorInputEmail = ''
      this.errorInputPassword = ''

      if (this.email === '') this.errorInputEmail = 'Digite o e-mail'
      if (this.password === '') this.errorInputPassword = 'Digite a senha'

      //efetua o login
      
    }
  }
}
</script>
<style scoped>
.error-box {
  background-color: tomato;
  width: 80%;
  color: #fff;
}

.formulario {
  padding: 5px;
  margin: 40px auto;
  width: 40%;

  border-radius: 4px;
  border: 1px solid #383737;

  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  padding: 10px;

}

.input-area {
  width: 80%;

  display: flex;
  flex-direction: column;
}

.input-area input {
  width: 100%;
}

.texto-erro {
  color: red;
  margin: 4px;
}

input {
  padding: 8px;
  height: 54px;
  width: 80%;
  border-radius: 8px;
  border: 1px solid #756767;
  outline: none;
}

button {
  width: 80%;
  height: 54px;
  background-color: #3578E5;

  color: white;
  font-size: 18px;
  border-radius: 8px;
  border: none;
}

button:hover {
  background-color: #286ee0;
}

.input-error {
  border-color: red;
}
</style>