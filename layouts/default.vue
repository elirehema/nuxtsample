

<!--<template>
    <v-app>
        <NuxtPage/>
    </v-app>
</template>-->
<template>
  <v-app>
    <v-app-bar :elevation="0" prominent density="compact" color="grey darken-2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Application Bar</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer permanent v-model="drawer">
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        title="John Leider"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          to="/"
          title="Home"
          value="home"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-forum"
          title="Users"
          to="/users"
          value="about"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main >
      <NuxtPage class="pa-4"/>
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
const drawer = ref(false)
</script>