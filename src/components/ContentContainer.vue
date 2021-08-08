<template>
<div id="content-container" :class="{ 'container-border': border, 'semi-transparent-bg': semiTransparentBg, 'black-bg': blackBg }">
  <slot>Loki TVA TEMPAD <br>Main layout and styling <br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi cumque debitis eligendi eos et eum expedita fugiat fugit illo, illum ipsum necessitatibus odit optio placeat possimus praesentium provident quam quasi qui repellendus saepe sed veniam vitae voluptas voluptatem voluptates voluptatum! Accusantium alias doloremque odio perspiciatis voluptatem. Adipisci animi, assumenda consequatur delectus distinctio fuga iste natus nihil nulla repellat saepe similique sint sit ullam veritatis. A aliquam blanditiis debitis dolor, eius eligendi enim et fugiat fugit illum in ipsa ipsum maxime nemo nesciunt nisi odit, optio possimus provident quasi quo sed suscipit voluptates! Beatae, cupiditate deserunt ducimus incidunt ipsam iusto magni maxime possimus quam totam. Adipisci blanditiis consequuntur esse expedita fugit harum laboriosam magni maiores necessitatibus nihil quisquam sint sit, vel vero voluptates? Ab autem consequuntur cumque, dolor doloremque eligendi est fuga harum, impedit ipsum laboriosam necessitatibus perferendis qui repellat sunt suscipit voluptatibus voluptatum. Amet aspernatur at aut consectetur consequatur cupiditate dicta dolores ducimus eos error eum facere fuga fugiat impedit labore laudantium libero magni maxime modi nam natus nemo nihil nisi obcaecati odit officia quaerat quidem repellat repellendus repudiandae rerum saepe, sed sint vero voluptate voluptatibus voluptatum! Cum eius iure quos, reprehenderit suscipit velit! Assumenda aut ducimus fugiat quibusdam tempore. Autem dolores dolorum explicabo, labore, minus molestias odio possimus quaerat sint sit, ut veniam? Accusantium at dolorum enim illo incidunt, iusto libero minima molestiae quasi recusandae. Asperiores autem, cupiditate dolorem doloribus in molestias sapiente voluptatum! Aliquid animi impedit incidunt laborum libero nulla quos! Animi, assumenda debitis, dolore dolorem eaque earum in iure laboriosam minus odio porro quidem, voluptates! Alias atque aut beatae commodi ducimus eos et in minima necessitatibus nesciunt nulla, quia reprehenderit tempora temporibus vitae voluptas, voluptate? Eius eligendi fuga illo nesciunt nobis perferendis quos, sed. Accusantium aperiam dolor labore quis velit. Architecto assumenda aut commodi consequuntur, cumque laboriosam necessitatibus perferendis perspiciatis porro provident qui quis quos sequi similique sit tempora temporibus. Amet dicta dolor doloremque eum eveniet facere fugit id, iure, laudantium magni, molestias praesentium provident qui quibusdam recusandae reiciendis rerum sunt suscipit tempora vel. Alias animi, aperiam consequuntur culpa cum cumque dicta dolorum ea eligendi est, expedita fugiat itaque labore, libero modi molestiae nihil obcaecati omnis quas quasi quis quisquam quos suscipit tempora unde voluptas voluptatem! A ad amet aspernatur consequuntur deleniti dolor earum esse eum ex iste, laborum libero nesciunt quae quam recusandae suscipit veritatis! Ad eius praesentium quae unde voluptas. Adipisci cupiditate libero voluptatum.</slot>
</div>
</template>

<script>
export default {
  name: "ContentContainer",
  props: {
    border: {
      type: Boolean,
      default: false
    },
    semiTransparentBg: {
      type: Boolean,
      default: false
    },
    blackBg: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
#content-container {
  position: absolute;
  inset: calc(5vh - 2px) calc(5vh - 2px) calc(5vh - 2px) calc(10vh - 2px);
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
}
/* Hide scrollbar for Chrome, Safari and Opera */
#content-container::-webkit-scrollbar {
  display: none;
}
.container-border {
  border: solid 4px var(--main-color-lighten);
}
.semi-transparent-bg {
  background-color: rgba(0,0,0,0.6);
}
.black-bg {
  background-color: rgb(0,0,0);
}
</style>