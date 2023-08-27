export default class Model {
  constructor() {
    // Flag to indicate whether drawing is in progress
    this.isDrawing = false;

    // Default stroke line width
    this.strokeLine = 5;

    // Default selected drawing tool
    this.selectedTool = "penTool";

    this.snapshot;
    this.mouseX;
    this.mouseY;
  }

  // Method for handling drawing
  drawing(e, ctx, eraserCallBack, colorPalette, drawRect) {
    if (!this.isDrawing) return;
    if (this.selectedTool === undefined) return;
    console.log(this.snapshot);

     ctx.putImageData(this.snapshot, 0, 0);

    if (this.selectedTool === "penTool") {
      // Set stroke style to selected color or default black
      ctx.strokeStyle =
        colorPalette.value && colorPalette.value.length > 1
          ? `${colorPalette.value}`
          : "#000000";
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
    } else if (this.selectedTool === "eraserTool") {
      eraserCallBack(e, ctx);
    } else if (this.selectedTool === "rectangel") {
      console.log("isledi");
      drawRect(e, ctx);
    }
  }

  // Method to start drawing
  startDraw(ctx, strokeWidth, e, canvasWitdh, canvasHeight) {
    this.isDrawing = true;
    ctx.beginPath();
    ctx.lineWidth = strokeWidth.value;

    this.mouseX = e.offsetX;
    this.mouseY = e.offsetY;

    this.snapshot = ctx.getImageData(0, 0, canvasWitdh, canvasHeight);
  }

  // Method to stop drawing
  stopDraw() {
    this.isDrawing = false;
  }

  // Method to handle leaving the canvas area
  leaveBorder() {
    this.isDrawing = false;
  }

  // Method for using eraser tool
  eraserTool(e, ctx) {
    if (!this.isDrawing) return;

    ctx.strokeStyle = "#fff"; // Eraser color
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }

  // Method to change the selected drawing tool
  changeToolkit(callback) {
    this.selectedTool = callback;
  }

  // Method to remove all drawings from the canvas
  removeAll(ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // Method to save the canvas as an image
  savePaint(callBack) {
    this.downloadLink = document.createElement("a");
    this.downloadLink.href = callBack.toDataURL("image/png");
    this.downloadLink.download = "my_drawing.png";
    this.downloadLink.click();
  }

  drawRect(e, ctx) {
    ctx.strokeRect(
      e.offsetX,
      e.offsetY,
      this.mouseX - e.offsetX,
      this.mouseX - e.offsetY
    );
    console.log(
      "isledi",
      e.offsetX,
      e.offsetY,
      e.offsetX - e.offsetX,
      e.offsetY - e.offsetY
    );
    console.log(this.mouseX, this.mouseY);
  }
}
