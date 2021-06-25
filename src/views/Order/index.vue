<script>
import OrderInformationForm     from "./components/OrderInformationForm"
import FAQsBox                  from "@/components/FAQsBox"
import ContactTeam              from "@/components/ContactTeam"

export default {
  name: "Order",
  components:{
    OrderInformationForm,
    FAQsBox,
    ContactTeam
  }
};
</script>
<template>
  <div class="mt-5 pt-4">
    <!-- Faq Header -->
    <OrderInformationForm/>
    <!-- FAQs -->
    <!-- <FAQsBox/> -->
    <!-- Contact Team -->
    <!-- <ContactTeam/> -->
    <div class="py-4"></div>
  </div>
</template>