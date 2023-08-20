export default class Model {
  constructor() {
    this.isDrawing = false;
    this.strokeLine = 5;

    this.selectedTool = "penTool";
    // console.log(this.selectedTool);
  }

  drawing(e, ctx, callBack )  {
    if (!this.isDrawing) return;
    console.log('drawing ' + this.selectedTool);
    if(this.selectedTool === undefined) alert('Bir Tool Secin') 
    if ( this.selectedTool === "penTool") {
      ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = "#000000";
      ctx.stroke();
    } else if( this.selectedTool === "eraserTool" ){
      callBack(e, ctx);
    }
  }

  startDraw(ctx, strokeWidth) {
    this.isDrawing = true;
    ctx.beginPath();
    ctx.lineWidth = strokeWidth.value;
    console.log(strokeWidth.value);
  }

  stopDraw() {
    this.isDrawing = false;
  }

  leaveBorder() {
    this.isDrawing = false;
  }

  eraserTool(e, ctx) {
    if (!this.isDrawing) return;

    // console.log("eraser");
    ctx.strokeStyle = "#fff";
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }

  changeToolkit(callback){
    this.selectedTool = callback
    console.log( callback);
  }
}
