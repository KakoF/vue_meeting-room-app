<template>
  <v-toolbar
    dark
    prominent
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-app-bar-nav-icon @click.stop="$emit('hide', !show)"></v-app-bar-nav-icon>
    <v-toolbar-title>Agendamentos de Salas - Vuetify</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>

export default {
  name: 'AppToolbar',
  props: {
    show: Boolean
  },
  model: {
    prop: 'show',
    event: 'hide',
  }
}
</script>
