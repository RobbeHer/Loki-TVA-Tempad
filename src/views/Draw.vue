<template>
  <div id="draw">
    <Navigation/>
    <canvas @mousedown="startPainting" @mouseup="finishedPainting" @mousemove="draw" id="canvas"></canvas>
  </div>
</template>

<script>
import Navigation from "@/components/BaseContainer/Navigation";

export default {
  name: "Draw",
  components: {
    Navigation
  },
  data() {
    return {
      painting:false,
      canvas:null,
      ctx:null
    }
  },
  methods: {
    startPainting(e) {
      //console.log('startPainting')
      this.painting = true;
      this.draw(e);
    },
    finishedPainting() {
      //console.log('finishedPainting')
      this.painting = false;
      this.ctx.beginPath();
    },
    draw(e) {
      //console.log('draw')
      if(!this.painting) return;

      this.ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--main-color');
      this.ctx.lineWidth = 10;
      this.ctx.lineCap ="round";

      let clientX = e.clientX;// - 20;
      let clientY = e.clientY;// - 20;
      //console.log(clientX)
      //console.log(clientY)

      this.ctx.lineTo(clientX,clientY);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(clientX,clientY);
    },
    onTouch(e)
    {
      let theTouch = e.changedTouches[0];
      let mouseEv;

      switch(e.type)
      {
        case "touchstart": mouseEv="mousedown"; break;
        case "touchend":   mouseEv="mouseup"; break;
        case "touchmove":  mouseEv="mousemove"; break;
        default: return;
      }

      let mouseEvent = document.createEvent("MouseEvent");
      mouseEvent.initMouseEvent(mouseEv, true, true, window, 1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY, false, false, false, false, 0, null);
      theTouch.target.dispatchEvent(mouseEvent);

      e.preventDefault();
    }
  },
  mounted() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");

    // Resize canvas
    this.canvas.height = document.getElementById("draw").offsetHeight ;
    this.canvas.width = document.getElementById("draw").offsetWidth ;

    // Touch event for mobile
    this.canvas.addEventListener('touchstart', this.onTouch, true);
    this.canvas.addEventListener('touchend', this.onTouch, true);
    this.canvas.addEventListener('touchmove', this.onTouch, true);
  }
}
</script>

<style scoped>
#draw {
  position: absolute;
  inset: 0 20px 0 0;
  background-color: rgba(var(--main-color-dark-rgb), 0.3);
}
#canvas {
  width: 100%;
  height: 100%;
}
/deep/ #navigation {
  margin: 10px !important;
}
</style>