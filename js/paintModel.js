export default class Model {
  constructor() {
    this.isDrawing = false;
    this.strokeLine = 5;

    this.selectedTool = "penTool";
    // console.log(this.selectedTool);
  }

  drawing(e, ctx, callBack , colorPalette)  {
    if (!this.isDrawing) return;
    console.log('drawing ' + this.selectedTool);
    if(this.selectedTool === undefined) this.selectedTool = "penTool"
    if ( this.selectedTool === "penTool") {
      ctx.strokeStyle = colorPalette.value && colorPalette.value.length > 1 ? `${colorPalette.value}` : "#000000";
      // ctx.strokeStyle = `${colorPalette.value}`;
    console.log( colorPalette.value);
      ctx.lineTo(e.offsetX, e.offsetY);
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
  

  removeAll (ctx , canvas) {
    ctx.clearRect(0, 0,  canvas.width , canvas.height);
   
  }

  
}
