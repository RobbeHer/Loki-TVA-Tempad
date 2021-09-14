<template>
<ContentContainer>
  <div class="row">
    <div class="col grid-container">
      <div class="grid-item" @click="selectedTimeDoor" id="TimeDoor">
        <img src="../assets/img/time-door.png" alt="">
        <p>TIME DOOR</p>
      </div>
      <div class="grid-item link">
        <RouterIcon :link="'/miss-minutes'" :icon="'mrs-minutes'" :title="'MISS MINUTES'"></RouterIcon>
      </div>
      <div class="grid-item link">
        <RouterIcon :link="'/settings'" :icon="'settings'" :title="'SETTINGS'"></RouterIcon>
      </div>
      <div class="grid-item link">
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
          <div @click="show($event, 'options')" class="option-btn dimmed-1 btn-an-1">1.<span class="underline">O</span>PTIONS</div>
          <div @click="show($event,'run-program')" class="option-btn dimmed-2 btn-an-2">2.<span class="underline">R</span>UN PROGRAM</div>
          <div  @click="unSelectedAllOptions" class="option-btn dimmed-3 btn-an-3">3.<span class="underline">C</span>LEAR CACHE</div>
        </div>
      </div>
      <div id="building">
        <p><span class="an-1">///</span><span class="an-3">///</span></p>
        <p class="an-2">BUILDING PORTAL</p>
        <p class="an-4">PLEASE WAIT</p>
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
      selectedProgram: '',
    }
  },
  methods: {
    selectedTimeDoor() {
      this.selectedProgram = 'TIME DOOR';
      this.canSelectOptions = true;
      this.forEachElementAddClass("#TimeDoor p", "marked");
      setTimeout(() => {
        this.forEachElementRemoveClass("#action-list .btn-an-1", "dimmed-1");
        setTimeout(() => {
          this.forEachElementRemoveClass("#action-list .btn-an-2", "dimmed-2");
          setTimeout(() => {
            this.forEachElementRemoveClass("#action-list .btn-an-3", "dimmed-3");
          }, 200)
        }, 200)
      }, 200)
    },
    show(e, option) {
      if (!this.canSelectOptions) return;
      this.forEachElementRemoveClass("#action-list .marked", "marked");
      e.target.classList.add('marked');
      console.log(option)
      if (option === 'run-program') this.animateTimeDoor();
    },
    unSelectedAllOptions() {
      this.forEachElementRemoveClass(".marked", "marked");
      this.forEachElementAddClass("#action-list .btn-an-1", "dimmed-1");
      this.forEachElementAddClass("#action-list .btn-an-2", "dimmed-2");
      this.forEachElementAddClass("#action-list .btn-an-3", "dimmed-3");
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
    animateTimeDoor() {
      this.forEachElementAddClass(".link", "fade-hide");
      this.forEachElementAddClass("#action-list", "fade-hide-2");
      this.forEachElementAddClass("#TimeDoor", "zoom");
      this.forEachElementAddClass("#building", "show");
      for (let x = 1; x <= 4; x++) {
        this.forEachElementAddClass(`#building .an-${x}`, `show-${x}`);
      }
      setTimeout(() => {
        this.forEachElementRemoveClass(".link", "fade-hide");
        this.forEachElementRemoveClass("#action-list", "fade-hide-2");
        this.forEachElementRemoveClass("#TimeDoor", "zoom");
        this.forEachElementRemoveClass("#building", "show");
        for (let x = 1; x <= 4; x++) {
          this.forEachElementRemoveClass(`#building .an-${x}`, `show-${x}`);
        }
        this.unSelectedAllOptions();
      }, 4000)
    }
  }
}
</script>

<style scoped>
.fade-hide { animation: hide 0.5s linear forwards; }
.fade-hide-2 { animation: hide 0.25s 0.25s linear forwards; }
.hide {
  display: none;
}
@keyframes hide {
  100% {
    opacity: 0;
    filter: blur(50px);
  }
}
.show {
  top: 50%;
  transform: translateY(-50%);
  animation: show 0s 0.5s linear forwards;
}
.show-1 { animation: show 0.25s 0.5s linear forwards; }
.show-2 { animation: show 0.25s 0.75s linear forwards; }
.show-3 { animation: show 0.25s 1s linear forwards; }
.show-4 { animation: show 0.25s 1.25s linear forwards; }
.an-1, .an-2, .an-3, .an-4 {
  opacity: 0;
}
@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.zoom {
  animation: zoom 1s linear forwards;
}
@keyframes zoom {
  100% {
    transform: scale(2) translate(25%, 25%);
  }
}
#building {
  position: absolute;
  font-size: 1.7em;
  opacity: 0;
}
#building span {
  font-size: 0.7em;
}
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
#action-list .option-btn:hover {
  cursor: pointer;
}
.grid-item /deep/ p:hover:not(.marked),
#action-list .option-btn:hover:not(.marked) {
  background-color: var(--main-color-lighten);
  color: var(--main-bg-color);
}
#action-list #title span {
  font-size: 0.7em;
}
.dimmed-1,
.dimmed-2,
.dimmed-3 {
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
