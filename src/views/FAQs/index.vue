<script>
import FAQsHead     from "@/views/FAQs/components/FAQsHead"
import FAQsBox      from "@/components/FAQsBox"
import ContactTeam  from "@/components/ContactTeam"

export default {
  name: "FAQs",
  components:{
    FAQsHead,
    FAQsBox,
    ContactTeam
  }
};
</script>
<template>
  <div class="mt-5 pt-4">
    <!-- Faq Header -->
    <FAQsHead/>
    <!-- FAQs -->
    <FAQsBox/>
    <!-- Contact Team -->
    <ContactTeam/>
    <div class="py-4"></div>
  </div>
</template>