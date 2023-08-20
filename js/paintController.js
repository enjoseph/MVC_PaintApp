export default class Controller {
    constructor(model, view) {
      this.model = model;
      this.view = view;

    }


    init() {
      this.view.onDrawing(this.model.drawing.bind(this) ,this.view.ctx , this.model.eraserTool.bind(this));
      this.view.onStartDrawing(this.model.startDraw.bind(this) ,this.view.ctx , this.view.strokeWidth);
      this.view.onStopDrawing(this.model.stopDraw.bind(this) ,this.view.ctx );
      this.view.onLeaveBorder(this.model.leaveBorder.bind(this) ,this.view.ctx);
      // this.view.onEraserTool(this.model.eraserTool.bind(this) , this.view.ctx ,this.view.canvas)
      this.view.onToolKit(this.model.changeToolkit.bind(this));

     // , this.helperOnDrawing.bind(this)
    //  
      
    }


    // helperOnDrawing (selectedTool) {
    //   console.log(selectedTool);
    //   this.view.onDrawing(this.model.drawing.bind(this) ,this.view.ctx , this.model.eraserTool.bind(this) ,selectedTool);
    // }
}