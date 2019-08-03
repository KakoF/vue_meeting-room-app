<template>
<v-container fill-height>
   <v-layout justify-center align-center="">
       <v-flex xs12 sm6 md4 lg3 x13>
           <v-card class="elevation-24">
               <v-toolbar color="primary" dark>
                <v-toolbar-title>{{ texts.toolBar }}</v-toolbar-title>
                <v-spacer>
                </v-spacer>
                    <v-progress-circular
                        v-show="isLoading"
                        indeterminate
                        colo="white"
                        width="2">
                    </v-progress-circular>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                         <v-text-field
                            v-if="!isLogin"
                            prepend-icon="person"
                            name="name"
                            label="Nome"
                            type="text"
                            :error-messages="nameErrors"
                            :success="!$v.user.name.$invalid"
                            v-model.trim="$v.user.name.$model"
                            >
                            </v-text-field>
                        <v-text-field
                            prepend-icon="email"
                            name="email"
                            label="E-mail"
                            type="email"
                            :error-messages="emailErrors"
                            :success="!$v.user.email.$invalid"
                            v-model.trim="$v.user.email.$model"
                            >
                            </v-text-field>
                            <v-text-field
                            prepend-icon="lock"
                            name="password"
                            label="Senha"
                            type="password"
                            :error-messages="passwordErrors"
                            :success="!$v.user.password.$invalid"
                            v-model.trim="$v.user.password.$model"
                            >
                            </v-text-field>
                    </v-form>
                    <v-btn block depressed @click="isLogin = !isLogin">{{ texts.btnLabel }}</v-btn>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn :disabled="$v.$invalid" color="primary" large @click="submit">{{ texts.toolBar }}</v-btn>
                </v-card-actions>
           </v-card>
           <v-snackbar v-model="showSnackbar" top>
               {{ error }}
               <v-btn color="pink" icon @click="showSnackbar = false">
                   <v-icon>close</v-icon>
               </v-btn>
           </v-snackbar>
        </v-flex>
   </v-layout>
    </v-container>
</template>
<script>
import {required, email, minLength} from 'vuelidate/lib/validators'
import Auth from '@/modules/auth/services/auth.services'
export default {
  name: 'Login',
  data: () => ({
      error: undefined,
      showSnackbar: false,
      isLogin: true,
      isLoading: false,
      user: {
          name: '',
          email: '',
          password: ''
      } 
  }),
  validations () {
    const validations = {
        user: {
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(6)
            }
        }
    }
    if (this.isLogin) { return validations }
    return {
        user: {
            ...validations.user,
            name: {
                required,
                minLength: minLength(3)
            }
        }
    }
  },
  computed: {
      texts() {
          return this.isLogin
            ? { toolBar: 'Login', btnLabel: 'Criar Conta'}
            : { toolBar: 'Cadastrar', btnLabel: 'JA TENHO UMA CONTA'}
      },
      nameErrors(){
          const errors = []
          const name = this.$v.user.name

          if(!name.$dirty){ return errors }
          !name.required && errors.push('Nome é obrigatório')
          !name.minLength && errors.push(`Nome deve ter no mínimo ${name.$params.minLength.min} caracteres`)
          
          return errors
      },
      emailErrors(){
          const errors = []
          const email = this.$v.user.email

          if(!email.$dirty){ return errors }
          !email.required && errors.push('E-mail é obrigatório')
          !email.email && errors.push('E-mail não é válido')
          
          return errors
      },
       passwordErrors(){
          const errors = []
          const password = this.$v.user.password

          if(!password.$dirty){ return errors }
          !password.required && errors.push('Senha é obrigatória')
          !password.minLength && errors.push(`Senha deve ter no mínimo ${password.$params.minLength.min} caracteres`)
          
          return errors
      }
  },
  methods: {
      async submit(){
          this.isLoading = true
        let data = {
            "nome": this.user.name,
	        "email": this.user.email,
	        "senha": this.user.password
        }
        try {
            //await new Promise(resolve => setTimeout(resolve, 3000))
            const authData = this.isLogin
            ? await Auth.login(data)
            : await Auth.signup(data)
            Auth.registerUser(authData.data)
            // this.$router.push(this.$route.query.redirect || '/dashboard')
        } catch (error) {
            this.error = 'Erro em realizar a autenticação'
            this.showSnackbar = true
        } finally {
            this.isLoading = false
        }
    } 
  }
}
</script>
