<template>
  <div>
    <Card>
      <template v-slot:header>
        <h1>Titulo do meu card</h1>
      </template>
      <p>Teste card Teste card Teste card Teste card Teste card Teste card Teste card Teste card Teste card Teste card Teste card Teste card Teste card Teste card Teste card Teste card Teste card Teste card Teste card Teste card </p>

      <template #footer>
        <h6>Created By Gabriel Valadão</h6>
      </template>
    </Card>
  </div>
</template>

<script>
// importa do componente
import Card from "./components/Card.vue";

export default {
  // registra componente
  components: {
    Card,
  },
};
</script>

<style scoped>
</style>
