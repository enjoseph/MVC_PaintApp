export default class View {
  constructor() {
    console.log("View Started");

    this.canvas = document.getElementById("paint");
    this.ctx = this.canvas.getContext("2d");
    this.strokeWidth = document.getElementById("strokeWidth");
    this.eraserTool = document.getElementById("eraserTool");
    this.btns = document.querySelectorAll(".btn");
    this.colorPalette = document.getElementById("colorPalette");
    this.dimensionCanvasWidth = document.querySelector(".dimensionWidth");
    this.dimensionCanvasHeight = document.querySelector(".dimensionHeight");
    this.clearAll = document.querySelector("#clearAll");

    window.addEventListener("load", () => {
      this.canvas.width = this.canvas.offsetWidth;
      this.canvas.height = this.canvas.offsetHeight;
    });

    this.colorPaletteValue = "#";

    this.colorPalette.addEventListener("input", () => {
      if (this.colorPalette.value.charAt(0) == !"#")
        this.colorPalette.value = "#";
      if (/[^\#ABCDEF013456789]/.test(this.colorPalette.value.toUpperCase())) {
        this.colorPalette.value = this.colorPalette.value.slice(0, -1)
      }
      this.colorPaletteValue += this.colorPalette.value;
    });


    this.dimensionCanvasWidth.addEventListener("input", () => { 
        
        if(this.dimensionCanvasWidth.value === "" ||  this.dimensionCanvasWidth.value > 100) this.canvas.style.width = "100%"
        this.canvas.style.width =  `${this.dimensionCanvasWidth.value}%`
        console.log(`${this.dimensionCanvasWidth.value} + %`);
    })

    this.dimensionCanvasHeight.addEventListener("input", () => { 
        if(this.dimensionCanvasHeight.value === "" || this.dimensionCanvasHeight.value> 100) this.canvas.style.height = "100%"
        this.canvas.style.height =  `${this.dimensionCanvasHeight.value}%`
        console.log(dimensionCanvasHeight.value);
    })
    console.log(this.canvas);

  }


  onRemoveAll(callBack) {
    this.clearAll.addEventListener("click", () =>  {
        callBack(this.ctx , this.canvas);
    })
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

  onToolKit(callBack, helper) {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.btnId = btn.id;

        this.btns.forEach((otherBtn) => {
          otherBtn.classList.remove("active");
        });
        btn.classList.add("active");
        callBack(btn.id);

        // callBack(this.btnId ,helper);
      });
    });
  }
}
