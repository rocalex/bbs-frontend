<script>
export default {
  name:"ProductDetails"
}
</script>

<template>
  <div>
    <b-sidebar id="product-details" sidebar-class="bx-pro-sidebar" title="Product Details" class="light" bg-variant="white" header-class="bx-sidebar-head" backdrop shadow right>
      <div class="p-3">
        <div class="card mb-2">
          <img class="img-fluid" src="@/assets/img/product1.jpg" alt="product" style="max-height: 400px; object-fit: contain;">
        </div>
        <h6 class="font-weight-bold mb-3">Bella Canvas 3001 Unisex T-Shirt</h6>
        <div class="mb-3">
          <p class="font-weight-bold mb-1">Available Colors</p>
          <ul class="bx-color-palette nav justify-content-start flex-wrap">
            <li class="p-1"><div class="bx-pro-color" style="background:#1abc9c;"></div></li>
            <li class="p-1"><div class="bx-pro-color" style="background:#2ecc71;"></div></li>
            <li class="p-1"><div class="bx-pro-color" style="background:#3498db;"></div></li>
            <li class="p-1"><div class="bx-pro-color" style="background:#9b59b6;"></div></li>
            <li class="p-1"><div class="bx-pro-color" style="background:#e67e22;"></div></li>
            <li class="p-1"><div class="bx-pro-color" style="background:#34495e;"></div></li>
            <li class="p-1"><div class="bx-pro-color" style="background:#8e44ad;"></div></li>
            <li class="p-1"><div class="bx-pro-color" style="background:#2c3e50;"></div></li>
            <li class="p-1"><div class="bx-pro-color" style="background:#f1c40f;"></div></li>
            <li class="p-1"><div class="bx-pro-color" style="background:#7f8c8d;"></div></li>
            <li class="p-1"><div class="bx-pro-color" style="background:#690000;"></div></li>
            <li class="p-1"><div class="bx-pro-color" style="background:#fefefe;"></div></li>
            <li class="p-1"><div class="bx-pro-color" style="background:#dddddd;"></div></li>
          </ul>
        </div>
        <div class="mb-3">
          <p class="font-weight-bold mb-1">Available Sizes</p>
          <ul class="nav justify-content-start flex-wrap bx-pro-size">
            <li class="p-1"><div class="bg-info d-flex align-items-center justify-content-center">S</div></li>
            <li class="p-1"><div class="bg-info d-flex align-items-center justify-content-center">M</div></li>
            <li class="p-1"><div class="bg-info d-flex align-items-center justify-content-center">L</div></li>
            <li class="p-1"><div class="bg-info d-flex align-items-center justify-content-center">XL</div></li>
            <li class="p-1"><div class="bg-info d-flex align-items-center justify-content-center">2XL</div></li>
            <li class="p-1"><div class="bg-info d-flex align-items-center justify-content-center">3XL</div></li>
          </ul>
        </div>
        <div class="mb-3">
          <p class="font-weight-bold mb-1">About Product</p>
          <p>Comfortable, casual and loose fitting, our heavyweight dark color t-shirt will quickly become one of your favorites. Made from 100% cotton, it wears well on anyone. We’ve double-needle stitched the bottom and sleeve hems for extra durability. Select a design from our marketplace or customize it to make it uniquely yours!</p>
          <p class="mb-1">Size & Fit </p>
          <ul class="pl-3">
            <li>Standard fit</li>
            <li>Fits true to size</li>
          </ul>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

