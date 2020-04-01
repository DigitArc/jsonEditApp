// VENDORS
import * as $ from "jquery";
import "./assets/css/bootstrap.min.css";
import "./assets/fontawesome/css/all.css";
import "./assets/js/bootstrap.bundle";
import "@json-editor/json-editor";

// JSON DATA
import { jsonConfig } from "./assets/data/json-config.data";
import { jsonResources } from "./assets/data/json-resources.data";

JSONEditor.defaults.options.theme = "bootstrap4";
JSONEditor.defaults.options.iconlib = "fontawesome5";
// const analysisConfig = {
//   default: null,
//   description: "General report settings 1",
//   properties: {
//     analysis_modules: jsonConfig.properties.analysis_modules
//   },
//   required: ["analysis_modules"],
//   title: "Report Settings",
//   type: "object"
// };
const analysisConfig = { ...jsonConfig.properties.analysis_modules.items };
const analysisEditor = new JSONEditor(
  document.getElementById("analysisEditorHolder"),
  { schema: analysisConfig }
);
analysisEditor.setValue({ analysis_modules: jsonResources.analysis_modules });
// REMOVE LIST DATA FROM ASIDE ON MODAL.
// document.querySelector("#item").style.display = "none";
JSONEditor.defaults.callbacks = {
  button: {
    button1CB: function(jseditor, e) {
      // console.log(e);
      // console.log("button1CB", jseditor.jsoneditor.getValue());
      $("#exampleModal").modal("toggle");
    }
  }
};

const submitAnalysisModalButton = document.getElementById(
  "analysisModalButton"
);
submitAnalysisModalButton.addEventListener("click", () => {
  console.log(analysisEditor.getValue());
  const newAnalysisModules = analysisEditor.getValue();
  const current = editor.getValue().analysis_modules;
  console.log([...current, newAnalysisModules]);
  editor.setValue({ analysis_modules: [...current, newAnalysisModules] });
});

const element = document.getElementById("editor_holder");

const editor = new JSONEditor(document.getElementById("editor_holder"), {
  schema: jsonConfig
});
editor.setValue(jsonResources);
