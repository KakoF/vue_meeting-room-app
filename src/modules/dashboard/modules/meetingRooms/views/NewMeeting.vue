<template>
<div>
  <v-card>
  <v-card-title class="primary white--text headline">
      Histórico de Agendamento
    </v-card-title>
     <v-card-text>Todos os agendamentos realizados
    <div class="text-center">
    <v-btn @click="handleNewMeeting()" :color="'success'">Novo Agendamento</v-btn>
  </div>

     </v-card-text>
    </v-card>
  <v-data-table
    class="table"
    :headers="headers"
    :items="data"
    :rows-per-page-items="[10, 25]">
    <template slot="items" slot-scope="props">
      <td class="text-xs-left">{{ props.item.id }}</td>
       <td class="text-xs-left">{{ props.item.titulo }}</td>
        <td class="text-xs-left">{{ props.item.sala_Id }}</td>
         <td class="text-xs-left">{{ props.item.periodo }}</td>
    </template>
  </v-data-table>
  </div>
</template>

<script>
import Agendamento from '@/api/agendamento'
  export default {
    data () {
      return {
        data:[],
        headers: [
          { text: 'Id', value: 'id' },
          { text: 'Título', value: 'titulo' },
          { text: 'Sala', value: 'sala_id' },
          { text: 'Periodo', value: 'periodo' },
        ],
      }
    },
    mounted() {
    this.list()
  },
  methods:{
    async list() {
      console.log('entrou')
      Agendamento.list()
        .then(response => {
          console.log(response.data)
          this.data = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    handleNewMeeting() {
      this.$router.push('new')
    },
  }
};
</script>
  }
</script>

<style>
  .table {
    border-radius: 3px;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.21);
    background-color: transparent;
  }
</style>
