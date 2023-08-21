export default class View {
  constructor() {
    // Initialize canvas and other elements
    this.canvas = document.getElementById("paint");
    this.ctx = this.canvas.getContext("2d");
    this.strokeWidth = document.getElementById("strokeWidth");
    this.eraserTool = document.getElementById("eraserTool");
    this.btns = document.querySelectorAll(".btn");
    this.colorPalette = document.getElementById("colorPalette");
    this.dimensionCanvasWidth = document.querySelector(".dimensionWidth");
    this.dimensionCanvasHeight = document.querySelector(".dimensionHeight");
    this.clearAll = document.querySelector("#clearAll");
    this.saveButton = document.querySelector("#Save");

    // Set initial canvas dimensions
    window.addEventListener("load", () => {
        this.canvas.width = this.canvas.offsetWidth; // Set the canvas width to match its parent's width.
        this.canvas.height = this.canvas.offsetHeight; // Set the canvas height to match its parent's height.
        this.canvas.style.cursor = "not-allowed"; // Set the cursor style to "not-allowed", indicating interaction is not allowed.
    });

    // Initialize color palette value
    this.colorPaletteValue = "#";

    // Handle color palette input changes
    this.colorPalette.addEventListener("input", () => {
      if (this.colorPalette.value.charAt(0) !== "#")
        this.colorPalette.value = "#";
      if (/[^\#ABCDEF0123456789]/.test(this.colorPalette.value.toUpperCase())) {
        this.colorPalette.value = this.colorPalette.value.slice(0, -1);
      }
      this.colorPaletteValue += this.colorPalette.value;
    });

    // Handle canvas width input changes
    this.dimensionCanvasWidth.addEventListener("input", () => {
      if (
        this.dimensionCanvasWidth.value === "" ||
        this.dimensionCanvasWidth.value > 100
      )
        this.canvas.style.width = "100%";
      this.canvas.style.width = `${this.dimensionCanvasWidth.value}%`;
    });

    // Handle canvas height input changes
    this.dimensionCanvasHeight.addEventListener("input", () => {
      if (
        this.dimensionCanvasHeight.value === "" ||
        this.dimensionCanvasHeight.value > 100
      )
        this.canvas.style.height = "100%";
      this.canvas.style.height = `${this.dimensionCanvasHeight.value}%`;
    });
  }

  // Handle save button click event
  onSavePaint(callback) {
    this.saveButton.addEventListener("click", () => {
      callback(this.canvas);
    });
  }

  // Handle clear all button click event
  onRemoveAll(callBack) {
    this.clearAll.addEventListener("click", () => {
      callBack(this.ctx, this.canvas);
    });
  }

  // Handle canvas drawing start
  onStartDrawing(callback, ctx, strokeWidth) {
    this.canvas.addEventListener("mousedown", () => {
      callback(ctx, strokeWidth);
    });
  }

  // Handle canvas drawing stop
  onStopDrawing(callback, ctx) {
    this.canvas.addEventListener("mouseup", () => {
      callback(ctx);
    });
  }

  // Handle canvas drawing during mouse movement
  onDrawing(callBack, ctx, eraserTool, selectedTool) {
    this.canvas.addEventListener("mousemove", (e) => {
      callBack(e, ctx, eraserTool, selectedTool);
    });
  }

  // Handle leaving the canvas area
  onLeaveBorder(callBack, ctx) {
    this.canvas.addEventListener("mouseleave", () => {
      callBack(ctx);
    });
  }

  // Handle selection of drawing tools
  onToolKit(callBack, helper) {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.btnId = btn.id;
        this.canvas.style.cursor = "default";
        this.btns.forEach((otherBtn) => {
          otherBtn.classList.remove("active");
        });
        btn.classList.add("active");
        callBack(btn.id);
      });
    });
  }
}
