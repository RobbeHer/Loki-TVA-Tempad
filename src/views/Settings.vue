<template>
<ContentContainer :black-bg="true" :border="true">
  <fieldset>
    <legend>Sound</legend>
    <label for="checkbox">Enabled</label>
    <input type="checkbox" id="checkbox" v-model="soundEnabled" @change="setSoundEnabled" :checked="$store.state.soundEnabled">
  </fieldset>
  <fieldset>
    <legend>Navigation</legend>
    <div v-for="i in 5" :key="i">
      <template v-if="i === 1">
        <label>
          <img :src="image(i)" alt="nav 1" class="nav-icon"> Home (Default)
        </label>
      </template>
      <template v-else>
        <label :for="`nav${i}`">
          <img :src="image(i)" alt="navIcon" class="nav-icon">
        </label>
        <select @change="setNavOption(i, $event)" :id="`nav${i}`">
          <option v-for="(value, name, index) in $store.state.navigation.options"
                  :selected="value === $store.state.navigation['nav' + i]"
                  :key="index"
                  :value="value">
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
    ContentContainer
  },
  data() {
    return {
      soundEnabled: this.$store.state.soundEnabled,
    }
  },
  methods: {
    image(i) {
      return require(`../assets/img/nav-icon/${i}.png`)
    },
    setSoundEnabled() {
      this.$store.commit('soundEnabled', this.soundEnabled)
    },
    setNavOption(i, event) {
      this.$store.commit('navOption', {option: `nav${i}`, value: event.target.value})
    }
  }
}
</script>

<style scoped>
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