<template>
<div id="content-container">
  <slot>Loki TVA TEMPAD <br>Main layout and styling</slot>
</div>
</template>

<script>
export default {
  name: "content-container"
}
</script>

<style scoped>
#content-container {
  position: absolute;
  inset: calc(5vh - 2px) calc(5vh - 2px) auto calc(10vh - 2px);
  border: dotted 1px white;
}
</style>