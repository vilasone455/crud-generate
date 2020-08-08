import { vuetifyGenerator } from "./vuetify/vuetify-code-gen";
import { download } from "./download";

function codegeneration(typevue, filname, data) {
  download(filname, getCode(typevue, filname, data));
}

function getCode(typevue, filname, data) {
  var code = getTypeVue(typevue);
  var content = code.generate(data);
  var codesetting = code.codelist();
  var rs = {
    code: content,
    codesetting: codesetting
  };
  return rs;
}

function codedownload(filename, content) {
  download(filename, content);
}

function getTypeVue(typevue) {
  var code = null;
  switch (typevue) {
    case "vuetify":
      code = new vuetifyGenerator();
      break;
    default:
      break;
  }
  return code;
}

export { codegeneration, getCode, codedownload };
