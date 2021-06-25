<script>
import AboutHead    from "./components/AboutHead"
import OurGoal      from "./components/OurGoal"
import CoreValues   from "./components/CoreValues"
import OurStory     from "./components/OurStory"
import OurCrew      from "./components/OurCrew"
import CatchUp      from "@/components/CatchUp"
import JoinTheCrew  from "./components/JoinTheCrew"

export default {
  name: "AboutUs",
  components:{
    AboutHead,
    OurGoal,
    CoreValues,
    OurStory,
    OurCrew,
    CatchUp,
    JoinTheCrew
  }
};
</script>

<template>
  <div class="mt-5 pt-4">
    <!-- About Header -->
    <AboutHead/>
    <!-- Our Goal -->
    <OurGoal/>
    <!-- Core Values -->
    <CoreValues/>
    <!-- Our Story -->
    <OurStory/>
    <!-- Our Crew -->
    <OurCrew/>
    <!-- Contact Team -->
    <CatchUp/>
    <!-- Join The Crew -->
    <JoinTheCrew/>
  </div>
</template>