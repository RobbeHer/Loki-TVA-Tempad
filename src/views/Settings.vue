<template>
  <ContentContainer :black-bg="true" :border="true">
    <fieldset>
      <legend>Sound</legend>
      <label for="portal">Portal</label>
      <input
        type="checkbox"
        id="portal"
        v-model="portalSoundEnabled"
        @change="setPortalSoundEnabled"
        :checked="$store.state.portalSoundEnabled"
      />
      <br />
      <label for="branching">Branching</label>
      <input
        type="checkbox"
        id="branching"
        v-model="branchingSoundEnabled"
        @change="setBranchingSoundEnabled"
        :checked="$store.state.branchingSoundEnabled"
      />
    </fieldset>
    <fieldset>
      <legend>Time loop</legend>
      <label for="animation">Animation</label>
      <input
        type="checkbox"
        id="animation"
        v-model="timeLoopAnimationEnabled"
        @change="setTimeLoopAnimationEnabled"
        :checked="$store.state.timeLoopAnimation.enabled"
      />
      <br />
      <label>Type:</label>
      <span
        v-for="type in $store.state.timeLoopAnimation.options"
        :key="type"
      >
        <input
          name="type"
          :id="type"
          :value="type"
          type="radio"
          :checked="type === $store.state.timeLoopAnimation.type"
          @change="setTimeLoopAnimationType(type)"
        >
        <label :for="type">{{ type }}</label>
      </span>
    </fieldset>
    <fieldset>
      <legend>Navigation</legend>
      <div v-for="i in 5" :key="i">
        <template v-if="i === 1">
          <label>
            <img :src="image(i)" alt="nav 1" class="nav-icon" /> Home (Default)
          </label>
        </template>
        <template v-else>
          <label :for="`nav${i}`">
            <img :src="image(i)" alt="navIcon" class="nav-icon" />
          </label>
          <select @change="setNavOption(i, $event)" :id="`nav${i}`">
            <option
              v-for="(value, name, index) in $store.state.navigation.options"
              :selected="value === $store.state.navigation['nav' + i]"
              :key="index"
              :value="value"
            >
              {{ name }}
            </option>
          </select>
        </template>
      </div>
    </fieldset>
  </ContentContainer>
</template>

<script>
import ContentContainer from "@/components/ContentContainer";

export default {
  name: "Settings",
  components: {
    ContentContainer,
  },
  data() {
    return {
      portalSoundEnabled: this.$store.state.portalSoundEnabled,
      branchingSoundEnabled: this.$store.state.branchingSoundEnabled,
      timeLoopAnimationEnabled: this.$store.state.timeLoopAnimation.enabled,
    };
  },
  methods: {
    image(i) {
      return require(`../assets/img/nav-icon/${i}.png`);
    },
    setPortalSoundEnabled() {
      this.$store.commit("portalSoundEnabled", this.portalSoundEnabled);
    },
    setBranchingSoundEnabled() {
      this.$store.commit("branchingSoundEnabled", this.branchingSoundEnabled);
    },
    setTimeLoopAnimationEnabled() {
      this.$store.commit(
        "timeLoopAnimationEnabled",
        this.timeLoopAnimationEnabled
      );
    },
    setTimeLoopAnimationType(type) {
      this.$store.commit(
        "timeLoopAnimationType",
        type
      );
    },
    setNavOption(i, event) {
      this.$store.commit("navOption", {
        option: `nav${i}`,
        value: event.target.value,
      });
    },
  },
};
</script>

<style scoped>
legend {
  font-size: 2vw;
}
.nav-icon {
  width: 4.5vh;
  height: auto;
}
fieldset {
  margin-left: 15px !important;
}
label {
  margin-bottom: 15px !important;
  margin-right: 15px !important;
}
</style>