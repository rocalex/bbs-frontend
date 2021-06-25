  
<script>
export default {
  name: "Navbar",
  data() {
    return {
      isSticky: false,
      stickyClass: "is_sticky",
      scrollPosition: 0,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function (event) {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition >= 50) {
        this.isSticky = true;
      } else {
          this.isSticky = false;
      }
    },
  },
};
</script>

<template>
  <div id="nav" class="py-0 custom-nav bg-white shadow-sm" v-bind:class="[isSticky ? stickyClass : '']">
    <div class="container ">
      <b-navbar toggleable="lg" type="light" variant="faded" class="px-0 py-0">
      <b-navbar-brand href="/"><img class="img-fluid" src="@/assets/img/bbs-logo-lg.png" alt="Boxes Logo" width="148"/></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" class="border-0" expanded>
        <template #default="{ expanded }">
          <span v-if="expanded" icon="chevron-bar-up"><i class="lnir lnir-close"></i></span>
          <span v-else icon="chevron-bar-down"><i class="lnir lnir-vertical-line"></i></span>
        </template>
      </b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <div class="align-items-center d-flex ml-auto navbar-nav text-center">
          <b-navbar-nav>
            <router-link class="nav-item nav-link" to="/">Home</router-link>
            <router-link class="nav-item nav-link" to="/catalog">Catalog</router-link>
            <router-link class="nav-item nav-link" to="/about-us">About us</router-link>
            <router-link class="nav-item nav-link" to="/contact-us">Contact</router-link>
            <router-link class="nav-item nav-link" to="/faqs">FAQs</router-link>
          </b-navbar-nav>
          <b-button variant="light" class="m-2 my-lg-0" @click="$router.push('login')">Login</b-button>
          <b-button variant="primary" class="m-2 my-lg-0" v-b-modal.modal-steps>Build a box</b-button>
        </div>
      </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>   

<style>
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
