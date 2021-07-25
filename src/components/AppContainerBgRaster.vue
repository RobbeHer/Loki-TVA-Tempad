<template>
<div id="app-container-bg-raster">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "AppContainerBgRaster"
}
</script>

<style scoped>
#app-container-bg-raster {
  position: absolute;
  inset: 4px 4px 1.3em;
  border: solid 2px var(--main-color-darken);
  background-image:
      radial-gradient(circle at 1px 1px, black 1px, transparent 0px),
      linear-gradient(var(--main-color-darken) 2px, transparent 0px),
      linear-gradient(90deg, var(--main-color-darken) 2px, transparent 0px);
  background-size: 5vh 5vh;
  background-position: -2px -2px;
}
</style>