<template>
<ContentContainer :border="true" :semiTransparentBg="true">
  <div id="bars">
    <div id="infobar">
      <TextSlider :text="locationText" color="var(--main-color)"/>
    </div>
    <div id="redline-bar">
      <TextSlider :text="redlineText" color="#F00"/>
    </div>
  </div>
  <div id="graph">
    <div id="top-redline"/>
    <div id="time-line"/>
    <div id="bottom-redline"/>
  </div>
</ContentContainer>
</template>

<script>
import ContentContainer from "@/components/ContentContainer";
import TextSlider from "@/components/TextSlider";

class Branch {
  completed = false;
  graphStyle = 'parabolic';
  totalAmountOfPixels = 74;
  amountOfPixelsPlaced = 0;

  constructor() {
    this.Xpos = `${Math.floor(Math.random() * 21)*5 - 10}%`;
    this.Ypos = '49.25%';
    this.direction = (Math.random()<0.5?0:1) ? 'up' : 'down';
    this.translateX = Math.floor(Math.random() * 16)*5+15;
  }

  update() {
    if (!this.completed) {
      if (this.amountOfPixelsPlaced < this.totalAmountOfPixels) this.addPixel();
      if (this.amountOfPixelsPlaced === this.totalAmountOfPixels) this.completed = true;
      return false
    } else {
      return true
    }
  }

  addPixel() {
    let div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.bottom = this.Ypos;
    div.style.left = this.Xpos;
    div.style.width = '0.5%';
    div.style.height = '1.3%';
    div.style.transform = `translate(
        ${this.translateX * this.amountOfPixelsPlaced}%,
        ${this.direction === 'up' ? '-' : ''}${50 * this.calculateGraphHeight(this.graphStyle)}%
      )`;
    div.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color-lighten');
    document.getElementById('graph').appendChild(div);
    this.amountOfPixelsPlaced ++;
  }

  calculateGraphHeight(type = 'linear', value = 0) {
    let a = 0.015, x = value === 0 ? this.amountOfPixelsPlaced : value;
    switch (type) {
      case 'parabolic':
        return a*(x**2);
      default:
        return x;
    }
  }

  getBranchProgress() {
    return this.amountOfPixelsPlaced/this.totalAmountOfPixels;
  }
}

export default {
  name: "Branches",
  components: {
    ContentContainer,
    TextSlider
  },
  data() {
    return {
      interval: null,
      timeOut: 500,
      timeElapsed: 0,
      totalAmountOfGraphs: 50,
      amountOfGraphsMade: 0,
      branches: [],
      firstBranch: null,
      locationText: "Location",
      redlineText: "Redline",
    }
  },
  mounted() {
    this.interval = window.setInterval(() => {
      if ( this.amountOfGraphsMade < this.totalAmountOfGraphs && this.timeElapsed%1000 === 0) {
        if (Math.floor(Math.random() * 4) === 3) {
          this.branches.push(new Branch());
          this.amountOfGraphsMade ++
          if (this.amountOfGraphsMade === 1) this.firstBranch = this.branches[0];
        }
      }
      if (this.firstBranch !== null && this.firstBranch.getBranchProgress() >= 0.35) this.setBlinkingAnimation('blinking-animation-1', 0.35);
      if (this.firstBranch !== null && this.firstBranch.getBranchProgress() >= 0.7) this.setBlinkingAnimation('blinking-animation-2', 0.7);
      this.branches.forEach((branch, index) => {
        const pop = branch.update();
        if (pop) {
          this.branches.splice(index, 1);
        }
      });
      if (this.amountOfGraphsMade === this.totalAmountOfGraphs && this.branches.length === 0) {
        clearTimeout(this.interval);
        console.log('cleared interval');
      }
      this.timeElapsed += this.timeOut;
    }, this.timeOut );
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    setBlinkingAnimation(elClass, progress) {
      document.getElementById('top-redline').classList = [elClass];
      document.getElementById('bottom-redline').classList = [elClass];
      if (progress === 0.35) {
        document.getElementById('redline-bar').classList = ['redline-bar-shown'];
        document.getElementById('infobar').classList = ['infobar-hidden'];
      }
      if (progress === 0.7) {
        document.getElementById('graph').classList = ['graph-fullscreen'];
        document.getElementById('redline-bar').classList = ['redline-bar-hidden'];
        }
    }
  }
}
</script>

<style scoped>
#infobar, #redline-bar, #bars {
  position: absolute;
  top: 0;
  height: 2em;
  width: 100%;
}
#bars {
  overflow: hidden;
}
#redline-bar {
   top: 2em;
}
#graph {
  position: absolute;
  inset: 2em 0 1em;
  overflow: hidden;
}
.graph-fullscreen {
  animation: fullscreen 0.3s linear forwards;
}
.infobar-hidden {
   animation: infobar-hidden 0.3s linear forwards;      /* When the spec is finished */
 }
.redline-bar-shown {
  animation: redline-bar-shown 0.3s linear forwards;      /* When the spec is finished */
}
.redline-bar-hidden {
  animation: redline-bar-hidden 0.3s linear forwards;      /* When the spec is finished */
}
@keyframes fullscreen {
  0% { inset: 2em 0 1em }
  100% { inset: 0 }
}
@keyframes infobar-hidden {
  0% { top: 0 }
  100% { top: -2em }
}
@keyframes redline-bar-hidden {
  0% { top: 0 }
  100% { top: -2em }
}
@keyframes redline-bar-shown {
  0% { top: 2em }
  100% { top: 0 }
}
#bottom-redline,
#top-redline {
  position: absolute;
  width: 100%;
  height: 1%;
  background-color: red;
  z-index: 1;
}
#top-redline {
  top: 20%;
}
#bottom-redline {
  bottom: 20%;
}
.blinking-animation-1 {
  animation: blinking 1s linear infinite;
}
.blinking-animation-2 {
  animation: blinking 0.4s linear infinite;
}
@keyframes blinking {
  0% { opacity: 0 }
  49% { opacity: 0 }
  50% { opacity: 1 }
  100% { opacity: 1 }
}
#time-line {
  position: absolute;
  bottom: 49.25%;
  width: 100%;
  height: 1.5%;
  background-color: #ccc;
  z-index: 1;
}
</style>