<template>
<ContentContainer :border="1" :semiTransparentBg="1">
  <TextSlider text="REDLINE IMMINENT" color="#F00"/>
  <div id="graph-container">
    <div id="unit-counter">
      <p id="units">{{ getUnits }}</p>
      <p>UNITS</p>
    </div>


    <div id="graph">
      <!-- GRAPH -->
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
      }
    }
  },
  computed: {
    getUnits() {
      return this.units.toFixed(2);
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
}
#timeline-info {
  position: absolute;
  left: 5px;
  bottom: 5px;
  line-height: 1em;
  color: var(--main-color-light);
}
</style>