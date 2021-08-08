<template>
<ContentContainer :border="true" :semiTransparentBg="true">
  <TextSlider text="REDLINE IMMINENT" color="#F00"/>
  <div id="graph-container">
    <div id="unit-counter">
      <p id="units">{{ getUnits }}</p>
      <p>UNITS</p>
    </div>


    <div id="graph">
    </div>


    <div id="timeline-info">
      <p>TIMELINE MAG: {{ timeline.mag }}</p>
      <p>TIMELINE SEGMENT: {{ timeline.segment }}</p>
    </div>
  </div>
</ContentContainer>
</template>

<script>
import ContentContainer from "@/components/ContentContainer";
import TextSlider from "@/components/TextSlider";

export default {
  name: "Branches",
  components: {
    ContentContainer,
    TextSlider
  },
  data() {
    return {
      units: 0,
      timeline: {
        mag: '03.55.8674.1122',
        segment: '616.432'
      },
      countdown: 5000,
      totalAmountOfPixels: 67,
      amountOfPixelsPlaced: 0
    }
  },
  computed: {
    getUnits() {
      return this.units.toFixed(2);
    }
  },
  mounted() {
    const timeOut =  this.countdown / this.totalAmountOfPixels;

    let interval = window.setInterval(() => {
      this.countdown -= timeOut;
      this.addPixel();

      if (this.countdown <= 0) {
        clearTimeout(interval);
      }
    }, timeOut );
  },
  methods: {
    addPixel() {
      let div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.bottom = '0';
      div.style.left = '50%';
      div.style.width = '1.5%';
      div.style.height = '3%';
      div.style.transform = `translate(${35 * this.amountOfPixelsPlaced}%, ${-50 * this.amountOfPixelsPlaced}%)`;
      div.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color-lighten');
      document.getElementById('graph').appendChild(div);
      this.amountOfPixelsPlaced ++;
    }
  }
}
</script>

<style scoped>
#unit-counter {
  position: absolute;
  left: 5px;
  top: 2em;
  line-height: 1.5em;
}
#units {
  font-size: 2em;
}
#graph {
  position: absolute;
  inset: 2em 0 calc(2em + 5px);
  border: 1px dotted white;
  overflow: hidden;
}
#timeline-info {
  position: absolute;
  left: 5px;
  bottom: 5px;
  line-height: 1em;
  color: var(--main-color-light);
}
</style>