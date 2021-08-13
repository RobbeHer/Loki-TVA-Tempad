<template>
<ContentContainer>
  <div class="row">
    <div class="col grid-container">
      <div class="grid-item">
        <RouterIcon :link="'/time-door'" :icon="'time-door'" :title="'TIME DOOR'"></RouterIcon>
      </div>
      <div class="grid-item">
        <RouterIcon :link="'/miss-minutes'" :icon="'mrs-minutes'" :title="'MISS MINUTES'"></RouterIcon>
      </div>
      <div class="grid-item">
        <RouterIcon :link="'/settings'" :icon="'settings'" :title="'SETTINGS'"></RouterIcon>
      </div>
      <div class="grid-item">
        <RouterIcon :link="'/directory'" :icon="'directory'" :title="'DIRECTORY'"></RouterIcon>
      </div>
    </div>
    <div class="col">
      <p>ACTION LIST<span>////</span></p>
      <p>SELECT PROGRAM</p>
      <button>1. OPTIONS</button>
      <br>
      <button>2. RUN PROGRAM</button>
      <br>
      <button>3. CLEAR CACHE</button>
    </div>
  </div>
</ContentContainer>
</template>

<script>
import ContentContainer from "@/components/ContentContainer";
import RouterIcon from "@/components/RouterIcon";

export default {
  name: 'Home',
  components: {
    ContentContainer,
    RouterIcon
  }
}
</script>

<style scoped>
.row {
  height: 100%;
}

.grid-container {
  display: grid;
  grid-template-columns: 50% 50%;
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
