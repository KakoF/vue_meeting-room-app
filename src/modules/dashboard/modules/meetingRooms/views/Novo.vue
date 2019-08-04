

<template>
<div>
<template>
  <v-form
    ref="form"
    v-model="valid"
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
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Título"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Salas"
      required
    ></v-select>
    <br>
    <v-btn
      color="success"
      class="mr-4"
      @click="validate"
    >
      Agendar
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
     Cancelar
    </v-btn>
  </v-form>
</template>
  
  </div>
</template>

<script>
  export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
    }),
  }
</script>