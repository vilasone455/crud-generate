import { vuecodegen } from "../vuecodegen.js";
class displaygen extends vuecodegen {
  vuetemplate(data) {
    var code = `<template> 
    <v-container fluid>
            <v-row>
              <v-col cols="3">
                <v-btn @click="add()">Add Room</v-btn>
              </v-col>
              <v-col cols="12">
                <v-data-table :headers="header" :items="items">
                  <template v-slot:item.actions="{ item }">
                    <v-icon small class="mr-2" @click="edit(item)">
                      mdi-pencil
                    </v-icon>
                    <v-icon small @click="remove(item)">
                      mdi-delete
                    </v-icon>
                  </template>
                </v-data-table>
              </v-col>
            </v-row>
     </v-container>
  </template> `;
    return code;
  }
  vuescript(data) {
    var headerfields = "";
    data.tables.forEach((table) => {
      var txt = table.text;
      var value = table.value;
      var add = `{text : '${txt}' , '${value}'},`;
      headerfields += add;
    });

    var headertable = `[
      ${headerfields}
    ]`;

    var formname = data.tbsetting.table_name;
    var apiname = data.tbsetting.table_name;
    var code = `
    <script>

import axios from 'axios'

export default {
  name: "",
  data(){
    return{
      header : ${headertable},
      items : []
    }
  },
  mounted(){
    axios.get('/${apiname}').then(rs=>{
      this.items = rs.data
    })
  }
  methods: {
    edit(item) {
      this.$router.push(name : '${formname}' , params:item.id)
    },
    remove(item) {
      axios.delete().then(rs=>{

      })
    },
    add() {
      this.$router.push(name : '${formname}')
    }
  }
};
</script>`;
    return code;
  }
}

export { displaygen };
