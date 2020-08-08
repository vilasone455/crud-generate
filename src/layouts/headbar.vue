<template>
  <v-app-bar app color="indigo darken-1" dark dense clipped-left flat>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Crud Generator</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>github</v-icon>
    </v-btn>

    <v-btn icon href="facebook.com">
      <v-icon>mdi-facebook</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "headbar",
  props: {}
};
</script>


