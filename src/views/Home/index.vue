<script>
import FAQsBox      from "@/components/FAQsBox"
import Alert        from "./components/Alert"
import BeforeStart  from "./components/BeforeStart"
import HowWork      from "./components/HowWork"
import WhyBoxes     from "./components/WhyBoxes"
import ContactTeam  from "@/components/ContactTeam"
import CatchUp      from "@/components/CatchUp"
import BuildBox     from "./components/BuildBox"

export default {
  name: "Home",
  components:{
    FAQsBox,
    Alert,
    BeforeStart,
    HowWork,
    WhyBoxes,
    ContactTeam,
    CatchUp,
    BuildBox
  }
};
</script>

<template>
  <div class="home mt-5 pt-4">
    <!-- Alert -->
    <Alert/>

    <!-- Header -->
    <BeforeStart/>

    <!-- How does it work?-->
    <HowWork/>

    <!-- Why Boxes by Swagify? -->
    <WhyBoxes/>

    <!-- FAQs -->
    <FAQsBox/>

    <!-- Team -->
    <ContactTeam/>

    <!-- Catch up! -->
    <CatchUp/>

    <!-- Build Box -->
    <BuildBox/>

  </div>
</template>