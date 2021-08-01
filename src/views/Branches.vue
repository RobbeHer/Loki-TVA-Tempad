<template>
<ContentContainer :border="1" :semiTransparentBg="1">
  <p>hello</p>
</ContentContainer>
</template>

<script>
import ContentContainer from "@/components/ContentContainer";

export default {
  name: "Branches",
  components: {
    ContentContainer
  }
}
</script>