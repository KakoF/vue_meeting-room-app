<template>







  <v-toolbar
    dark
    prominent
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-toolbar-title>Agendamentos de Salas - Vuetify</v-toolbar-title>
    <template v-slot:extension>
              <v-btn
              @click="logout"
                class="mx-2"
                color="red"
                dark
                large
                absolute
                bottom
                right
                fab
              >
                <v-icon>power_off</v-icon>
              </v-btn>
            </template>
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
  },
  methods:{
    logout: function() {
      this.$store.dispatch("logout").then(() => {
      this.$router.push("/login");
      });
    }
  }
  
}
</script>
