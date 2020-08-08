<template>
  <div id="app">
    <v-app>
      <headbar/>
      <v-main>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import headbar from "./layouts/headbar";

export default {
  name: "App",
  components: {
    headbar
  }
};
</script>


