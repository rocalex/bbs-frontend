<script>
import ModalSteps   from "@/components/ModalSteps"

export default {
  name:"BeforeStart",
  components:{
    ModalSteps
  }
}
</script>

<template>
  <div>
    <section class="bx-header">
      <div class="container">
      <div class="row">
        <div class="col-12 col-md-12 col-lg-7 col-xl-6">
          <h1 class="font-weight-bold my-3">Before we start <br/>building your <br/>box..</h1>
          <p style="font-size:18px;" class="m-0">Few things that might wanna know..</p>
          <div class="row">
            <div class="col-12 col-sm-6 col-md-6 col-lg-6 py-3">
              <div class="d-flex align-items-center">
                <img class="pr-3" src="@/assets/img/svg/box.svg" alt="Box icon">
                <p class="m-0">By submitting you are not commiting to an order.</p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-6 py-3">
              <div class="d-flex align-items-center">
                <img class="pr-3" src="@/assets/img/svg/money-bag.svg" alt="Money Bag">
                <p class="m-0">All pricing includes custom branding and any fees</p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-6 py-3">
              <div class="d-flex align-items-center">
                <img class="pr-3" src="@/assets/img/svg/sketch.svg" alt="Sketch Icon">
                <p class="m-0">Our design team will create mockups at no cost</p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-6 py-3">
              <div class="d-flex align-items-center">
                <img class="pr-3" src="@/assets/img/svg/gift.svg" alt="Gift icon">
                <p class="m-0">We offer 8-15 curated items per category</p>
              </div>
            </div>
          </div>
          <b-button v-b-modal.modal-steps variant="primary" class="my-3">Start Building Now</b-button>
        </div>
        <div class="col-12 col-md-12 col-lg-5 col-xl-6 px-0 px-xl-1 text-center">
          <img class="img-fluid my-3" src="@/assets/img/box.png" alt="Boxes">
        </div>
      </div>
      </div>
    </section>
    <ModalSteps/>
  </div>
</template>