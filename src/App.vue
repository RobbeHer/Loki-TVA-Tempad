<template>
  <Base/>
</template>

<script>
import Base from "@/components/BaseContainer";

export default {
  name: 'App',
  components: {
    Base
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
  --main-color-darken: rgb(102,66,16);
  --main-color-dark: rgb(51,33,8);
  --main-color-lighten: rgb(255,178,77);
  --main-color-light: rgb(255, 234, 210);
}
body {
  background-color: var(--main-bg-color) !important;
  color: var(--main-color) !important;
}
</style>