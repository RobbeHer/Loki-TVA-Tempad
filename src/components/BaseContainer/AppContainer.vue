<template>
<div id="app-container">
  <slot/>
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
  inset: 5px;
  border: solid 4px var(--main-color);
}
</style>