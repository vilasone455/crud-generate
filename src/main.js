import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
//vue-prism-editor dependency
import "vue-prism-editor/dist/VuePrismEditor.css";

import VueClipboard from "vue-clipboard2";

Vue.use(VueClipboard);

const opts = {
  icons: {
    iconfont: "mdi"
  }
};
Vue.use(Vuetify);

new Vue({
  vuetify: new Vuetify(opts),
  render: (h) => h(App),
  router
}).$mount("#app");
