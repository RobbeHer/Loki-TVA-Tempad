<template>
<div id="base-container">
  <AppContainer v-if="showAppContainer">
    <AppContainerBgRaster>
      <Navigation/>
      <router-view/><!-- Most routed content -->
    </AppContainerBgRaster>
    <Infobar/>
  </AppContainer>
  <router-view v-else/>
</div>
</template>

<script>
import AppContainer from "@/components/BaseContainer/AppContainer";
import AppContainerBgRaster from "@/components/BaseContainer/AppContainerBgRaster";
import Navigation from "@/components/BaseContainer/Navigation";
import Infobar from "@/components/BaseContainer/Infobar";

export default {
  name: 'index',
  data() {
    return {
      showAppContainer: true,
      dontShowOnPages: [
        '/draw'
      ]
    }
  },
  components: {
    AppContainer,
    AppContainerBgRaster,
    Navigation,
    Infobar
  },
  watch: {
    $route(to) {
      this.showAppContainer = !this.dontShowOnPages.includes(to.path);
    }
  }
}
</script>