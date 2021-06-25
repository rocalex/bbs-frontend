<script>
import ServiceHead    from "./components/ServiceHead"
import ComingSoon     from "./components/ComingSoon"

export default {
  name: "Services",
  components:{
    ServiceHead,
    ComingSoon
  }
};
</script>

<template>
  <div class="home">
    <!-- Contact Header -->
    <ServiceHead/>
    <!-- Contact Form -->
    <ComingSoon/>
  </div>
</template>