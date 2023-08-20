export default class Model {
  constructor() {
    this.isDrawing = false;
    this.strokeLine = 5;

    // selectedTool = "penTool";
    // console.log(this.selectedTool);
  }

  drawing(e, ctx, callBack ,selectedTool)  {
    if (!this.isDrawing) return;
    console.log('drawing ' + selectedTool);
    
    if (selectedTool === "penTool") {
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
    } else if(selectedTool === "eraserTool" ){
      callBack(e, ctx);
    }else  {
      console.log('Bir Tool Secin');
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

  changeToolkit(callback , helper){
    helper(callback)
  }
}
