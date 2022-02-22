<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        title="John Leider"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Home"
          value="home"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-forum"
          title="About"
          value="about"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click.stop="drawer = !drawer"> Toggle </v-btn>
    </v-app-bar>
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: null,
  }),
};
</script>
