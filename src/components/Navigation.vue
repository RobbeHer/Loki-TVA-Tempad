<template>
<nav id="navigation">
  <RouterIcon :link="'/'" :icon="'check-square-fill'"></RouterIcon>
  <RouterIcon :link="'/directory'" :icon="'check-square-fill'"></RouterIcon>
  <RouterIcon :link="'/'" :icon="'check-square-fill'"></RouterIcon>
  <RouterIcon :link="'/'" :icon="'check-square-fill'"></RouterIcon>
  <RouterIcon :link="'/'" :icon="'check-square-fill'"></RouterIcon>
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
  bottom: 5vh;
}
/deep/ svg {
  width: 5vh;
  height: 5vh;
}
</style>