import templatesdata from "./TemplateData";

class TemplateClass {
    constructor (toolname, data) {
	  let instane_class = templatesdata.find(t=>t.tool===toolname).class
	  return new instane_class(data)
    }
}

export default TemplateClass;

