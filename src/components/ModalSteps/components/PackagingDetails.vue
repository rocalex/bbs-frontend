<script>
export default {
  name:"PackagingDetails"
}
</script>

<template>
  <div>
    <b-sidebar id="Packaging-Detail" sidebar-class="bx-pro-sidebar" title="Packaging Details" class="light" bg-variant="white" header-class="bx-sidebar-head" backdrop shadow right>
      <div class="p-3">
        <div class="card mb-2">
          <img class="img-fluid" src="@/assets/img/pack-1.png" alt="product" style="max-height: 350px; object-fit: contain;">
        </div>
        <h6 class="font-weight-bold mb-3 font-18">Custom Mailer Box - 11 x 9.25 x 4</h6>
        <div class="mb-3">
          <span class="font-weight-bold mb-2">$11.91/item</span>
          <p>Showcase your brand with this fully customizable mailer box! </p>
        </div>
        <div class="mb-3">
          <p class="font-weight-bold mb-1">Item Details:</p>
          <ul class="pl-3">
            <li>Includes outside print 11x9.25x4</li>
          </ul>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

