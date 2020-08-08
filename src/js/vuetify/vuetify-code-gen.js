import { vuecodegen } from "../vuecodegen.js";
import { formgen } from "./form-gen.js";
import { displaygen } from "./display-gen.js";
class vuetifyGenerator extends vuecodegen {
  vuetemplate(data) {
    var r = new formgen();
    var r2 = new displaygen();
    var rs = [];
    var formtemplate = r.vuetemplate(data);
    var displaytemplate = r2.vuetemplate(data);
    rs.push(displaytemplate);
    rs.push(formtemplate);
    return rs;
  }

  vuescript(data) {
    var formgens = new formgen();
    var scriptform = formgens.vuescript(data);
    var displaygens = new displaygen();
    var scriptdisplay = displaygens.vuescript(data);
    var rs = [];
    rs.push(scriptdisplay);
    rs.push(scriptform);
    return rs;
  }
}

export { vuetifyGenerator };
