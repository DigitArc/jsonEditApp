// VENDORS
import * as $ from "jquery";
import "./assets/js/bootstrap.bundle";
import "./app/vendor-imports";
import "@json-editor/json-editor";

// JSON DATA
import { jsonConfig } from "./assets/data/json-config-allrol.resources";
import { jsonResources } from "./assets/data/json-config-allrol.data";

JSONEditor.defaults.options.theme = "bootstrap4";
JSONEditor.defaults.options.iconlib = "fontawesome5";

var mainDataPreprocess;

// const editor = new JSONEditor(document.getElementById("editor_holder"), {
//   schema: jsonConfig
// });
// editor.setValue(jsonResources);
console.log(jsonResources.preprocess_modules);
console.log(jsonConfig.properties.preprocess_modules)
mainDataPreprocess = jsonConfig.properties.preprocess_modules.items.oneOf.map(item => {
  if (item.properties.config.properties) {
    const itemsToRender = Object.keys(item.properties.config.properties).map(key => ({ key, type: item.properties.config.properties[key].type }))
    return { name: item.title, items: itemsToRender };
  }
}).filter(res => res && res);

const ul = document.querySelector("#preprocessModuleList");

jsonResources.preprocess_modules.map(item => {
  $(ul).append(`<li class="list-group-item">
    <a href="javascript:void(0)" class="item" >${item.name}</a></li>`);
})


$(".item").on("click", function (e) {
  const text = e.target.innerText;

  const selectedModule = mainDataPreprocess.filter(item => item.name === text);
  const $tabs = $("#tabs");
  $tabs.html("");

  $tabs.append(`
    <li class="nav-item">
    <a class="nav-link active" data-toggle="tab" href="#home">Module Settings</a>
  </li>
    `);

  if (selectedModule.length > 0) {

    $("#home").html("");
    selectedModule[0].items.map((item, index) => {

      if (item.type === "string") {
        console.log($("#home"));

        $("#home").append(` <p> ${item.key} </p> `);
      }
      else if (item.type === "array") {
        $tabs.append(`
        <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#menu${index}">${item.key}</a>
                    </li>
        `);
      }


    })
  }



});
console.log(mainDataPreprocess)