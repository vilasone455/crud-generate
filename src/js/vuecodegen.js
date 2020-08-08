import basecodegen from "./basegen.js";

class vuecodegen extends basecodegen {
  generate(data) {
    var templatecode = this.vuetemplate(data);
    var scriptcode = this.vuescript(data);
    var codelist = this.codelist();
    var key1 = codelist[0].value;
    var key2 = codelist[1].value;
    var codelistdata = {
      [key1]: templatecode[0] + scriptcode[0],
      [key2]: templatecode[1] + scriptcode[1]
    };
    return codelistdata;
  }

  codelist() {
    // note : txt name should end with 'Code' string
    return [
      { txt: "Display Code", value: "display", filetype: "display" },
      { txt: "Form Code", value: "form", filetype: "form" }
    ];
  }

  vuetemplate(data) {}

  genform() {}

  gendisplay() {}

  vuescript(data) {}
}

export { vuecodegen };
