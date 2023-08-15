<template>
  <h1>Formulario de cadastro de cliente</h1>
  <form @submit.prevent="handleSubmit">
    <label for="name">Nome:</label>
    <input type="text" id="name" placeholder="Digite seu nome" v-model="name" />
    {{ errors.name }}

    <label for="age">Idade:</label>
    <input type="date" id="age" placeholder="Digite sua idade" v-model="age" />
    {{ errors.age }}
    <label for="email">E-mail:</label>
    <input
      type="email"
      id="email"
      placeholder="Insira seu email"
      v-model="email"
    />
    {{ errors.email }} 
    <button type="submit">Enviar</button>
  </form>
</template>
<script>
/** PASSOS PARA UTILIZAR O YUP PARA VALIDAR UM FORMULARIO
 * 
 * 1 - Instale o yup no projeto usando o comando 'npm install yup'
 * 2 - Importa o yup no local que será utilizado
 * 3 - Crie o schema para servir de base para validação dos dados
 * 4 - Valide os dados usando schema
 * 5 - Se tiver erros, valide quais foram os campos com erros e exiba uma mensagem para o usuario
 */

import * as yup from "yup"
import {captureErrorYup} from '../src/assets/utils/captureErroYup' 

export default {
  data() {
    return {
      name: "",
      age: "",
      email: "",
      errors: {}
    };
  },

  methods: {
    handleSubmit() {
      
      const usuarioSchema = Yup.object().shape({
        name: Yup.string().required("Nome é obrigatório!"),
        age: Yup.number().required("Informe sua idade!"),
        email: Yup.string().email().required("Digite um e-mail válido!"),
      });

      try {
        usuarioSchema.validateSync(
          {
          name: this.name,
          age: this.age,
          email: this.email,
        },
        // verifica todas as validações e informa as que tiveram problemas
        {abortEarly: false}
        
        );
      } catch (error) {
        if(error instanceof Yup.ValidationError){
          this.errors = captureErrorYup(error) 
        }
      }
    },
  },
};
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
