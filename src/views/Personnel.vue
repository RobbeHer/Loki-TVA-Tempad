<template>
  <ContentContainer :black-bg="true" :thin-border="true">
    <details open ref="renaissance-fair">
      <summary>Renaissance fair</summary>
      <div class="grid-container">
        <div v-for="(person, index) in personnel.renaissanceFair" v-bind:key="index" class="grid-item">
          <img :src="person.image" alt="'Image'">
          <p>{{ person.name }}</p>
          <p>{{ person.aka }}</p>
        </div>
      </div>
    </details>
    <!--<details ref="tva">
      <summary>TVA</summary>
      <div class="grid-container">
        <div v-for="(person, index) in personnel.tva" v-bind:key="index" class="grid-item">
          <img :src="person.image" alt="'Image'">
          <p>{{ person.name }}</p>
        </div>
      </div>
    </details>-->
  </ContentContainer>
</template>

<script>
import ContentContainer from "@/components/ContentContainer";

const robbe = require('../assets/img/personnel/robbe.jpg');
const seppe = require('../assets/img/personnel/seppe.jpeg');
const joost = require('../assets/img/personnel/joost.jpeg');
const jasper = require('../assets/img/personnel/jasper.jpg');
const jens = require('../assets/img/personnel/jens.jpg');

export default {
  name: "Personnel",
  components: {
    ContentContainer,
  },
  mounted() {
    // Fetch all the details element.
    const details = document.querySelectorAll("details");
    // Add the onclick listeners.
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        // Close all the details that are not targetDetail.
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });
  },
  data() {
    const personnel = {
      renaissanceFair: [
        {
          name: 'Rick',
          aka: 'Jasper R',
          image: jasper,
          info: 'info'
        },
        {
          name: 'Inosuke',
          aka: 'Joost H',
          image: joost,
          info: 'info'
        },
        {
          name: 'Sekiro',
          aka: 'Seppe VdH',
          image: seppe,
          info: 'info'
        },
        {
          name: 'Mobius',
          aka: 'Jens VH',
          image: jens,
          info: 'info'
        },
        {
          name: 'Loki',
          aka: 'Robbe H',
          image: robbe,
          info: 'info'
        },
      ],
      /*tva: [
        {
          name: 'Casey',
          image: robbe,
          info: 'info'
        }
      ]*/
    };

    return {
      personnel: personnel,
      selectedPerson: null,
    }
  },
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}
.grid-item {
  text-align: center;
  place-self: center center;
}
.grid-item img {
  width: auto;
  height: 30vh;
}
details {
  background-color: black;
  border-bottom: 4px solid black;
}
summary {
  background-color: var(--main-color);
  color: black;
  padding: 0 5px !important;
}
p:last-child {
  margin-bottom: 20px !important;
}
</style>