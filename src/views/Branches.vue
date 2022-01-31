<template>
<ContentContainer :border="true" :semiTransparentBg="true">
  <TextSlider text="REDLINE IMMINENT" color="#F00"/>
  <div id="graph-container">
    <div id="unit-counter">
      <p id="units">{{ getUnits }}</p>
      <p>UNITS</p>
    </div>


    <div id="graph">
      <div id="redline"/>
      <ul id="graph-y-bar">
        <li></li>
        <li>01</li>
        <li>02</li>
        <li>03</li>
        <li>04</li>
      </ul>
      <div id="time-line"/>
    </div>
    <div id="graph-x-bar">
      <span>80&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;60&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;40</span>
      <span>20&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20</span>
      <span>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;60&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;80</span>
    </div>


    <div id="timeline-info">
      <p>TIMELINE MAG: {{ timeline.mag }}</p>
      <p>TIMELINE SEGMENT: {{ timeline.segment }}</p>
      <p id="timeline-side-info">906.20++</p>
    </div>
  </div>
</ContentContainer>
</template>

<script>
import ContentContainer from "@/components/ContentContainer";
import TextSlider from "@/components/TextSlider";
const beep1 = require("../assets/beep-1.wav");

export default {
  name: "Branches",
  components: {
    ContentContainer,
    TextSlider
  },
  data() {
    return {
      interval: null,
      graphStyle: 'linear',
      timeline: {
        mag: '03.55.8674.1122',
        segment: '616.432'
      },
      countdown: 60000,
      totalAmountOfPixels: 68,
      amountOfPixelsPlaced: 0,
      maxGraphHeight: 0,
      beepSound: null
    }
  },
  created() {
    this.maxGraphHeight = this.calculateGraphHeight(this.graphStyle, this.totalAmountOfPixels);
  },
  mounted() {
    this.beepSound = new Audio(beep1);
    const timeOut =  this.countdown / this.totalAmountOfPixels;

    this.interval = window.setInterval(() => {
      if (!this.countdown <= 0) {
        this.countdown -= timeOut;
        this.addPixel();
      }

      if(this.calculateUnitsLeft() <= 3) {
        document.getElementById("redline").classList.add('blinking-animation');
      }

      if (this.$store.state.branchingSoundEnabled) {
        this.beepSound.play();
        if (this.calculateUnitsLeft() <= 3) {
          setTimeout(() => {
            this.beepSound.play()
          }, timeOut/2)
        }
        if (this.calculateUnitsLeft() <= 1) {
          setTimeout(() => {
            this.beepSound.play()
            setTimeout(() => {
              this.beepSound.play()
            }, timeOut/3)
          }, timeOut/3)
        }
      }
    }, timeOut );
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  computed: {
    getUnits() {
      const unitsLeft = this.calculateUnitsLeft();
      return (unitsLeft > 0 ? unitsLeft : 0).toFixed(2);
    },
  },
  methods: {
    addPixel() {
      let div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.bottom = this.graphStyle === 'linear' ? '-0%' : '-1.5%';
      div.style.left = '49.25%';
      div.style.width = '1.5%';
      div.style.height = '3%';
      div.style.transform = `translate(${35 * this.amountOfPixelsPlaced}%, ${-50 * this.calculateGraphHeight(this.graphStyle)}%)`;
      div.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color-lighten');
      document.getElementById('graph').appendChild(div);
      this.amountOfPixelsPlaced ++;
    },
    calculateGraphHeight(type = 'linear', value = 0) {
      let a = 0.015, x = value === 0 ? this.amountOfPixelsPlaced : value;
      switch (type) {
        case 'parabolic':
          return a*(x**2);
        default:
          return x;
      }
    },
    calculateUnitsLeft() {
      return (5-(this.calculateGraphHeight(this.graphStyle)/this.maxGraphHeight)*5)
    }
  }
}
</script>

<style scoped>
#unit-counter {
  position: absolute;
  left: 5px;
  top: 4em;
  line-height: 1.5em;
}
#units {
  font-size: 2em;
}
#graph {
  position: absolute;
  inset: 2em 0 calc(4em + 5px);
  overflow: hidden;
}
#redline {
  position: absolute;
  width: 100%;
  height: 0.8em;
  background-color: red;
  z-index: 1;
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
#graph-y-bar {
  position: absolute;
  right: 5px;
  height: 100%;
  line-height: 0;
}
#graph-y-bar li {
  list-style: none;
  height: 20%;
}
#time-line {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1.5%;
  background-color: #ccc;
  z-index: 1;
}
#graph-x-bar {
  position: absolute;
  inset: auto 5px calc(2em + 5px);
  line-height: 2em;
  display: flex;
  justify-content: space-between;
}
#timeline-info {
  position: absolute;
  left: 5px;
  right: 5px;
  bottom: 5px;
  line-height: 1em;
  color: var(--main-color-light);
}
#timeline-side-info {
  position: absolute;
  right: 20vh;
  bottom: 0;
}
/deep/ .text-slider {
  font-size: 2vw;
}
</style>