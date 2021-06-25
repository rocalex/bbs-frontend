<script>
export default {
  name:"Footer",
};
</script>
<template>
  <div>
    <footer class="border-top">
      <div class="container py-3">
        <div class="row justify-content-lg-between">
          <div class="col-12 col-md-12 col-lg-3 pt-3 d-flex justify-content-center">
            <div class="text-center text-lg-left">
              <img class="img-fluid pb-1" src="@/assets/img/boxes-logo.png" alt="Boxes Logo"/><br/>
              <small class="d-block d-sm-inline-block">2021 Boxes by Swagify LLC</small><br/>
              <small><router-link to="#">support@boxesbyswagify.com</router-link></small>
              <h5 class="pt-3 mb-0">We’re Everywhere!</h5>
              <ul class="list-group list-group-horizontal list-inline py-3 d-flex justify-content-center">
                <li class="pr-3"><router-link to="/"><img class="img-fluid" src="@/assets/img/svg/facebook-oval.svg" alt="facebook"></router-link></li>
                <li class="px-3"><router-link to="/"><img class="img-fluid" src="@/assets/img/svg/instagram-filled.svg" alt="facebook"></router-link></li>
                <li class="px-3"><router-link to="/"><img class="img-fluid" src="@/assets/img/svg/linkedin-original.svg" alt="facebook"></router-link></li>
                <li class="pl-3"><router-link to="/"><img class="img-fluid" src="@/assets/img/svg/twitter-original.svg" alt="facebook"></router-link></li>
              </ul>
            </div>
          </div>
          <div class="col-6 col-md-3 col-lg-2 pt-3 text-center text-md-left">
            <h6>Quick Links</h6>
            <ul class="list-group bx-footer-list">
              <li><router-link to="#">Build a Box</router-link></li>
              <li><router-link to="#">Track your Order</router-link></li>
            </ul>
          </div>
          <div class="col-6 col-md-3 col-lg-2 pt-3 text-center text-md-left">
            <h6>Explore</h6>
            <ul class="list-group bx-footer-list">
              <li><router-link to="/services">Services</router-link></li>
              <li><router-link to="/faqs">FAQs</router-link></li>
              <li><router-link to="/about-us">About Company</router-link></li>
            </ul>
          </div>
          <div class="col-6 col-md-3 col-lg-2 pt-3 text-center text-md-left">
            <h6>Connect</h6>
            <ul class="list-group bx-footer-list">
              <li><router-link to="#">Contact us</router-link></li>
              <li><router-link to="/careers">Careers</router-link></li>
            </ul>
          </div>
          <div class="col-6 col-md-3 col-lg-2 pt-3 text-center text-md-left">
            <h6>Legal</h6>
            <ul class="list-group bx-footer-list">
              <li><router-link to="#">Privacy</router-link></li>
              <li><router-link to="#">Terms of use</router-link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="text-center py-3 bg-info">Start your own Print on Demand Business. <router-link class="text-blue d-block d-sm-inline-block" to="#">Explore Swagify <i class="fas fa-chevron-right"></i></router-link></div>
    </footer>
  </div>
</template>