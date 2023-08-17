<template>
  <v-form ref="form" @submit.prevent="handleSubmit">
    <v-text-field 
      label="Nome" 
      variant="outlined" 
      :rules="[v => !!v || 'Nome é obrigatório!']"
      v-model="nome"></v-text-field>

    <v-text-field 
      label="Email" 
      variant="outlined" 
      :rules="[v => !!v || 'Email é obrigatório!']"
      v-model="email"></v-text-field>

    <v-btn variant="tonal" color="green" type="submit">Cadastrar</v-btn>
  </v-form>
</template>
<script>
export default {
  data(){
    return {
      nome: "",
      email: "",
    }
  },
  methods: {
    async handleSubmit(){
      const {valid} = await this.$refs.form.validate()

      if(valid){
        alert('Chamou o submit')
      }

    }
  }
}
</script>