<script>
export default {
  name:"BonusItems",
}
</script>

<template>
  <div>
    <b-sidebar ref="mymodal" id="bonus-items" sidebar-class="bx-pro-sidebar" title="Bonus Items" class="light" bg-variant="white" header-class="bx-sidebar-head" backdrop shadow right visible>
      <template #footer="{ hide }">
       <div class="d-flex bg-light shadow-lg justify-content-center justify-content-sm-end align-items-center px-3 py-2">
        <b-button variant="light" class="mx-1" size="sm" @click="hide">Skip This</b-button>
        <b-button variant="primary" class="mx-1" size="sm" >Save Changes</b-button>
       </div>
      </template>
      <div class="p-3">
        <p class="m-0">Would you like to add these bonus items to your order?</p>

        <div class="row">
          <div class="col-6 mt-3 px-2">
            <div class="bx-cat-pro">
              <div class="card mb-2">
                <div class="bx-previe-img d-flex align-items-center justify-content-center p-2"></div>
                <img class="card-img-top img-fluid" src="@/assets/img/pack-1.png" alt="Card image cap">
                <!-- <div class="bx-cat-btns d-flex flex-column justify-content-center align-items-center w-100">
                  <b-button v-b-toggle.Packaging-Detail variant="light" class="my-1">View Details</b-button>
                </div> -->
              </div>
              <h6 class="mb-1">Custom Lanyard</h6>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-column">
                  <small>Starts from <strong>$5.25</strong></small>
                  <small>One Size</small>
                </div>
                <div class="bx-custom-checkbox">
                  <input type="checkbox" id="bonus1" class="d-none" />
                  <label for="bonus1" class="position-relative" title="Add to list"></label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6 mt-3 px-2">
            <div class="bx-cat-pro">
              <div class="card mb-2">
                <div class="bx-previe-img d-flex align-items-center justify-content-center p-2"></div>
                <img class="card-img-top img-fluid" src="@/assets/img/pack-2.png" alt="Card image cap">
                <!-- <div class="bx-cat-btns d-flex flex-column justify-content-center align-items-center w-100">
                  <b-button v-b-toggle.Packaging-Detail variant="light" class="my-1">View Details</b-button>
                </div> -->
              </div>
              <h6 class="mb-1">Crinkle Cut Fill</h6>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-column">
                  <small>Starts from <strong>$2.25</strong></small>
                  <small>One Size</small>
                </div>
                <div class="bx-custom-checkbox">
                  <input type="checkbox" id="bonus2" class="d-none" />
                  <label for="bonus2" class="position-relative" title="Add to list"></label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6 mt-3 px-2">
            <div class="bx-cat-pro">
              <div class="card mb-2">
                <div class="bx-previe-img d-flex align-items-center justify-content-center p-2"></div>
                <img class="card-img-top img-fluid" src="@/assets/img/pack-3.png" alt="Card image cap">
                <!-- <div class="bx-cat-btns d-flex flex-column justify-content-center align-items-center w-100">
                  <b-button v-b-toggle.Packaging-Detail variant="light" class="my-1">View Details</b-button>
                </div> -->
              </div>
              <h6 class="mb-1">Custom Snapback</h6>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-column">
                  <small>Starts from <strong>$5.25</strong></small>
                  <small>100 packs</small>
                </div>
                <div class="bx-custom-checkbox">
                  <input type="checkbox" id="bonus3" class="d-none" />
                  <label for="bonus3" class="position-relative" title="Add to list"></label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6 mt-3 px-2">
            <div class="bx-cat-pro">
              <div class="card mb-2">
                <div class="bx-previe-img d-flex align-items-center justify-content-center p-2"></div>
                <img class="card-img-top img-fluid" src="@/assets/img/pack-7.png" alt="Card image cap">
                <!-- <div class="bx-cat-btns d-flex flex-column justify-content-center align-items-center w-100">
                  <b-button v-b-toggle.Packaging-Detail variant="light" class="my-1">View Details</b-button>
                </div> -->
              </div>
              <h6 class="mb-1">Plain Mailer Bags</h6>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-column">
                  <small>Starts from <strong>$5.25</strong></small>
                  <small>100 packs</small>
                </div>
                <div class="bx-custom-checkbox">
                  <input type="checkbox" id="bonus4" class="d-none" />
                  <label for="bonus4" class="position-relative" title="Add to list"></label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6 mt-3 px-2">
            <div class="bx-cat-pro">
              <div class="card mb-2">
                <div class="bx-previe-img d-flex align-items-center justify-content-center p-2"></div>
                <img class="card-img-top img-fluid" src="@/assets/img/pack-5.png" alt="Card image cap">
                <!-- <div class="bx-cat-btns d-flex flex-column justify-content-center align-items-center w-100">
                  <b-button v-b-toggle.Packaging-Detail variant="light" class="my-1">View Details</b-button>
                </div> -->
              </div>
              <h6 class="mb-1">Mailer Box with Custom Tape</h6>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-column">
                  <small>Starts from <strong>$5.25</strong></small>
                  <small>100 packs</small>
                </div>
                <div class="bx-custom-checkbox">
                  <input type="checkbox" id="bonus5" class="d-none" />
                  <label for="bonus5" class="position-relative" title="Add to list"></label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6 mt-3 px-2">
            <div class="bx-cat-pro">
              <div class="card mb-2">
                <div class="bx-previe-img d-flex align-items-center justify-content-center p-2"></div>
                <img class="card-img-top img-fluid" src="@/assets/img/pack-6.png" alt="Card image cap">
                <!-- <div class="bx-cat-btns d-flex flex-column justify-content-center align-items-center w-100">
                  <b-button v-b-toggle.Packaging-Detail variant="light" class="my-1">View Details</b-button>
                </div> -->
              </div>
              <h6 class="mb-1">Digitally Printed Tissue Paper</h6>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-column">
                  <small>Starts from <strong>$5.25</strong></small>
                  <small>100 packs</small>
                </div>
                <div class="bx-custom-checkbox">
                  <input type="checkbox" id="bonus6" class="d-none" />
                  <label for="bonus6" class="position-relative" title="Add to list"></label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6 mt-3 px-2">
            <div class="bx-cat-pro">
              <div class="card mb-2">
                <div class="bx-previe-img d-flex align-items-center justify-content-center p-2"></div>
                <img class="card-img-top img-fluid" src="@/assets/img/pack-1.png" alt="Card image cap">
                <!-- <div class="bx-cat-btns d-flex flex-column justify-content-center align-items-center w-100">
                  <b-button v-b-toggle.Packaging-Detail variant="light" class="my-1">View Details</b-button>
                </div> -->
              </div>
              <h6 class="mb-1">Mailer Box with Custom Label</h6>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-column">
                  <small>Starts from <strong>$5.25</strong></small>
                  <small>100 packs</small>
                </div>
                <div class="bx-custom-checkbox">
                  <input type="checkbox" id="bonus7" class="d-none" />
                  <label for="bonus7" class="position-relative" title="Add to list"></label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6 mt-3 px-2">
            <div class="bx-cat-pro">
              <div class="card mb-2">
                <div class="bx-previe-img d-flex align-items-center justify-content-center p-2"></div>
                <img class="card-img-top img-fluid" src="@/assets/img/pack-2.png" alt="Card image cap">
                <!-- <div class="bx-cat-btns d-flex flex-column justify-content-center align-items-center w-100">
                  <b-button v-b-toggle.Packaging-Detail variant="light" class="my-1">View Details</b-button>
                </div> -->
              </div>
              <h6 class="mb-1">Vintage Wood Box</h6>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-column">
                  <small>Starts from <strong>$5.25</strong></small>
                  <small>100 packs</small>
                </div>
                <div class="bx-custom-checkbox">
                  <input type="checkbox" id="bonus8" class="d-none" />
                  <label for="bonus8" class="position-relative" title="Add to list"></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

