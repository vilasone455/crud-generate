<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Table Define</span>
        </v-card-title>

        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field outlined label="Table name" v-model="tbdefine.table_name"/>
            </v-col>
            <v-col cols="12">
              <v-text-field outlined label="Number field" v-model="tbdefine.fields"/>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="inittb">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-row v-for="(t,index) in tb" :key="tb.text" v-if="save==0">
      <v-col cols="3">
        <v-text-field v-model="t.value" @blur="autotext($event , index)" outlined></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="t.text" outlined></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="t.grid" outlined></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-select :items="types" v-model="t.type" outlined></v-select>
      </v-col>
    </v-row>
    <previewcode :code="content" :codelist="codesetting" @ondownload="ondownload" v-if="save==1"/>
    <v-row v-if="save==0">
      <v-col>
        <v-btn @click="newfield()">New Field</v-btn>
      </v-col>
      <v-col>
        <v-btn @click="generate()">Generate Code</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { codedownload, getCode } from "../js/core";
import previewcode from "../components/previewcode";
export default {
  name: "codeform",
  props: {},
  components: {
    previewcode
  },
  data() {
    return {
      content: "",
      save: 0,
      codesetting: [],
      tbdefine: {
        table_name: "",
        api_name: "",
        formname: "",
        fields: 2
      },
      dialog: true,
      tb: [
        { value: "id", text: "ID", type: "v-text-field", grid: 12 },
        { value: "name", text: "Name", type: "v-text-field", grid: 12 }
      ],
      types: ["v-text-field", "v-select"]
    };
  },
  methods: {
    inittb() {
      this.dialog = false;
      var numrow = this.tbdefine.fields - this.tb.length;
      for (let i = 0; i < numrow; i++) {
        this.newfield();
      }
    },
    newfield() {
      var add = {
        value: "",
        text: "",
        grid: "12",
        type: "v-text-field"
      };
      this.tb.push(add);
    },
    autotext(event, i) {
      if (this.tb[i].text === "") {
        var autotxt = "";
        var values = this.tb[i].value;
        var split = values.split("_");
        if (split.length > 0) {
          autotxt = split[0];
          autotxt += " " + split[1];
        }
        this.tb[i].text = autotxt;
      }
    },

    onkeys(event, i) {},
    generate() {
      var send = {
        tbsetting: this.tbdefine,
        tables: this.tb
      };
      var codedata = getCode("vuetify", "test.vue", send);
      this.content = codedata.code;
      this.codesetting = codedata.codesetting;
      this.save = 1;
    },
    ondownload(fileselect) {
      console.log("download");
      codedownload("test.vue", fileselect);
    }
  }
};
</script>


