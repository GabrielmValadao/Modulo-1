<template>
    <div>
        <form class="formulario">
            <h2>Criar Conta</h2>
            <label for="nome">Nome:</label>
            <input type="text" id="nome" placeholder="Digite seu nome completo" v-model="nome" />
            <label for="email">E-mail:</label>
            <input type="email" id="email" placeholder="Digite seu email para cadastro" v-model="email" />
            <label for="telefone">Telefone:</label>
            <input type="number" id="telefone" placeholder="Digite seu telefone" v-model="telefone" />
            <label for="senha">Senha</label>
            <input type="password" id="senha" placeholder="Digite sua senha" v-model="senha" />
            <label for="confimar-senha">Confirmar senha:</label>
            <input type="password" id="confirmar-senha" placeholder="Confirme sua senha" v-model="confirmarSenha" />



            <label for="sponsor">Patrocinador:</label>
            <select id="sponsor" v-model="sponsor">
                <option value="">Sem patrocinador</option>
                <option value="Coca cola">Coca Cola</option>
                <option value="Lab 365">Lab 365</option>
                <option value="Zucchetti">Zucchetti</option>
            </select>

            <label for="biografia">Sua biografia:</label>
            <textarea id="biografia" cols="30" rows="10" placeholder="Fale sobre você" v-model="bio">

            </textarea>

        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nome: '',
            email: '',
            telefone: '',
            senha: '',
            confirmarSenha: '',
            sponsor: '',
            bio: ''

        };
    },
};
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
    background-color: #3578e5;

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
