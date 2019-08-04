<template>
<div>
    <v-flex>
          <v-card
            color="#757575"
          >
            <v-card-text class="white--text">
              <div class="headline mb-2">Lista de Salas</div>
              Todos os salas disponíveis
            </v-card-text>
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
      Salas.list()
        .then(response => {
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
