<template>
  <div>
    <Base id="app"/>
    <div id="orientation-warning">
      <figure>
        <img src="./assets/img/mrs-minutes.png" alt="">
        <figcaption>Hi there!</figcaption>
      </figure>
      <br>
      <p>This app only works in a landscape orientation.</p>
      <br>
      <p>Please turn your device.</p>
      <br>
      <br>
      <br>
      <p>Tip: Turn off 'Auto rotate' on your mobile device while in landscape orientation to prevent showing this message.</p>
    </div>
    <Pwa/>
  </div>
</template>

<script>
import Base from "@/components/BaseContainer";
import Pwa from "@/components/Pwa";

export default {
  name: 'App',
  components: {
    Base,
    Pwa
  }
}
</script>

<style>
* {
  margin: 0 !important;
  padding: 0 !important;
}
:root {
  --main-bg-color: black;
  --main-color: rgba(255,165,40,1);
  /* rgba to rgb converter:  https://borderleft.com/toolbox/rgba/ */
  --main-color-darken-soft: rgba(255,165,40,0.7);
  --main-color-darken: rgb(102,66,16);
  --main-color-dark: rgb(51,33,8);
  --main-color-lighten: rgb(255,178,77);
  --main-color-light: rgb(255, 234, 210);
}
body {
  background-color: var(--main-bg-color) !important;
  color: var(--main-color) !important;
  font-family: monospace !important;
  font-weight: bold !important;
}
#orientation-warning {
  display: none;
  position: fixed;
  left: 50%;
  top: 64px;
  width: 80%;
  transform: translateX(-50%);
}
#orientation-warning figure {
  text-align: center;
}
#orientation-warning figcaption {
  margin-top: 10px !important;
}
#orientation-warning img {
  width: 50%;
  height: auto;
}
#app {
  display: block;
}
@media screen and (orientation: portrait) {
  #app {
    display: none;
  }
  #orientation-warning {
    display: block;
  }
}
</style>