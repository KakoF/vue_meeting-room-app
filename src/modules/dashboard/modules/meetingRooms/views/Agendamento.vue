<template>
<div>
  <v-flex>
          <v-card
            color="#757575"
          >
            <v-card-text class="white--text">
              <div class="headline mb-2">Lista de Agendamentos</div>
              Todos os registros feitos até o momento
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
               <v-btn class="mx-2" fab dark color="indigo">
            <v-icon dark>add</v-icon>
            </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
<v-data-table
    class="table"
    no-results-text="'Nenu'"
    :headers="headers"
    :items="data"
    :footer-props="{
      itemsPerPageText: '',
    }">
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