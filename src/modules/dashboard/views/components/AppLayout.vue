<template>
<div>
  <app-tollbar/>
  <app-menu :user="user"/>
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
     user: {}
  }),
  async created() {
      let data = await Usuario.get()
      this.user = data.data
  }
}
</script>
