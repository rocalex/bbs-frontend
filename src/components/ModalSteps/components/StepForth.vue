<script>
import PackagingDetails  from "./PackagingDetails"
import BonusItems        from "./BonusItems"

export default {
  name:"StepForth",

  components:{
    PackagingDetails,
    BonusItems
  }
}
</script>

<template>
  <div>
    <section class="pt-4">
      <div class="text-center">
        <h1 class="font-48 font-weight-bold h1-xs">How do we pack it?</h1>
        <h6 class="font-18">Pick the type of packing you need for your box</h6>
      </div>
      <div class="container-fluid border-top mt-3 bx-modal-catalog">
        <div class="row">
          <div class="col-12 col-md-3 col-lg-2 col-xl-2 h-100 px-0 d-none d-md-block">
          <h6 class="p-3 m-0 font-18">Categories</h6>
          <ul class="nav flex-column nav-pills nav-fill bx-nav-tabs">
            <li class="nav-item">
              <router-link class="nav-link active" to="#">All Packages</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Budget Friendly</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Most Picked</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Most Durable</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Luxury and Novelty</router-link>
            </li>
          </ul>
          </div>
          <div class="col-12 col-md-9 col-lg-10 col-xl-10 border-left">
            <div class="row">
              <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3 mt-3 px-2 px-lg-3">
                <div class="bx-cat-pro">
                  <div class="card mb-2">
                    <div class="bx-previe-img d-flex align-items-center justify-content-center p-2"></div>
                    <img class="card-img-top img-fluid" src="@/assets/img/pack-1.png" alt="Card image cap">
                    <div class="bx-cat-btns d-flex flex-column justify-content-center align-items-center w-100">
                      <b-button v-b-toggle.Packaging-Detail variant="light" class="my-1">View Details</b-button>
                    </div>
                  </div>
                  <h6 class="mb-1">Custom Mailer Box - 11 x 9.25 x 4</h6>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-column">
                      <small>Starts from <strong>$11.91</strong></small>
                      <small>100 packs</small>
                    </div>
                    <div class="bx-custom-checkbox">
                      <input type="radio" id="pro1" class="d-none" name="packing"/>
                      <label for="pro1" class="position-relative" title="Add to list"></label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3 mt-3 px-2 px-lg-3">
                <div class="bx-cat-pro">
                  <div class="card mb-2">
                    <div class="bx-previe-img d-flex align-items-center justify-content-center p-2"></div>
                    <img class="card-img-top img-fluid" src="@/assets/img/pack-2.png" alt="Card image cap">
                    <div class="bx-cat-btns d-flex flex-column justify-content-center align-items-center w-100">
                      <b-button v-b-toggle.Packaging-Detail variant="light" class="my-1">View Details</b-button>
                    </div>
                  </div>
                  <h6 class="mb-1">Crinkle Cut Fill</h6>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-column">
                      <small>Starts from <strong>$5.25</strong></small>
                      <small>100 packs</small>
                    </div>
                    <div class="bx-custom-checkbox">
                      <input type="radio" id="pro2" class="d-none" name="packing"/>
                      <label for="pro2" class="position-relative" title="Add to list"></label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3 mt-3 px-2 px-lg-3">
                <div class="bx-cat-pro">
                  <div class="card mb-2">
                    <div class="bx-previe-img d-flex align-items-center justify-content-center p-2"></div>
                    <img class="card-img-top img-fluid" src="@/assets/img/pack-3.png" alt="Card image cap">
                    <div class="bx-cat-btns d-flex flex-column justify-content-center align-items-center w-100">
                      <b-button v-b-toggle.Packaging-Detail variant="light" class="my-1">View Details</b-button>
                    </div>
                  </div>
                  <h6 class="mb-1">Mailer Box with Custom Tape</h6>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-column">
                      <small>Starts from <strong>$5.25</strong></small>
                      <small>100 packs</small>
                    </div>
                    <div class="bx-custom-checkbox">
                      <input type="radio" id="pro3" class="d-none" name="packing"/>
                      <label for="pro3" class="position-relative" title="Add to list"></label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3 mt-3 px-2 px-lg-3">
                <div class="bx-cat-pro">
                  <div class="card mb-2">
                    <div class="bx-previe-img d-flex align-items-center justify-content-center p-2"></div>
                    <img class="card-img-top img-fluid" src="@/assets/img/pack-7.png" alt="Card image cap">
                    <div class="bx-cat-btns d-flex flex-column justify-content-center align-items-center w-100">
                      <b-button v-b-toggle.Packaging-Detail variant="light" class="my-1">View Details</b-button>
                    </div>
                  </div>
                  <h6 class="mb-1">Plain Mailer Bags</h6>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-column">
                      <small>Starts from <strong>$5.25</strong></small>
                      <small>100 packs</small>
                    </div>
                    <div class="bx-custom-checkbox">
                      <input type="radio" id="pro4" class="d-none" name="packing"/>
                      <label for="pro4" class="position-relative" title="Add to list"></label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3 mt-3 px-2 px-lg-3">
                <div class="bx-cat-pro">
                  <div class="card mb-2">
                    <div class="bx-previe-img d-flex align-items-center justify-content-center p-2"></div>
                    <img class="card-img-top img-fluid" src="@/assets/img/pack-5.png" alt="Card image cap">
                    <div class="bx-cat-btns d-flex flex-column justify-content-center align-items-center w-100">
                      <b-button v-b-toggle.Packaging-Detail variant="light" class="my-1">View Details</b-button>
                    </div>
                  </div>
                  <h6 class="mb-1">Mailer Box with Custom Tape</h6>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-column">
                      <small>Starts from <strong>$5.25</strong></small>
                      <small>100 packs</small>
                    </div>
                    <div class="bx-custom-checkbox">
                      <input type="radio" id="pro5" class="d-none" name="packing"/>
                      <label for="pro5" class="position-relative" title="Add to list"></label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3 mt-3 px-2 px-lg-3">
                <div class="bx-cat-pro">
                  <div class="card mb-2">
                    <div class="bx-previe-img d-flex align-items-center justify-content-center p-2"></div>
                    <img class="card-img-top img-fluid" src="@/assets/img/pack-6.png" alt="Card image cap">
                    <div class="bx-cat-btns d-flex flex-column justify-content-center align-items-center w-100">
                      <b-button v-b-toggle.Packaging-Detail variant="light" class="my-1">View Details</b-button>
                    </div>
                  </div>
                  <h6 class="mb-1">Digitally Printed Tissue Paper</h6>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-column">
                      <small>Starts from <strong>$5.25</strong></small>
                      <small>100 packs</small>
                    </div>
                    <div class="bx-custom-checkbox">
                      <input type="radio" id="pro6" class="d-none" name="packing"/>
                      <label for="pro6" class="position-relative" title="Add to list"></label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3 mt-3 px-2 px-lg-3">
                <div class="bx-cat-pro">
                  <div class="card mb-2">
                    <div class="bx-previe-img d-flex align-items-center justify-content-center p-2"></div>
                    <img class="card-img-top img-fluid" src="@/assets/img/pack-1.png" alt="Card image cap">
                    <div class="bx-cat-btns d-flex flex-column justify-content-center align-items-center w-100">
                      <b-button v-b-toggle.Packaging-Detail variant="light" class="my-1">View Details</b-button>
                    </div>
                  </div>
                  <h6 class="mb-1">Mailer Box with Custom Label</h6>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-column">
                      <small>Starts from <strong>$5.25</strong></small>
                      <small>100 packs</small>
                    </div>
                    <div class="bx-custom-checkbox">
                      <input type="radio" id="pro7" class="d-none" name="packing"/>
                      <label for="pro7" class="position-relative" title="Add to list"></label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3 mt-3 px-2 px-lg-3">
                <div class="bx-cat-pro">
                  <div class="card mb-2">
                    <div class="bx-previe-img d-flex align-items-center justify-content-center p-2"></div>
                    <img class="card-img-top img-fluid" src="@/assets/img/pack-2.png" alt="Card image cap">
                    <div class="bx-cat-btns d-flex flex-column justify-content-center align-items-center w-100">
                      <b-button v-b-toggle.Packaging-Detail variant="light" class="my-1">View Details</b-button>
                    </div>
                  </div>
                  <h6 class="mb-1">Vintage Wood Box</h6>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-column">
                      <small>Starts from <strong>$5.25</strong></small>
                      <small>100 packs</small>
                    </div>
                    <div class="bx-custom-checkbox">
                      <input type="radio" id="pro8" class="d-none" name="packing"/>
                      <label for="pro8" class="position-relative" title="Add to list"></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <PackagingDetails/>
    <BonusItems/>
  </div>
</template>