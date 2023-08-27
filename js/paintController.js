export default class Controller {
    constructor(model, view) {
      this.model = model;
      this.view = view;
    }

    // Initialize the controller
    init() {
      // Handle drawing action with appropriate tools
      this.view.onDrawing(this.model.drawing.bind(this) , this.view.ctx , this.model.eraserTool.bind(this) , this.view.colorPalette , this.model.drawRect.bind(this) );
      
      // Start drawing action
      this.view.onStartDrawing(this.model.startDraw.bind(this) , this.view.ctx , this.view.strokeWidth );
      
      // Stop drawing action
      this.view.onStopDrawing(this.model.stopDraw.bind(this) , this.view.ctx );
      
      // Handle leaving the canvas area
      this.view.onLeaveBorder(this.model.leaveBorder.bind(this) , this.view.ctx);
      
      // Handle changes in selected drawing tool
      this.view.onToolKit(this.model.changeToolkit.bind(this));
      
      // Handle removing all drawings from the canvas
      this.view.onRemoveAll(this.model.removeAll.bind(this));
      
      // Handle saving the canvas as an image
      this.view.onSavePaint(this.model.savePaint.bind(this));
    }
}
