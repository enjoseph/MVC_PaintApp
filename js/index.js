
import View from "./paintView.js";
import Controller from "./paintController.js";
import Model from "./paintModel.js";


function initialize () {
    const view = new View();
    const model = new Model();
    const controller = new Controller( model, view);
    controller.init()
}



window.addEventListener ("DOMContentLoaded" , initialize); 