<template>
  <div id="app">
    <appContainer>
      <appContainerBgRaster>
        <navigation/>
        <contentContainer>
          <!-- Most routed content -->
        </contentContainer>
      </appContainerBgRaster>
      <infobar/>
    </appContainer>
  </div>
</template>

<script>
import appContainer from "@/components/app-container";
import appContainerBgRaster from "@/components/app-container-bg-raster";
import navigation from "@/components/navigation";
import infobar from "@/components/infobar";
import contentContainer from "@/components/content-container";

export default {
  name: 'App',
  components: {
    appContainer,
    appContainerBgRaster,
    navigation,
    infobar,
    contentContainer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
:root {
  --main-bg-color: black;
  --main-color: rgba(255,165,40,1);
  /* rgba to rgb converter:  https://borderleft.com/toolbox/rgba/ */
  --main-color-darken: rgb(102,66,16);
  --main-color-dark: rgb(51,33,8);
}
body {
  background-color: var(--main-bg-color);
  color: var(--main-color);
}
</style>