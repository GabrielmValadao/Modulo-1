<template>
  <h1>Formulario de cadastro de cliente</h1>
  <form @submit.prevent="handleSubmit">
    <label for="name">Nome:</label>
    <input type="text" id="name" placeholder="Digite seu nome" v-model="name" />
    {{ erros.name }}

    <label for="age">Idade:</label>
    <input type="date" id="age" placeholder="Digite sua idade" v-model="age" />
    {{ erros.age }}
    <label for="email">E-mail:</label>
    <input
      type="email"
      id="email"
      placeholder="Insira seu email"
      v-model="email"
    />
    {{ erros.email }}
    <button type="submit">Enviar</button>
  </form>
</template>
<script>
import * as yup from "yup"


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
      const usuarioSchema = yup.object().shape({
        name: yup.string().required("Nome é obrigatório!"),
        age: yup.number().required("Informe sua idade!"),
        email: yup.string().email().required("Digite um e-mail válido!"),
      });

      try {
        usuarioSchema.validateSync(
          {
          name: this.name,
          age: this.age,
          email: this.email,
        },
        {abortEarly: false}
        
        );
      } catch (error) {
        if(error instanceof yup.ValidationError){
          this.erros = captureErroYup(error)
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
