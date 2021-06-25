<script>
import ProductDetails  from "./ProductDetails"
import EditDesign      from "./EditDesign"

export default {
  name:"StepThree",

  components:{
    ProductDetails,
    EditDesign
  }
}
</script>

<template>
  <div>
    <section class="pt-4">
      <div class="text-center">
        <h1 class="font-48 font-weight-bold h1-xs">Pick your products</h1>
        <h6 class="font-18">Pick the products you like and we’ll add it to your box</h6>
      </div>
      <div class="container-fluid border-top mt-3 bx-modal-catalog">
        <div class="row">
          <div class="col-12 col-md-3 col-lg-2 col-xl-2 h-100 px-0 d-none d-md-block">
          <h6 class="p-3 m-0 font-18">Categories</h6>
          <ul class="nav flex-column nav-pills nav-fill bx-nav-tabs">
            <li class="nav-item">
              <router-link class="nav-link active" to="#tshirt">T-Shirts</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#poloshirts">Polo Shirts</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#sweatshirts">Sweatshirts</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Water Bottles</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Coffee Mugs</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Bagpacks</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Notebooks</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Shopping Bags</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Masks</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Tech items</router-link>
            </li>
          </ul>
          </div>
          <div class="col-12 col-md-9 col-lg-10 col-xl-10 border-left">
            <div class="row">
              <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3 mt-3 px-2 px-lg-3">
                <div class="bx-cat-pro">
                  <div class="card mb-2">
                    <div class="bx-previe-img d-flex align-items-center justify-content-center p-2"><img class="img-fluid" src="@/assets/img/svg/drag-drop.svg"></div>
                    <img class="card-img-top img-fluid" src="@/assets/img/product1.jpg" alt="Card image cap">
                    <div class="bx-cat-btns d-flex flex-column justify-content-center align-items-center w-100">
                      <b-button v-b-toggle.edit-design variant="primary" class="my-1">Edit Design</b-button>
                      <b-button v-b-toggle.product-details variant="light" class="my-1">View Details</b-button>
                    </div>
                  </div>
                  <h6 class="mb-1">Bella Canvas 3001 Unisex T-Shirt</h6>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-column">
                      <small>Starts from <strong>$5.25</strong></small>
                      <small>S-3XL</small>
                    </div>
                    <div class="bx-custom-checkbox">
                      <input type="checkbox" id="pro1" class="d-none" />
                      <label for="pro1" class="position-relative" title="Add to list"></label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3 mt-3 px-2 px-lg-3">
                <div class="bx-cat-pro">
                  <div class="card mb-2">
                    <div class="bx-previe-img d-flex align-items-center justify-content-center p-2"><img class="img-fluid" src="@/assets/img/svg/drag-drop.svg"></div>
                    <img class="card-img-top img-fluid" src="@/assets/img/product2.jpg" alt="Card image cap">
                    <div class="bx-cat-btns d-flex flex-column justify-content-center align-items-center w-100">
                      <b-button v-b-toggle.edit-design variant="primary" class="my-1">Edit Design</b-button>
                      <b-button v-b-toggle.product-details variant="light" class="my-1">View Details</b-button>
                    </div>
                  </div>
                  <h6 class="mb-1">The Triblend Unisex Dri-FIT T-Shirt</h6>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-column">
                      <small>Starts from <strong>$5.25</strong></small>
                      <small>S-3XL</small>
                    </div>
                    <div class="bx-custom-checkbox">
                      <input type="checkbox" id="pro2" class="d-none" />
                      <label for="pro2" class="position-relative" title="Add to list"></label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3 mt-3 px-2 px-lg-3">
                <div class="bx-cat-pro">
                  <div class="card mb-2">
                    <div class="bx-previe-img d-flex align-items-center justify-content-center p-2"><img class="img-fluid" src="@/assets/img/svg/drag-drop.svg"></div>
                    <img class="card-img-top img-fluid" src="@/assets/img/product3.jpg" alt="Card image cap">
                    <div class="bx-cat-btns d-flex flex-column justify-content-center align-items-center w-100">
                      <b-button v-b-toggle.edit-design variant="primary" class="my-1">Edit Design</b-button>
                      <b-button v-b-toggle.product-details variant="light" class="my-1">View Details</b-button>
                    </div>
                  </div>
                  <h6 class="mb-1">Nike Team Legend Dri-FIT Crewneck</h6>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-column">
                      <small>Starts from <strong>$5.25</strong></small>
                      <small>S-3XL</small>
                    </div>
                    <div class="bx-custom-checkbox">
                      <input type="checkbox" id="pro3" class="d-none" />
                      <label for="pro3" class="position-relative" title="Add to list"></label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3 mt-3 px-2 px-lg-3">
                <div class="bx-cat-pro">
                  <div class="card mb-2">
                    <div class="bx-previe-img d-flex align-items-center justify-content-center p-2"><img class="img-fluid" src="@/assets/img/svg/drag-drop.svg"></div>
                    <img class="card-img-top img-fluid" src="@/assets/img/product1.jpg" alt="Card image cap">
                    <div class="bx-cat-btns d-flex flex-column justify-content-center align-items-center w-100">
                      <b-button v-b-toggle.edit-design variant="primary" class="my-1">Edit Design</b-button>
                      <b-button v-b-toggle.product-details variant="light" class="my-1">View Details</b-button>
                    </div>
                  </div>
                  <h6 class="mb-1">Bella Canvas 3001 Unisex T-Shirt</h6>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-column">
                      <small>Starts from <strong>$5.25</strong></small>
                      <small>S-3XL</small>
                    </div>
                    <div class="bx-custom-checkbox">
                      <input type="checkbox" id="pro4" class="d-none" />
                      <label for="pro4" class="position-relative" title="Add to list"></label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3 mt-3 px-2 px-lg-3">
                <div class="bx-cat-pro">
                  <div class="card mb-2">
                    <div class="bx-previe-img d-flex align-items-center justify-content-center p-2"><img class="img-fluid" src="@/assets/img/svg/drag-drop.svg"></div>
                    <img class="card-img-top img-fluid" src="@/assets/img/product1.jpg" alt="Card image cap">
                    <div class="bx-cat-btns d-flex flex-column justify-content-center align-items-center w-100">
                      <b-button v-b-toggle.edit-design variant="primary" class="my-1">Edit Design</b-button>
                      <b-button v-b-toggle.product-details variant="light" class="my-1">View Details</b-button>
                    </div>
                  </div>
                  <h6 class="mb-1">Bella Canvas 3001 Unisex T-Shirt</h6>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-column">
                      <small>Starts from <strong>$5.25</strong></small>
                      <small>S-3XL</small>
                    </div>
                    <div class="bx-custom-checkbox">
                      <input type="checkbox" id="pro5" class="d-none" />
                      <label for="pro5" class="position-relative" title="Add to list"></label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3 mt-3 px-2 px-lg-3">
                <div class="bx-cat-pro">
                  <div class="card mb-2">
                    <div class="bx-previe-img d-flex align-items-center justify-content-center p-2"><img class="img-fluid" src="@/assets/img/svg/drag-drop.svg"></div>
                    <img class="card-img-top img-fluid" src="@/assets/img/product2.jpg" alt="Card image cap">
                    <div class="bx-cat-btns d-flex flex-column justify-content-center align-items-center w-100">
                      <b-button v-b-toggle.edit-design variant="primary" class="my-1">Edit Design</b-button>
                      <b-button v-b-toggle.product-details variant="light" class="my-1">View Details</b-button>
                    </div>
                  </div>
                  <h6 class="mb-1">The Triblend Unisex Dri-FIT T-Shirt</h6>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-column">
                      <small>Starts from <strong>$5.25</strong></small>
                      <small>S-3XL</small>
                    </div>
                    <div class="bx-custom-checkbox">
                      <input type="checkbox" id="pro6" class="d-none" />
                      <label for="pro6" class="position-relative" title="Add to list"></label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3 mt-3 px-2 px-lg-3">
                <div class="bx-cat-pro">
                  <div class="card mb-2">
                    <div class="bx-previe-img d-flex align-items-center justify-content-center p-2"><img class="img-fluid" src="@/assets/img/svg/drag-drop.svg"></div>
                    <img class="card-img-top img-fluid" src="@/assets/img/product3.jpg" alt="Card image cap">
                    <div class="bx-cat-btns d-flex flex-column justify-content-center align-items-center w-100">
                      <b-button v-b-toggle.edit-design variant="primary" class="my-1">Edit Design</b-button>
                      <b-button v-b-toggle.product-details variant="light" class="my-1">View Details</b-button>
                    </div>
                  </div>
                  <h6 class="mb-1">Nike Team Legend Dri-FIT Crewneck</h6>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-column">
                      <small>Starts from <strong>$5.25</strong></small>
                      <small>S-3XL</small>
                    </div>
                    <div class="bx-custom-checkbox">
                      <input type="checkbox" id="pro7" class="d-none" />
                      <label for="pro7" class="position-relative" title="Add to list"></label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3 mt-3 px-2 px-lg-3">
                <div class="bx-cat-pro">
                  <div class="card mb-2">
                    <div class="bx-previe-img d-flex align-items-center justify-content-center p-2"><img class="img-fluid" src="@/assets/img/svg/drag-drop.svg"></div>
                    <img class="card-img-top img-fluid" src="@/assets/img/product1.jpg" alt="Card image cap">
                    <div class="bx-cat-btns d-flex flex-column justify-content-center align-items-center w-100">
                      <b-button v-b-toggle.edit-design variant="primary" class="my-1">Edit Design</b-button>
                      <b-button v-b-toggle.product-details variant="light" class="my-1">View Details</b-button>
                    </div>
                  </div>
                  <h6 class="mb-1">Bella Canvas 3001 Unisex T-Shirt</h6>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-column">
                      <small>Starts from <strong>$5.25</strong></small>
                      <small>S-3XL</small>
                    </div>
                    <div class="bx-custom-checkbox">
                      <input type="checkbox" id="pro8" class="d-none" />
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
    <EditDesign/>
    <ProductDetails/>
  </div>
</template>