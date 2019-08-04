<template>
<div>
  <v-card>
  <v-card-title class="primary white--text headline">
      Salas
    </v-card-title>
     <v-card-text>Todas as salas cadastradas para agendamento
    <div class="text-center">
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
       <td class="text-xs-left">{{ props.item.nome }}</td>
    </template>
  </v-data-table>
  </div>
</template>

<script>
import Salas from '@/api/sala'
  export default {
    data () {
      return {
        data:[],
        headers: [
          { text: 'Id', value: 'id' },
          { text: 'Nome', value: 'nome' },
        ],
      }
    },
    mounted() {
    this.list()
  },
  methods:{
    async list() {
      console.log('entrou')
      Salas.list()
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
