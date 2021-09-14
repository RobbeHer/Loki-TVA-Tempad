<template>
<ContentContainer :border="true" :black-bg="true">
  <img src="../assets/img/renaissance-fair-map.jpg" alt="">
  <div class="info">
    <p>LOCATION: EARTH</p>
    <p>TEMP: 23°</p>
    <p>YEAR: 1965</p>
    <div class="threat">
      <p>THREAT <span class="mark">{{ threatLevels[Math.floor(Math.random() * 5)] }}</span></p>
    </div>
  </div>
  <div class="warning">
    <p>VARIANT DETECTED</p>
  </div>
  <div class="sonar-wrapper">
    <div class="sonar"></div>
  </div>
</ContentContainer>
</template>

<script>
import ContentContainer from "@/components/ContentContainer";

export default {
  name: "Locator",
  components: {
    ContentContainer,
  },
  data() {
    return {
      threatLevels: [
          'LOW',
          'MODERATE',
          'SUBSTANTIAL',
          'SEVERE',
          'CRITICAL'
      ]
    }
  }
}
</script>

<style scoped>
img {
  height: 100%;
  width: auto;
  float: left;
}

.info {
  position: absolute;
  text-align: right;
  inset: 10px 20px;
}

.threat {
  position: absolute;
  bottom: 0;
  right: 0;
}

.mark {
  padding: 0 4px !important;
  background-color: var(--main-color);
  color: black;
}

.warning {
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: var(--main-color-lighten) 4px solid;
  background-color: black;
  animation: blinking 0.9s linear infinite;
}

@keyframes blinking {
  0% { opacity: 0 }
  49% { opacity: 0 }
  50% { opacity: 1 }
  100% { opacity: 1 }
}

.warning p {
  white-space: nowrap;
  font-size: 40px;
  padding: 10px 30px !important;
}

.sonar-wrapper {
  position: relative;
  top: 10%;
  left: 40vh;
}

.sonar {
  border: 4px solid var(--main-color-lighten);
  border-radius: 50%;
  animation: scale 2.5s linear infinite;
  position: relative;
  top: 0;
  left: 0;
}

@keyframes scale {
  0% {
    width: 0;
    height: 0;
  }
  100% {
    width: 750px;
    height: 750px;
    top: -375px;
    left: -375px;
    opacity: 0;
  }
}
</style>