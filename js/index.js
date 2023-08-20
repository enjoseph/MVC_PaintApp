
import View from "./paintView.js";
import Controller from "./paintController.js";
import Model from "./paintModel.js";


function initialize () {
    console.log('index started');
    const view = new View();
    const model = new Model();
    const controller = new Controller( model, view);
    controller.init()
}



window.addEventListener ("DOMContentLoaded" , initialize); 











// function stopDraw () { 
//     isDrawing = false;
// }




// canvas.addEventListener('mousemove', drawing);