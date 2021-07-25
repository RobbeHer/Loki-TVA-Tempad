<template>
<div class="directory">
  <div class="grid-container">
    <div class="grid-item">
      <RouterIcon :link="'/timeloop'" :icon="'info-circle'" :title="'TIMELOOP'"></RouterIcon>
    </div>
    <div class="grid-item">
      <RouterIcon :link="'/timekeepers'" :icon="'info-circle'" :title="'TIMEKEEPERS'"></RouterIcon>
    </div>
    <div class="grid-item">
      <RouterIcon :link="'/personnel'" :icon="'info-circle'" :title="'PERSONNEL'"></RouterIcon>
    </div>
    <div class="grid-item">
      <RouterIcon :link="'/missions'" :icon="'info-circle'" :title="'MISSIONS'"></RouterIcon>
    </div>


    <div class="grid-item">
      <RouterIcon :link="'/battery'" :icon="'info-circle'" :title="'BATTERY'"></RouterIcon>
    </div>
    <div class="grid-item">
      <RouterIcon :link="'/branches'" :icon="'info-circle'" :title="'BRANCHES'"></RouterIcon>
    </div>
    <div class="grid-item">
      <RouterIcon :link="'/draw'" :icon="'info-circle'" :title="'DRAW'"></RouterIcon>
    </div>
    <div class="grid-item">
      <RouterIcon :link="'/news'" :icon="'info-circle'" :title="'NEWS'"></RouterIcon>
    </div>
  </div>
</div>
</template>

<script>
import RouterIcon from "@/components/RouterIcon";

export default {
  name: "Directory",
  components: {
    RouterIcon
  }
}
</script>

<style scoped>
.directory,
.grid-container {
  height: 100%;
}

.grid-container {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}

.grid-item {
  text-align: center;
}
</style>