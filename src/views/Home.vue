<template>
<ContentContainer>
  <div class="row">
    <div class="col grid-container">
      <div class="grid-item">
        <RouterIcon :link="'/time-door'" :icon="'info-circle'" :title="'TIME DOOR'"></RouterIcon>
      </div>
      <div class="grid-item">
        <RouterIcon :link="'/miss-minutes'" :icon="'info-circle'" :title="'MISS MINUTES'"></RouterIcon>
      </div>
      <div class="grid-item">
        <RouterIcon :link="'/settings'" :icon="'info-circle'" :title="'SETTINGS'"></RouterIcon>
      </div>
      <div class="grid-item">
        <RouterIcon :link="'/directory'" :icon="'info-circle'" :title="'DIRECTORY'"></RouterIcon>
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

<style>
.row {
  height: 100%;
}

.grid-container {
  display: grid;
  grid-template-columns: 50% 50%;
}

.grid-item {
  text-align: center;
}
</style>
