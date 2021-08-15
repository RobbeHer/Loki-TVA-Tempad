<template>
  <div class="update-dialog" v-if="prompt">
    <div class="update-dialog__content">
      A new version is found. Refresh to load it?
    </div>
    <div class="update-dialog__actions">
      <button
          class="update-dialog__button update-dialog__button--confirm"
          @click="update"
      >
        Update
      </button>
      <button
          class="update-dialog__button update-dialog__button--cancel"
          @click="prompt = false"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pwa",
  data() {
    return {
      prompt: false
    };
  },
  methods: {
    async update() {
      this.prompt = false;
      await this.$workbox.messageSW({ type: "SKIP_WAITING" });
    }
  },
  created() {
    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        this.prompt = true;
      });
    }
  }
}
</script>

<style scoped>
.update-dialog {
  position: fixed;
  left: 50%;
  bottom: 64px;
  transform: translateX(-50%);
  border-radius: 4px;
  border: 2px solid var(--main-color);
  padding: 12px !important;
  max-width: 576px;
  color: white;
  background-color: var(--main-bg-color);
  z-index: 1000;
}
.update-dialog__actions {
  display: flex;
  margin-top: 8px !important;
}
.update-dialog__button {
  margin-right: 8px !important;
  border-radius: 4px;
  color: white;
  border: 2px solid var(--main-color);
  background-color: var(--main-bg-color);
  padding: 1px 5px 3px !important;
}

.update-dialog__button:hover,
.update-dialog__button:active
{
  background-color: var(--main-color-darken)!important;
}
.update-dialog__button--confirm {
  margin-left: auto !important;
}
</style>