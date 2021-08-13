<template>
<div id="infbar">
  12.04.1549&nbsp;&nbsp;&nbsp;0021.199&nbsp;//&nbsp;1122.991
  <p id="left-info">E:90.56c</p>
  <img src="../../assets/img/tva-logo.png" alt="">
</div>
</template>

<script>
export default {
  name: "Infobar"
}
</script>

<style scoped>
#infbar {
  position: absolute;
  inset: auto 4px 0;
  height: 1.5em;
}
#left-info {
  float: right;
}
img {
  background-color: var(--main-color-dark);
  border: 2px solid var(--main-color-darken);
  border-bottom: 0;
  position: absolute;
  right: 0;
  bottom: 1.4em;
  width: calc(25vh + 4px);
  height: calc(10vh + 4px);
}
</style>