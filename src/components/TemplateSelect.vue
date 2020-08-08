<template>
  <div>
    <v-row>
      <v-col cols="4" v-for="item in items" :key="item.tool">
        <v-card outlined @click="onselect(item)" >
            <v-card-text class="text-center" >
              <div :class="isActive(item)">{{item.tool}}</div>
            </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: "TemplateSelect",
  props: {
    value : Object,
    items : Array
  },
  data() {
    return {
     
    };
  },

  methods: {
    onselect(item){
      this.value = item
    },
    isActive(item){
      var styleclass = "templateNormal"
      if(item.tool === this.value.tool){
        styleclass = "templateActive"
      }
      return styleclass
    }
  }
};
</script>

<style>

.templateActive{
  font-size : 17px;
  color : blue;
}

.templateNormal{
  font-size : 17px;
  color : grey;
}

</style>




