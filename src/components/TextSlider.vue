<template>
  <Marquee direction="left">
    <Slide style="margin-left: 20vh !important;" v-for="i in 100" :key="i">
      <span :style="{ color: color }">{{ text }}</span>
    </Slide>
  </Marquee>
</template>

<script>
import { Marquee, Slide } from 'vue-marquee-component'

export default {
  name: 'TextSlider',
  props: {
    text: {
      type: String,
      default: 'Hello World!'
    },
    color: {
      type: String,
      default: '#F00'
    }
  },
  components: {
    [Marquee.name]: Marquee,
    [Slide.name]: Slide
  }
}
</script>