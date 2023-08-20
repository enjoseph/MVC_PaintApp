export default class View {
  constructor() {
    console.log("View Started");

    this.canvas = document.getElementById("paint");
    this.ctx = this.canvas.getContext("2d");
    this.strokeWidth = document.getElementById("strokeWidth");
    this.eraserTool = document.getElementById("eraserTool");
    this.btns = document.querySelectorAll(".btn");
    this.colorPalette = document.getElementById("colorPalette")
    window.addEventListener("load", () => {
      this.canvas.width = this.canvas.offsetWidth;
      this.canvas.height = this.canvas.offsetHeight;
    });
  }

  onStartDrawing(callback, ctx, strokeWidth) {
    this.canvas.addEventListener("mousedown", () => {
      callback(ctx, strokeWidth);
    });
  }

  onStopDrawing(callback, ctx) {
    this.canvas.addEventListener("mouseup", () => {
      callback(ctx);
    });
  }

  onDrawing(callBack, ctx, eraserTool, selectedTool) {
    this.canvas.addEventListener("mousemove", (e) => {
      callBack(e, ctx, eraserTool, selectedTool);
    });
  }

  onLeaveBorder(callBack, ctx) {
    this.canvas.addEventListener("mouseleave", () => {
      callBack(ctx);
    });
  }

  onToolKit(callBack , helper) {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => {
 
        this.btnId = btn.id;

        this.btns.forEach((otherBtn) => {
          otherBtn.classList.remove("active");
        });
        btn.classList.add("active");
        callBack(btn.id)

        // callBack(this.btnId ,helper);
        
      });
    });
  }
  
}
