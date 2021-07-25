<template>
<div id="app-container">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "AppContainer"
}
</script>

<style scoped>
#app-container {
  position: absolute;
  inset: 20px;
  border: solid 4px var(--main-color);
}
</style>