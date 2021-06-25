<script>
export default {
  name:"FAQsHead",

  data() {
    return {
      selected: null
    }
  }
}
</script>

<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="pt-4">
            <h1 class="font-weight-bold">Order Information</h1>
            <h5 class="font-weight-normal">Please fill in this details to finalise your order.</h5>
          </div>
        </div>
      </div>
    </div>
    <hr/>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h5 class="font-weight-bold">General Information</h5>
        </div>
      </div>
      <b-form class="bx-custom-form">
          <div class="row mt-3 justify-content-start">
            <div class="col-12 col-md-6 col-lg-5 pb-2">
              <b-form-group label="How many Boxes do you need? *">
                <b-form-input placeholder="e.g. John" required></b-form-input>
              </b-form-group>
            </div>
            <div class="col-12 col-md-6 col-lg-5 pb-2">
              <b-form-group label="What’s your Budget per box/person? *">
                <b-input-group>
                  <template #prepend>
                    <b-form-select v-model="selected" class="text-primary pr-4">
                      <b-form-select-option :value="null">$USD</b-form-select-option>
                      <b-form-select-option value="a">$CAD</b-form-select-option>
                      <b-form-select-option value="b">INR</b-form-select-option>
                    </b-form-select>
                  </template>
                  <b-form-input placeholder="50" class="px-1"></b-form-input>
                </b-input-group>
              </b-form-group>
            </div>
            <div class="col-12 col-md-6 col-lg-5 pb-2">
              <b-form-group label="Do you need it on a specific day?">
                <b-form-input placeholder="10"></b-form-input>
              </b-form-group>
            </div>
            <div class="col-12 col-md-6 col-lg-5 pb-2">
              <b-form-group label="Are there any comments you would like to add?*">
                <b-form-input placeholder="Write comments here.."></b-form-input>
              </b-form-group>
            </div>
          </div>
      </b-form>
    </div>
    <hr/>
    <div class="container pt-2">
      <div class="row">
        <div class="col-md-12">
          <h5 class="font-weight-bold">Contact Details</h5>
        </div>
      </div>
      <b-form class="bx-custom-form">
        <div class="row mt-3 justify-content-start">
          <div class="col-12 col-md-6 col-lg-5 pb-2">
            <b-form-group label="Your First Name? *">
              <b-form-input placeholder="e.g. John" required></b-form-input>
            </b-form-group>
          </div>
          <div class="col-12 col-md-6 col-lg-5 pb-2">
            <b-form-group label="Your Last Name? *">
              <b-form-input placeholder="e.g. Doe"></b-form-input>
            </b-form-group>
          </div>
          <div class="col-12 col-md-6 col-lg-5 pb-2">
            <b-form-group label="Email address *">
              <b-form-input placeholder="10"></b-form-input>
            </b-form-group>
          </div>
          <div class="col-12 col-md-6 col-lg-5 pb-2">
            <b-form-group label="What’s your Budget per box/person? *">
                <b-input-group>
                  <template #prepend>
                    <b-form-select v-model="selected" class="text-primary pr-4">
                      <b-form-select-option :value="null">USA</b-form-select-option>
                      <b-form-select-option value="a">India</b-form-select-option>
                      <b-form-select-option value="b">Canada</b-form-select-option>
                    </b-form-select>
                  </template>
                  <b-form-input placeholder="+1" class="px-1"></b-form-input>
                </b-input-group>
              </b-form-group>
          </div>
          <div class="col-12 col-md-6 col-lg-5 pb-2">
            <b-form-group label="Company Name *">
              <b-form-input placeholder="e.g. Jane Doe"></b-form-input>
            </b-form-group>
          </div>
        </div>
      </b-form>
    </div>
    <hr/>
    <div class="container pt-2">
      <div class="row">
        <div class="col-md-12">
          <h5 class="font-weight-bold">Upload Assets (Optional)</h5>
        </div>
      </div>
      <b-form class="bx-custom-form">
        <div class="row mt-3 justify-content-start">
          <div class="col-12 col-md-5 col-lg-4 pb-2">
            <center label="Your First Name? *">
              <div class="my-2 bx-upload">
                <b-form-file
                  accept="image/*"
                  placeholder="Drag or Click here to upload a file"
                  drop-placeholder="Drop file here..."
                />
              </div>
            </center>
          </div>
        </div>
        <div class="row text-center">
        <div class="col-md-12">
          <b-button variant="primary">Submit</b-button>
        </div>
      </div>
      </b-form>
    </div>
    <b-button variant="primary" class="position-fixed rounded-circle cart-btn"><i class="lnir lnir-cart-alt"></i></b-button>
  </div>
</template>