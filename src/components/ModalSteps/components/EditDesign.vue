<script>
export default {
  name:"EditDesign",

  data() {
      return {
        rotationValue: '180',
        scaleValue: '0'
      }
    }
}
</script>

<template>
  <div>
    <b-sidebar id="edit-design" sidebar-class="bx-pro-sidebar" title="Edit Design" class="light" bg-variant="white" header-class="bx-sidebar-head" backdrop shadow right>
      <template #footer="{ hide }">
       <div class="d-flex bg-white px-3 py-2 border-top">
         <div class="ml-auto">
            <b-button class="mx-1" variant="light" @click="hide">Cancel</b-button>
            <b-button class="mx-1" variant="primary" @click="hide">Save</b-button>
          </div>
       </div>
      </template>
      <div class="px-3 pt-3">
        <div class="card mb-2">
          <div class="bx-editable-area d-flex align-items-center justify-content-center p-2"><img class="img-fluid" src="@/assets/img/svg/drag-drop.svg"></div>
          <img class="img-fluid" src="@/assets/img/product1.jpg" alt="product" style="max-height: 400px; object-fit: contain;">
        </div>
        <div class="bx-usericons d-flex justify-content-between mt-3">
          <div class="bg-info d-flex justify-content-center align-items-center"><i class="lnir lnir-switch"></i></div>
          <div class="d-flex">
            <div class="mr-1 bg-info d-flex justify-content-center align-items-center"><i class="lnir lnir-reply"></i></div>
            <div class="ml-1 bg-info d-flex justify-content-center align-items-center"><i class="lnir lnir-reply fa-flip-horizontal"></i></div>
          </div>
        </div>
      </div>
      <hr/>
      <div class="px-3">
        <div class="row">
        <div class="col-12 col-md-6">
          <p class="font-weight-bold mb-1">Rotation</p>
          <div class="bx-range d-flex justify-content-between align-items-center">
            <b-form-input id="range-1" v-model="rotationValue" type="range" min="0" max="360" step="1"></b-form-input>
            <div class="bg-info d-flex justify-content-center align-items-center ml-1">{{ rotationValue }}&#186;</div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <p class="font-weight-bold mb-1">Scale</p>
          <div class="bx-range d-flex justify-content-between align-items-center">
            <b-form-input id="range-2" v-model="scaleValue" type="range" min="0" max="100" step="1"></b-form-input>
            <div class="bg-info d-flex justify-content-center align-items-center ml-1">{{ scaleValue }}%</div>
          </div>
        </div>
      </div>
      </div>
    </b-sidebar>
  </div>
</template>

