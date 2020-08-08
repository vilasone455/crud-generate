<template>
  <div>
    <v-card>
      <v-card-text style="background-color:black">
        <v-chip
          v-for="c in codelist"
          :key="c.txt"
          class="chip"
          :color="isChipActive(c.value)"
          @click="changecode(c.value)"
        >{{uppercasetxt(c.txt)}}</v-chip>
        <v-btn @click="copycode" icon style="float:right">
          <v-icon color="white">mdi-content-copy</v-icon>
        </v-btn>
        <v-btn icon style="float:right" @click="dodownload()">
          <v-icon color="white">mdi-download</v-icon>
        </v-btn>
      </v-card-text>
      <v-divider color="grey"/>

      <PrismEditor :code="code[current_code]" language="vue"></PrismEditor>
    </v-card>
  </div>
</template>

<script>
import PrismEditor from "vue-prism-editor";
export default {
  name: "previewcode",
  props: ["code", "codelist"],
  data() {
    return {
      current_code: "display"
    };
  },
  components: {
    PrismEditor
  },
  methods: {
    dodownload() {
      //
      this.$emit("ondownload", this.code[this.current_code]);
    },
    uppercasetxt(txt) {
      return txt.toUpperCase();
    },
    isChipActive(values) {
      var color = "transparent";
      if (this.current_code === values) {
        color = "grey";
      }
      return color;
    },
    changecode(codename) {
      this.current_code = codename;
    },
    copycode() {
      this.$copyText(this.code[this.current_code]).then(
        function(e) {
          alert("Copied");
          console.log(e);
        },
        function(e) {
          alert("Can not copy");
          console.log(e);
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.chip {
  font-size: 18px;
  color: white;
  font-weight: bold;
  margin-left: 1%;
}
</style>




