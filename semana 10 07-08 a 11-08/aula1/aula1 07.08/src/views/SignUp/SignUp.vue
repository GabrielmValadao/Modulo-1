<template>
    <div>
        <form @submit.prevent="handleCreateAccount" class="formulario">
            <h2>Criar Conta</h2>
            <div class="form-element">
                <label for="nome">Nome:</label>
                <input class="form-input" type="text" id="nome" placeholder="Digite seu nome completo" v-model="nome" :class="{'input-error' : this.errors.nome}"/>

                <span class="mensage-erro">{{ this.errors.nome }}</span>
            </div>
            <div class="form-element">
                <label for="email">E-mail:</label>
                <input class="form-input" type="email" id="email" placeholder="Digite seu email para cadastro"
                    v-model="email" :class="{'input-error' : this.errors.email}"/>
                <span class="mensage-erro">{{ this.errors.email }}</span>
            </div>
            <div class="form-element">
                <label for="telefone">Telefone:</label>
                <input class="form-input" type="number" id="telefone" placeholder="Digite seu telefone"
                    v-model="telefone" :class="{'input-error' : this.errors.telefone}"/>
                <span class="mensage-erro">{{ this.errors.telefone }}</span>
            </div>
            <div class="form-element">
                <label for="senha">Senha:</label>
                <input class="form-input" type="password" id="senha" placeholder="Digite sua senha" v-model="senha" :class="{'input-error' : this.errors.senha}"/>
                <span class="mensage-erro">{{ this.errors.senha }}</span>
            </div>
            <div class="form-element">
                <label for="confimar-senha">Confirmar senha:</label>
                <input class="form-input" type="password" id="confirmar-senha" placeholder="Confirme sua senha"
                    v-model="confirmarSenha" :class="{'input-error' : this.errors.confirmarSenha}"/>
                <span class="mensage-erro">{{ this.errors.confirmarSenha }}</span>
            </div>

            <div class="form-element">
                <label for="sponsor">Patrocinador:</label>
                <select class="form-select" id="sponsor" v-model="sponsor">
                    <option value="">Sem patrocinador</option>
                    <option value="Coca cola">Coca Cola</option>
                    <option value="Lab 365">Lab 365</option>
                    <option value="Zucchetti">Zucchetti</option>
                </select>
            </div>

            <div class="form-element">
                <label for="biografia">Sua biografia:</label>
                <textarea class="form-textarea" id="biografia" cols="30" rows="10" placeholder="Fale sobre você"
                    v-model="bio">
        </textarea>
            </div>

            <div class="form-element">
                <p>Selecione um tipo de plano:</p>
                <div class="form-radio">
                    <input type="radio" value="1" v-model="tipoPlano" />
                    <label for="tipo-plano">Bronze</label>
                </div>
                <div class="form-radio">
                    <input type="radio" value="2" v-model="tipoPlano" />
                    <label for="tipo-plano">Prata</label>
                </div>
                <div class="form-radio">
                    <input type="radio" value="3" v-model="tipoPlano" />
                    <label for="tipo-plano">Premium</label>
                </div>
            </div>
            <label for="confirmar-termos">
                <input type="checkbox" id="confirmar-termos" v-model="confirmarTermos" />
                Aceita termos de uso
                <span class="mensage-erro">{{ this.errors.confirmarTermos }}</span>
            </label>

            <button type="submit">Criar conta</button>
        </form>
    </div>
</template>

<script>
//importa biblioteca schema - yup
import * as yup from "yup";
import { captureErrorYup } from '../../utils/captureErrorYup.js'

export default {
    data() {
        return {
            nome: "",
            email: "",
            telefone: "",
            senha: "",
            confirmarSenha: "",
            sponsor: "",
            bio: "",
            tipoPlano: "1",
            confirmarTermos: true,

            errors: {}
        };
    },

    methods: {
        handleCreateAccount() {
            try {
                //SCHEMA VALIDATION - variaveis com regras de validação, valida uma serie de coisas escrevendo somente a variavel de schema, atraves de instalação de uma biblioteca - Yup

                // 1 - criar o schema validation
                const schema = yup.object().shape({
                    nome: yup.string().required("Nome é obrigatório"),
                    email: yup
                        .string()
                        .email("Email não é válido")
                        .required("Email é obrigatório"),
                    telefone: yup.string().required("Telefone é obrigatório"),
                    senha: yup.string().min(8, "A senha deve ser maior").max(20, "Deve ter entre 8-20 letras").required("A senha é obrigatória"),
                    confirmarSenha: yup.string().required("Confirmação necessária").oneOf([yup.ref('senha')], "As senhas devem coincidir"),
                    confirmarTermos: yup.boolean().isTrue("Os termos devem ser aceitos")

                });

                schema.validateSync({
                    nome: this.nome,
                    email: this.email,
                    telefone: this.telefone,
                    senha: this.senha,
                    confirmarSenha: this.confirmarSenha,
                    confirmarTermos: this.confirmarTermos
                }, { abortEarly: false });
                // abortEarly para fazer a validação de todos os error e me retornar todos, pois por padrão ele faz 1 erro e da o return


                //cadastro de usuario

                fetch('http://localhost:3000/api/register', {
                    method: 'POST',
                    body: JSON.stringify ({
                        nome: this.nome,
                        email: this.email,
                        telefone: this.telefone,
                        senha: this.senha,
                        confirmarSenha: this.confirmarSenha,
                        sponsor: this.sponsor,
                        bio: this.bio,
                        tipoPlano: this.tipoPlano,
                        confirmarTermos: this.confirmarTermos,
                    }),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                .then((response) => {
                    if(response.ok === false) {
                        throw new Error() 
                        }
                        return response.json()
                    })
                .then((response) => {
                    alert('Cadastrado com sucesso')
                    this.$router.push('/')
                })

                .catch (() => {
                    alert("Houve uma falha na criação da conta")
                })
            } catch (error) {
                if (error instanceof yup.ValidationError) {
                    // capturar os errors do yup
                    this.errors = captureErrorYup(error)
                }
            }
        },
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
    width: 100%;

    display: flex;
    flex-direction: column;
}

.input-area input {
    width: 100%;
}

.mensage-erro {
    color: red;
    margin: 4px;
}

.form-element {
    display: flex;
    flex-direction: column;
    width: 80%;
}

.form-select,
.form-input,
.form-textarea {
    padding: 4px;
    height: 34px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #756767;
    outline: none;
}

.form-textarea {
    height: 68px;
}

.form-radio {
    display: flex;
    align-items: center;
    gap: 5px;
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
