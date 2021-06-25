<script>
import ContactHead    from "./components/ContactHead"
import ContactForm    from "./components/ContactForm"

export default {
  name: "ContactUs",
  components:{
    ContactHead,
    ContactForm
  }
};
</script>

<template>
  <div class="mt-5 pt-4">
    <!-- Contact Header -->
    <ContactHead/>
    <!-- Contact Form -->
    <ContactForm/>
  </div>
</template>