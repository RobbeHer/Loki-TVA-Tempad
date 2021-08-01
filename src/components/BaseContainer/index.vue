<template>
<div id="base-container">
  <AppContainer>
    <AppContainerBgRaster>
      <Navigation/>
      <router-view/><!-- Most routed content -->
    </AppContainerBgRaster>
    <Infobar/>
  </AppContainer>
</div>
</template>

<script>
import AppContainer from "@/components/BaseContainer/AppContainer";
import AppContainerBgRaster from "@/components/BaseContainer/AppContainerBgRaster";
import Navigation from "@/components/BaseContainer/Navigation";
import Infobar from "@/components/BaseContainer/Infobar";

export default {
  name: 'index',
  components: {
    AppContainer,
    AppContainerBgRaster,
    Navigation,
    Infobar
  }
}
</script>