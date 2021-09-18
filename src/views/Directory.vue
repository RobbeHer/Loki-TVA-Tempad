<template>
<ContentContainer>
  <div class="grid-container">
    <!-- 1 -->
    <div class="grid-item">
      <RouterIcon :link="'/time-loop'" :icon="'timeloop'" :title="'TIME LOOP'"></RouterIcon>
    </div>
    <!-- 6 -->
    <div class="grid-item">
      <RouterIcon :link="'/branches'" :icon="'branches'" :title="'BRANCHES'"></RouterIcon>
    </div>
    <!-- 4 -->
    <div class="grid-item">
      <RouterIcon :link="'/missions'" :icon="'missions'" :title="'MISSIONS'"></RouterIcon>
    </div>
    <!-- 5 -->
    <!--<div class="grid-item">
      <RouterIcon :link="'/battery'" :icon="'battery'" :title="'BATTERY'"></RouterIcon>
    </div>-->
    <!-- 2 -->
    <div class="grid-item">
      <RouterIcon :link="'/time-keepers'" :icon="'timekeepers'" :title="'TIME KEEPERS'"></RouterIcon>
    </div>
    <!-- 3 -->
    <div class="grid-item">
      <RouterIcon :link="'/personnel'" :icon="'personnel'" :title="'PERSONNEL'"></RouterIcon>
    </div>
    <!-- 7 -->
    <div class="grid-item">
      <RouterIcon :link="'/draw'" :icon="'draw'" :title="'DRAW'"></RouterIcon>
    </div>
    <!-- 8 -->
    <!--<div class="grid-item">
      <RouterIcon :link="'/news'" :icon="'news'" :title="'NEWS'"></RouterIcon>
    </div>-->
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
  grid-template-columns: 33% 33% 33%;
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