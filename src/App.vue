<template>
  <div id="app">
    <AppContainer>
      <AppContainerBgRaster>
        <Navigation/>
        <ContentContainer>
          <router-view/><!-- Most routed content -->
        </ContentContainer>
      </AppContainerBgRaster>
      <Infobar/>
    </AppContainer>
  </div>
</template>

<script>
import AppContainer from "@/components/AppContainer";
import AppContainerBgRaster from "@/components/AppContainerBgRaster";
import Navigation from "@/components/Navigation";
import Infobar from "@/components/Infobar";
import ContentContainer from "@/components/ContentContainer";

export default {
  name: 'App',
  components: {
    AppContainer,
    AppContainerBgRaster,
    Navigation,
    Infobar,
    ContentContainer
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
}
body {
  background-color: var(--main-bg-color) !important;
  color: var(--main-color) !important;
}
</style>