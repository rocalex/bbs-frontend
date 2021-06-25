<script>
import { mapState } from 'vuex'
import PresetPacksDetail  from "./PresetPacksDetail"
import {PRODUCTS} from "@/graphql";

export default {
  name:"StepThree",
  components:{
    PresetPacksDetail
  },
  data: () => {
    return {
      products: []
    }
  },
  computed: {
    ...mapState(['presetName']),
    preset: {
      get() {
        return this.presetName
      }
    }
  },
  apollo: {
    products: PRODUCTS
  }
}
</script>

<template>
  <div>
    <section class="pt-4">
      <div class="text-center">
        <h1 class="font-48 font-weight-bold h1-xs">{{ preset }}</h1>
        <h6 class="font-18">We’ve done all the heavy lifting for you, So you don’t have to! </h6>
      </div>
      <div class="container-fluid border-top mt-3 bx-modal-catalog">
        <div class="row">
          <div class="col-12 col-md-3 col-lg-2 col-xl-2 h-100 px-0 d-none d-md-block">
          <h6 class="p-3 m-0 font-18">Categories</h6>
          <ul class="nav flex-column nav-pills nav-fill bx-nav-tabs">
            <li class="nav-item">
              <router-link class="nav-link active" to="#tshirt">All Presets</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#poloshirts">Most Purchased</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#sweatshirts">Recommended</router-link>
            </li>
          </ul>
          </div>
          <div class="col-12 col-md-9 col-lg-10 col-xl-10 border-left">
            <div class="row">
              <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3 mt-3 px-2 px-lg-3" v-for="product in products.nodes">
                <div class="bx-cat-pro">
                  <div class="card mb-2">
                    <img class="card-img-top img-fluid" src="@/assets/img/pack-container.png" alt="Card image cap">
                    <div class="bx-cat-btns d-flex flex-column justify-content-center align-items-center w-100">
                      <b-button v-b-toggle.PresetPacks-Detail variant="light" class="my-1">View Details</b-button>
                    </div>
                  </div>
                  <h6 class="mb-1">{{product.name}}</h6>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-column">
                      <small>Starts from <strong>{{ product.masterVariant.defaultPrice.displayAmount}}</strong></small>
                      <small>No Minimums</small>
                    </div>
                    <div class="bx-custom-checkbox">
                      <input type="radio" id="pro1" class="d-none" name="presetpack"/>
                      <label for="pro1" class="position-relative" title="Add to list"></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <PresetPacksDetail/>
  </div>
</template>
