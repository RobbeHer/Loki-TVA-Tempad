<template>
<ContentContainer :border="true" :black-bg="true">
  <div class="row">
    <div class="col">
      <div id="figure">
        <img src="../assets/img/mrs-minutes.png" alt="">
        <p>Hi there!</p>
      </div>
    </div>
    <div class="col">
      <div id="message">
        <h1>404</h1>
        <p>This page doesn't exist.</p>
        <div id="buttons">
          <a href="/" class="button">Home</a>
          <a class="button" onclick="history.back()">Go back</a>
        </div>
      </div>
    </div>
  </div>
</ContentContainer>
</template>

<script>
import ContentContainer from "@/components/ContentContainer";

export default {
  name: "error-404",
  components: {
    ContentContainer
  }
}
</script>

<style scoped>
.row {
  height: 100%;
  padding: 20px !important;
}
.col {
  height: 100%;
}
.col:first-child {
  text-align: center;
}
.col:first-child p {
  margin-top: 10px !important;
}
#figure {
  position: absolute;
  top: 50%;
  width: calc(50% - 20px);
  transform: translateY(-50%);
}
img {
  width: 60%;
}
#message {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
#buttons {
  margin-top: 10px !important;
}
.button {
  cursor: pointer;
  margin-right: 8px !important;
  border-radius: 4px;
  color: white;
  border: 2px solid var(--main-color);
  background-color: var(--main-bg-color);
  padding: 1px 5px 1px !important;
  text-decoration: none;
}
.button:hover,
.button:active
{
  background-color: var(--main-color-darken)!important;
}
</style>