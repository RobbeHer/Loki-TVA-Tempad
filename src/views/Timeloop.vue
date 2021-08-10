<template>
<ContentContainer :border="true" :semiTransparentBg="true">
  <div id="graph">
    <div id="top-redline"/>
    <div id="time-line"/>
    <div id="bottom-redline"/>
  </div>
</ContentContainer>
</template>

<script>
import ContentContainer from "@/components/ContentContainer";

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
}

export default {
  name: "Branches",
  components: {
    ContentContainer,
  },
  data() {
    return {
      interval: null,
      timeOut: 500,
      timeElapsed: 0,
      totalAmountOfGraphs: 50,
      amountOfGraphsMade: 0,
      branches: []
    }
  },
  mounted() {
    this.interval = window.setInterval(() => {
      if ( this.amountOfGraphsMade < this.totalAmountOfGraphs && this.timeElapsed%1000 === 0) {
        if (Math.floor(Math.random() * 5) === 4) {
          this.branches.push(new Branch());
          this.amountOfGraphsMade ++
        }
      }
      this.branches.forEach((branch, index) => {
        const pop = branch.update();
        if (pop) {
          this.branches.splice(index, 1);
        }
      })
      if (this.amountOfGraphsMade === this.totalAmountOfGraphs && this.branches.length === 0) {
        clearTimeout(this.interval);
        console.log('cleared interval')
      }
      this.timeElapsed += this.timeOut;
    }, this.timeOut );
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
}
</script>

<style scoped>
#graph {
  position: absolute;
  inset: 0;
  overflow: hidden;
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
  top: 1.5em;
}
#bottom-redline {
  bottom: 1.5em;
}
.blinking-animation {
  animation: blinking 1s linear infinite;
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