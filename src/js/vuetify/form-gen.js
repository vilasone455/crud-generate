import { vuecodegen } from "../vuecodegen.js";
class formgen extends vuecodegen {
  vuetemplate(data) {
    var tbstruct = data.tables;
    var tbcode = ``;
    for (let i = 0; i < tbstruct.length; i++) {
      var inputs = tbstruct[i].type;
      var label = tbstruct[i].text;
      var bindname = "form." + tbstruct[i].value;
      var grid = tbstruct[i].grid;
      var add = `<v-col cols='${grid}'>
                  <${inputs} label="${label}" v-model="${bindname}" />
                 </v-col>`;
      tbcode += add;
    }

    var code = `<template> 
    <v-container fluid>
            <v-row>
              ${tbcode}
            </v-row>
            <v-row>     
              <v-col>
                <v-btn @click="save">Save</v-btn>
              </v-col>
            </v-row>
           
     </v-container>
  </template> `;
    return code;
  }
  vuescript(data) {
    var formfield = "";

    data.tables.forEach((d) => {
      formfield += d.value + " : '',";
    });

    var formdata = `{
      ${formfield}
    }`;

    var table_name = data.tbsetting.table_name;
    var code = `
    <script>

import axios from 'axios'

export default {
  name: "",
  data(){
    return{
      editid : null,
      form : ${formdata}
    }
  },
  mounted(){
    this.editid = this.$route.params.id
    if(this.editid != null){
      axios.get('/${table_name}/' + this.editid).then(rs=>{
        this.form = rs.data
      })
    }
  }
  methods: {
    save(){
      if(this.editid == null){
        this.save()
      }else{
        this.edit()
      }
    },
    edit(){
      axios.put('/${table_name}/' + this.editid , this.form).then(rs=>{
        
      })
    },
    add(){
      axios.post('/${table_name}/' , this.form).then(rs=>{
        
      })
    }
  }
};
</script>`;
    return code;
  }
}

export { formgen };
