<script>
import CareerHead    from "./components/CareerHead"
import NotHiring     from "./components/NotHiring"

export default {
  name: "Careers",
  components:{
    CareerHead,
    NotHiring
  }
};
</script>

<template>
  <div class="pt-4 mt-5">
    <!-- Contact Header -->
    <CareerHead/>
    <!-- Contact Form -->
    <NotHiring/>
  </div>
</template>