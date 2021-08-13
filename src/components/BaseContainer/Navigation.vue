<template>
<nav id="navigation">
  <RouterIcon :link="'/'" :icon="'nav-icon-1'"></RouterIcon>
  <RouterIcon :link="'/directory'" :icon="'nav-icon-2'"></RouterIcon>
  <RouterIcon :link="'/timeloop'" :icon="'nav-icon-3'"></RouterIcon>
  <RouterIcon :link="'/branches'" :icon="'nav-icon-4'"></RouterIcon>
  <RouterIcon :link="'/'" :icon="'nav-icon-5'"></RouterIcon>
</nav>
</template>

<script>
import RouterIcon from "@/components/RouterIcon";

export default {
  name: "Navigation",
  components: {
    RouterIcon
  }
}
</script>

<style scoped>
#navigation {
  position: absolute;
  bottom: 0;
}
/deep/ #router-icon {
  margin-bottom: 4vh !important;
}
/deep/ #router-icon img {
  width: 4.5vh;
  height: auto;
}
</style>