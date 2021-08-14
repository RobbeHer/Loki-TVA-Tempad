<template>
<div id="router-icon">
  <router-link :to="{path: link}">

    <img v-if="icon === 'time-door'" src="../assets/img/time-door.png" alt="">

    <img v-else-if="icon === 'mrs-minutes'" src="../assets/img/mrs-minutes.png" alt="">

    <img v-else-if="icon === 'settings'" src="../assets/img/settings.png" alt="">

    <img v-else-if="icon === 'directory'" src="../assets/img/directory.png" alt="">

    <img v-else-if="icon === 'settings'" src="../assets/img/settings.png" alt="">

    <img v-else-if="icon === 'timeloop'" src="../assets/img/timeloop.png" alt="">

    <img v-else-if="icon === 'timekeepers'" src="../assets/img/timekeepers.png" alt="">

    <img v-else-if="icon === 'personnel'" src="../assets/img/personnel.png" alt="">

    <img v-else-if="icon === 'missions'" src="../assets/img/missions.png" alt="">

    <img v-else-if="icon === 'battery'" src="../assets/img/battery.png" alt="">

    <img v-else-if="icon === 'branches'" src="../assets/img/branches.png" alt="">

    <img v-else-if="icon === 'draw'" src="../assets/img/draw.png" alt="">

    <img v-else-if="icon === 'news'" src="../assets/img/news.png" alt="">

    <img v-else-if="icon === 'nav-icon-1'" src="../assets/img/nav-icon/1.jpg" alt="">

    <img v-else-if="icon === 'nav-icon-2'" src="../assets/img/nav-icon/2.jpg" alt="">

    <img v-else-if="icon === 'nav-icon-3'" src="../assets/img/nav-icon/3.jpg" alt="">

    <img v-else-if="icon === 'nav-icon-4'" src="../assets/img/nav-icon/4.jpg" alt="">

    <img v-else src="../assets/img/nav-icon/5.png" alt="">

    <p v-if="title">{{ title }}</p>
  </router-link>
</div>
</template>

<script>
export default {
  name: "RouterIcon",
  props: ['link', 'icon', 'title']
}
</script>

<style scoped>
#router-icon a {
  color: var(--main-color);
  text-decoration: none;
}
p:hover:hover,
p:active:hover {
  background-color: var(--main-color-lighten);
  color: var(--main-bg-color);
}
</style>