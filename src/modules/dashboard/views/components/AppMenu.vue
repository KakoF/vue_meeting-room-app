<template>
 <!--<v-navigation-drawer
      :value="value"
      @input="$emit('input', $event)"
      :mini-variant="mini"
      
    >
     <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-icon>person</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{user.nome}}</v-list-item-title>
            <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>


     <v-list
        nav
        dense
      >
        <v-list-item 
        link
        v-for="item in items"
        :key="item.title"
        :to="item.url"
        :exact="item.exact">
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>-->
  <v-card>
    <v-navigation-drawer
    app
     height="2000"
      expand-on-hover
      permanent
    >
      <template v-slot:prepend>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-icon>person</v-icon>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item
            link
            two-line
          >
            <v-list-item-content>
              <v-list-item-title class="title">{{user.nome}}</v-list-item-title>
              <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon>mdi-menu-down</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </template>

      <v-divider></v-divider>

      <v-list
        nav
        dense
      >
        <v-list-item 
        link
        v-for="item in items"
        :key="item.title"
        :to="item.url"
        :exact="item.exact">
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  name: 'AppMenu',
  props: {
    user: {},
    value: Boolean
  },
  data: () => ({
    items: [
      { title: 'Home', icon: 'dashboard', url: '/dashboard', exact: true },
      { title: 'Sala', icon: 'dashboard', url: 'dashboard/Sala' , exact: false }
    ],
    mini: false,
  })
}
</script>
