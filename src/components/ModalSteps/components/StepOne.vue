<script>
import { mapState } from 'vuex'
export default {
  name:"StepOne",
  computed: {
    ...mapState(['presetName']),
    preset: {
      get() {
        return this.presetName
      },
      set(name) {
        this.$store.commit('setPresetName', name)
      }
    }
  },
}
</script>

<template>
  <div>
    <section class="py-4 bx-modal-stepone bx-modal-bg">
      <div class="text-center">
        <h1 class="font-48 font-weight-bold h1-xs">Let’s Get Started!</h1>
        <h6 class="font-18">Select your preset</h6>
      </div>
      <div class="container px-lg-5">
        <div class="row">
          <div class="pt-2 text-center col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-md-left px-1 px-lg-3">
            <input type="radio" name="preset" id="presetpacks" class="d-none" value="Preset packs" v-model="preset" />
            <label for="presetpacks" class="text-center position-relative"> <img class="img-fluid" src="@/assets/img/preset-packs.png" alt="Preset packs" /></label>
            <div class="my-2">
              <h5 class="mb-1 font-weight-bold">Preset packs</h5>
              <p>Go with one of our pre-selected packs or use it as a starting point to build your own.</p>
            </div>
          </div>
          <div class="pt-2 text-center col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-md-left px-1 px-lg-3">
            <input type="radio" name="preset" id="ownbox" class="d-none" value="DIY your own Box" v-model="preset"/>
            <label for="ownbox" class="position-relative"><img class="img-fluid" src="@/assets/img/diy-your-own-box.png" alt="DIY your own Box" /></label>
            <div class="my-2">
              <h5 class="mb-1 font-weight-bold">DIY your own Box</h5>
              <p>Start from scratch to get complete control over the items in your pack.</p>
            </div>
          </div>
          <div class="pt-2 text-center col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-md-left px-1 px-lg-3">
            <input type="radio" name="preset" id="singleitem" class="d-none" value="Single items for any use" v-model="preset" />
            <label for="singleitem" class="position-relative"><img class="img-fluid" src="@/assets/img/single-items-for-any-use.png" alt="Single items for any use" /></label>
            <div class="my-2">
              <h5 class="mb-1 font-weight-bold">Single items for any use</h5>
              <p>For when packs aren't needed. Grab individual items in bulk or less.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
