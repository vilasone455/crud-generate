
import { download } from "./download";
import TemplateClass from './TemplateClass'
import templatesdata from "./TemplateData"

function codegeneration(typevue, filname, data) {
  download(filname, getCode(typevue, data));
}

function getCode(typevue, data) {
  var code = new TemplateClass(typevue , data)
  var content = code.generate(data);
  var codesetting = code.codelist();
  var rs = {
    code: content,
    codesetting: codesetting
  };
  return rs;
}

function getTemplates(){
  return templatesdata
}

function codedownload(filename, content) {
  download(filename, content);
}


export { codegeneration, getCode, codedownload , getTemplates};
