<template>
<ContentContainer>
  <div class="row">
    <div class="col grid-container">
      <div class="grid-item" @click="selectedTimeDoor" id="TimeDoor">
        <img src="../assets/img/time-door.png" alt="">
        <p>TIME DOOR</p>
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
      <div id="action-list">
        <p id="title">ACTION LIST<span>////</span></p>
        <p id="sub-title">
          <span class="underline">{{ canSelectOptions ? selectedProgram[0] : 'S' }}</span>{{ canSelectOptions ? selectedProgram.slice(1) : 'ELECT PROGRAM' }}
        </p>
        <div id="buttons">
          <div @click="show($event, 'options')" class="option-btn dimmed">1.<span class="underline">O</span>PTIONS</div>
          <div @click="show($event,'run-program')" class="option-btn dimmed">2.<span class="underline">R</span>UN PROGRAM</div>
          <div  @click="unSelectedAllOptions" class="option-btn dimmed">3.<span class="underline">C</span>LEAR CACHE</div>
        </div>
      </div>
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
  },
  data() {
    return {
      canSelectOptions: false,
      selectedProgram: ''
    }
  },
  methods: {
    selectedTimeDoor() {
      this.forEachElementAddClass("#TimeDoor p", "marked");
      this.forEachElementRemoveClass("#action-list .option-btn", "dimmed");
      this.selectedProgram = 'TIME DOOR';
      this.canSelectOptions = true;
    },
    show(e, option) {
      if (!this.canSelectOptions) return;
      this.forEachElementRemoveClass("#action-list .marked", "marked");
      e.target.classList.add('marked');
      console.log(option)
    },
    unSelectedAllOptions() {
      this.forEachElementRemoveClass(".marked", "marked");
      this.forEachElementAddClass("#action-list .option-btn", "dimmed");
      this.canSelectOptions = false;
      console.log('unselect')
    },
    forEachElementRemoveClass(element, className) {
      let elements = document.querySelectorAll(element);
      if (elements !== null) elements.forEach((el) => { el.classList.remove(className); });
    },
    forEachElementAddClass(element, className) {
      let elements = document.querySelectorAll(element);
      if (elements !== null) elements.forEach((el) => { el.classList.add(className); });
    },
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
#action-list {
  padding: 4vh 0 0 3vh !important;
  width: fit-content;
}
#action-list #title,
#action-list #sub-title,
#action-list .option-btn {
  font-size: 1.7em;
}
#action-list #buttons {
  width: fit-content;
}
#action-list .option-btn {
  padding: 2vh 1vh !important;
  font-size: 1.3em;
}
#TimeDoor p:hover,
#TimeDoor p:active,
#action-list .option-btn:hover,
#action-list .option-btn:active {
  cursor: pointer;
}
.grid-item /deep/ p:hover:not(.marked),
.grid-item /deep/ p:active:not(.marked),
#action-list .option-btn:hover:not(.marked),
#action-list .option-btn:active:not(.marked) {
  background-color: var(--main-color-lighten);
  color: var(--main-bg-color);
}
#action-list #title span {
  font-size: 0.7em;
}
.dimmed {
  color: var(--main-color-darken-soft);
}
.marked {
  background-color: var(--main-color);
  color: var(--main-bg-color);
}
.marked .underline {
  border-bottom: 0 solid;
}
.underline {
  border-bottom: 2px solid;
}
</style>
