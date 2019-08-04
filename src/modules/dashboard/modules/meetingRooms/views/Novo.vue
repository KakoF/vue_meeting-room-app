<template>
<div>
<template>
  <v-snackbar v-model="showSnackbar" top>
    {{ error }}
    <v-btn color="pink" icon @click="showSnackbar = false">
      <v-icon>close</v-icon>
    </v-btn>
  </v-snackbar>
  <v-form
    ref="form"
    lazy-validation
  >
   <v-date-picker
      v-model="date"
      full-width
      :landscape="$vuetify.breakpoint.smAndUp"
      class="mt-4"
    ></v-date-picker>
    <br>
    <v-text-field
      v-model="agendamento.titulo"
      required
      label="Título"
      type="text"
    ></v-text-field>

    <v-select
      v-model="agendamento.sala_id"
      :items="sala"
      item-value="id"
      item-text="nome"
      label="Salas"
      required
    ></v-select>
    <br>
    <v-btn
     @click="submit"
      color="success"
      class="mr-4"
    >
      Agendar
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="handleCancel"
    >
     Cancelar
    </v-btn>
  </v-form>
</template>
  </div>
</template>
<script>
import Salas from '@/api/sala'
import Agendamento from '@/api/agendamento'
import { required } from 'vuelidate/lib/validators'
  export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      sala: [],
      error: undefined,
      showSnackbar: false,
      agendamento: {
          titulo: '',
          sala_id: '',
          periodo: '',
          sala_id: '',
          usuario_id: ''
      } 
    }),
    mounted(){
     this.list()
    },
    methods: {
       handleCancel() {
      this.$router.push('/dashboard')
    },
    validations () {
    const validations = {
        agendamento: {
            titulo: {
                required,
            },
            sala_id: {
                required,
            }
        }
    }
  },
   tituloErros(){
          const errors = []
          const titulo = this.$v.agendamento.titulo

          if(!titulo.$dirty){ return errors }
          !titulo.required && errors.push('Título é obrigatório')
          return errors
      },
      salaErrors(){
          const errors = []
          const sala_id = this.$v.agendamento.sala_id

          if(!sala_id.$dirty){ return errors }
          !sala_id.required && errors.push('Sala é obrigatória')
          return errors
      },
    async list() {
      Salas.list()
        .then(response => {
          this.sala = response.data
        })
        .catch(error => {
        })
    },
     async submit(){
        let data = {
          "titulo": this.agendamento.titulo,
          "sala_id": this.agendamento.sala_id,
          "usuario_id": null,
	        "periodo": this.date
        }
        Agendamento.post(data)
        .then(response => {
         this.$router.push('/dashboard')
        })
        .catch(error => {
          if(!data.titulo || !data.sala_id){
            this.error = 'Verifique todos os valores preenchidos'
          }else{
            this.error = 'Sala já está reservada'
          }
            this.showSnackbar = true
        })
    }
    }
  }
</script>