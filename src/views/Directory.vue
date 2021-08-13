<template>
<ContentContainer>
  <div class="grid-container">
    <div class="grid-item">
      <RouterIcon :link="'/timeloop'" :icon="'timeloop'" :title="'TIMELOOP'"></RouterIcon>
    </div>
    <div class="grid-item">
      <RouterIcon :link="'/timekeepers'" :icon="'timekeepers'" :title="'TIMEKEEPERS'"></RouterIcon>
    </div>
    <div class="grid-item">
      <RouterIcon :link="'/personnel'" :icon="'personnel'" :title="'PERSONNEL'"></RouterIcon>
    </div>
    <div class="grid-item">
      <RouterIcon :link="'/missions'" :icon="'missions'" :title="'MISSIONS'"></RouterIcon>
    </div>
    <div class="grid-item">
      <RouterIcon :link="'/battery'" :icon="'battery'" :title="'BATTERY'"></RouterIcon>
    </div>
    <div class="grid-item">
      <RouterIcon :link="'/branches'" :icon="'branches'" :title="'BRANCHES'"></RouterIcon>
    </div>
    <div class="grid-item">
      <RouterIcon :link="'/draw'" :icon="'draw'" :title="'DRAW'"></RouterIcon>
    </div>
    <div class="grid-item">
      <RouterIcon :link="'/news'" :icon="'news'" :title="'NEWS'"></RouterIcon>
    </div>
  </div>
</ContentContainer>
</template>

<script>
import ContentContainer from "@/components/ContentContainer";
import RouterIcon from "@/components/RouterIcon";

export default {
  name: "Directory",
  components: {
    ContentContainer,
    RouterIcon
  }
}
</script>

<style scoped>
.grid-container {
  height: 100%;
}

.grid-container {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}

.grid-item {
  text-align: center;
  place-self: center center;
}

.grid-item /deep/ img {
  width: auto;
  height: 25vh;
}
</style>