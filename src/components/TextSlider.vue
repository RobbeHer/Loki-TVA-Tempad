<template>
  <Marquee direction="left">
    <Slide style="margin-left: 30vh !important;" v-for="i in repeat" :key="i">
      <span v-if="Array.isArray(text)">
        <span v-for="(t, i) in text" :key="i" :style="{ color: color }">
          <span v-if="i !== 0" :style="{ color: '#F00' }"> | </span>{{ t }}
        </span>
      </span>
      <span v-else :style="{ color: color }">{{ text }}</span>
    </Slide>
  </Marquee>
</template>

<script>
import { Marquee, Slide } from 'vue-marquee-component'

export default {
  name: 'TextSlider',
  props: {
    text: {
      type: [String, Array],
      default: 'Hello World!'
    },
    color: {
      type: String,
      default: '#F00'
    },
    repeat: {
      type: Number,
      default: 100
    }
  },
  components: {
    [Marquee.name]: Marquee,
    [Slide.name]: Slide
  }
}
</script>