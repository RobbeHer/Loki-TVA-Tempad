<template>
<ContentContainer :border="true" :semiTransparentBg="true">
  <div id="infobar">
    <div id="upper-location-bar" style="color: var(--main-color)">
      {{ locationText.slice().reverse() }}
      <!--<TextSlider :text="locationText.slice().reverse()" color="var(--main-color)" :repeat="2"/>-->
    </div>
    <div id="bottom-bar-part">
      <div id="location-bar">
        <TextSlider :text="locationText" color="var(--main-color)" :repeat="1"/>
      </div>
      <div id="redline-bar">
        <TextSlider :text="redlineText" color="#F00"/>
      </div>
    </div>
  </div>
  <div id="graph">
    <div id="prum-tml">
      PRUM <span id="tml">TML</span> 210
    </div>
    <div id="top-redline"/>
    <div id="time-line"/>
    <div id="bottom-redline"/>
    <ul id="graph-y-bar">
      <li>01</li>
      <li>02</li>
      <li>03</li>
      <li>00</li>
      <li>03</li>
      <li>02</li>
      <li>01</li>
    </ul>
    <div id="active-ips">(100) ACTIVE IPs</div>
    <div id="stamp-01">
      <p>STAMP_01.0</p>
      <p>ACTIVE<span id="star">*</span>ISPLAYING</p>
    </div>
    <div id="tl-moving">TL MOVING</div>
  </div>
</ContentContainer>
</template>

<script>
import ContentContainer from "@/components/ContentContainer";
import TextSlider from "@/components/TextSlider";
const beep1 = require("../assets/beep-1.wav");

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
      timeOut: 700,
      timeElapsed: 0,
      totalAmountOfGraphs: 50,
      amountOfGraphsMade: 0,
      branches: [],
      firstBranch: null,
      locationText: ["OSHKOSH, MIDGARD (04.12.1985)", "VORMIR (04.23.2301)", "MIDAVELLIR [5999.26//C5.790]",
        "NIFLHEIM [6106.350//2510.005] DARTFORD, ENGLAND", "THORTON, USA (10.25.1551)", "COOKEVILLE, USA (11.22.19999)",
        "EGO (12.27.1382)", "TITAN (10.13.1982)", "SAKAAR, TAYO (08.13.1984)", "BARICHARA, (COL) (02.02.1808)",
        "PORVOO, FINLAND (07.14.1708)", "ASGARD (02.16.2004)", "ROME, ITALY (10.03.1390)", "NEW YORK, USA (09.21.1947)",
        "TOKYO, JAPAN (03.01.1984)", "HALA (01.03.0051)", "KINGSPORT, USA (08.02.1999)", "XANDAR (09.24.1001)",
        "BEIJING, CHINA (11.23.2005)", "MADRID, SPAIN (07.18.1903)"],
      redlineText: "REDLINE IMMINENT",
      beepSound: null
    }
  },
  mounted() {
    this.beepSound = new Audio(beep1);

    this.interval = window.setInterval(() => {
      if ( this.amountOfGraphsMade < this.totalAmountOfGraphs && this.timeElapsed%1000 === 0) {
        if (Math.floor(Math.random() * 4) === 3) {
          this.branches.push(new Branch());
          this.amountOfGraphsMade ++
          if (this.amountOfGraphsMade === 1) this.firstBranch = this.branches[0];
        }
      }
      if (this.firstBranch !== null && this.firstBranch.getBranchProgress() >= 0.35) {
        this.setBlinkingAnimation('blinking-animation-1', 0.35);
        if (this.$store.state.branchingSoundEnabled) this.beepSound.play();
      }
      if (this.firstBranch !== null && this.firstBranch.getBranchProgress() >= 0.7) {
        this.setBlinkingAnimation('blinking-animation-2', 0.7);
        if (this.$store.state.branchingSoundEnabled) setTimeout(() => { this.beepSound.play() }, this.timeOut/2)
      }
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
        document.getElementById('location-bar').classList = ['location-bar-hidden'];
        document.getElementById('redline-bar').classList = ['redline-bar-shown'];
      }
      if (progress === 0.7) {
        //document.getElementById('graph').classList = ['graph-fullscreen'];
        document.getElementById('infobar').classList = ['infobar-hidden'];
        document.getElementById('prum-tml').classList = ['move-left'];
        document.getElementById('stamp-01').classList = ['move-left'];
        document.getElementById('tl-moving').classList = ['move-left'];
        document.getElementById('active-ips').classList = ['move-right'];
        document.getElementById('graph-y-bar').classList = ['move-right'];
      }
    }
  }
}
</script>

<style scoped>
#location-bar, #redline-bar, #infobar, #bottom-bar-part {
  position: absolute;
  width: 100%;
}
#infobar {
  height: 3em;
  top: 0;
  overflow: hidden;
}
#bottom-bar-part {
  height: 2em;
  top: 0.8em;
  overflow: hidden;
}
#upper-location-bar {
  position: absolute;
  font-size: 0.5em;
  top: 0;
  white-space: nowrap;
  animation: slide 180s linear infinite;
}
@keyframes slide {
  100% { transform: translateX(-100%) }
}
#location-bar {
  font-size: 1.2em;
  line-height: 1.3em;
  top: 0;
}
#redline-bar {
  font-size: 1.2em;
  line-height: 1.3em;
  top: 2em;
}
#graph {
  position: absolute;
  /*inset: 2em 0 1em;*/
  inset: 0;
  overflow: hidden;
}
/*.graph-fullscreen {
  animation: fullscreen 2s linear forwards;
}
@keyframes fullscreen {
  0% { inset: 2em 0 1em }
  100% { inset: 0 }
}*/
.location-bar-hidden{
  animation: infobar-hidden 0.75s linear forwards;
}
.infobar-hidden {
  animation: infobar-hidden 2s linear forwards;
}
.redline-bar-shown {
  animation: redline-bar-shown 0.75s linear forwards;
}
@keyframes infobar-hidden {
  0% { top: 0 }
  100% { top: -3em }
}
@keyframes redline-bar-shown {
  0% { top: 2.5em }
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
#prum-tml {
  position: absolute;
  top: 22%;
  left: 5px;
  font-size: 0.7em;
}
#tml {
  background-color: var(--main-color-lighten);
  color: var(--main-bg-color);
  padding: 0 2px !important;
}
#active-ips {
  position: absolute;
  bottom: 14%;
  right: 5px;
  font-size: 0.5em;
}
#stamp-01 {
  position: absolute;
  bottom: 22%;
  left: 5px;
  font-size: 0.5em;
}
#tl-moving {
  position: absolute;
  bottom: 14%;
  left: 5px;
  font-size: 0.5em;
}

.move-left { animation: move-left 10s linear forwards }
@keyframes move-left {
  0% { left: 5px }
  100% { left: -100% }
}
.move-right { animation: move-right 10s linear forwards }
@keyframes move-right {
  0% { right: 5px }
  100% { right: -100% }
}
#graph-y-bar {
  position: absolute;
  right: 5px;
  top: 20%;
  bottom: 20%;
  height: 60%;
  line-height: 0;
  font-size: 0.8em;
  z-index: 2;
}
#graph-y-bar li {
  list-style: none;
  height: 14.2%;
  transform: translateY(50%);
}
</style>