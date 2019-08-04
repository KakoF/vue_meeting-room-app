<template>
<div>
  <app-tollbar v-model="drawer"/>
  <app-menu :user="user" v-model="drawer"/>
   <v-container grid-list-md>
      <v-layout>
          <v-flex xs12>
              <slot />
          </v-flex>
      </v-layout>
  </v-container>
</div>
</template>

<script>
import Usuario from '@/api/usuario.js'
import AppTollbar from './AppTollbar.vue'
import AppMenu from './AppMenu.vue'
export default {
  name: 'AppLayout',
  components: {
    AppTollbar,
    AppMenu
  },
  data: () => ({
    drawer: false,
    user: {}
  }),
  async created() {
      let data = await Usuario.get()
      this.user = data.data
  }
}
</script>
