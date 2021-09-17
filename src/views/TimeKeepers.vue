<template>
  <ContentContainer :black-bg="true" :thin-border="true"> <video width="100%" height="100%" controls>
    <source src="../assets/tva.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </ContentContainer>
</template>

<script>
import ContentContainer from "@/components/ContentContainer";

export default {
  name: "TimeKeepers",
  components: {
    ContentContainer
  }
}
</script>