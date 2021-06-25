<script>
export default {
  name:"ContactForm",
  data() {
      return {
        selected: null,
        contactUsOptions: [
          { value: null, text: 'Select the reason' },
          { value: 'First', text: 'This is First option' },
          { value: 'Second', text: 'Selected Option' },
          { value: { Third: '3PO' }, text: 'This is an option with object value' },
          { value: 'Fourth', text: 'This one is disabled', disabled: true }
        ]
      }
    }
}
</script>

<template>
  <div>
    <b-form class="bx-custom-form">
      <div class="container mb-5">
        <div class="row mt-3 justify-content-between">
          <div class="col-12 col-md-6 col-lg-5 pb-2">
            <b-form-group label="First Name?*">
              <b-form-input placeholder="e.g. John" required></b-form-input>
            </b-form-group>
          </div>
          <div class="col-12 col-md-6 col-lg-5 pb-2">
            <b-form-group label="Last Name*">
              <b-form-input placeholder="e.g. Doe"></b-form-input>
            </b-form-group>
          </div>
          <div class="col-12 col-md-6 col-lg-5 pb-2">
            <b-form-group label="Company Name">
              <b-form-input placeholder="e.g. John’s Company"></b-form-input>
            </b-form-group>
          </div>
          <div class="col-12 col-md-6 col-lg-5 pb-2">
            <b-form-group label="Email address*">
              <b-form-input placeholder="example@example.com"></b-form-input>
            </b-form-group>
          </div>
          <div class="col-12 col-md-6 col-lg-5 pb-2">
            <b-form-group label="Contact Number*">
              <b-input-group>
                <b-form-input placeholder="+1-700-525-6233"></b-form-input>
              </b-input-group>
            </b-form-group>
          </div>
          <div class="col-12 col-md-6 col-lg-5 pb-2">
            <b-form-group label="Why are you messaging us?">
              <b-input-group>
                <b-form-select v-model="selected" :options="contactUsOptions"></b-form-select>
              </b-input-group>
            </b-form-group>
          </div>
          <div class="col-12 col-md-6 col-lg-5">
            <b-form-group label="Drop Your Message">
              <b-form-input placeholder="Write comments here.."></b-form-input>
            </b-form-group>
          </div>
        </div>
        <b-button variant="primary" class="my-3">Submit Message</b-button>
      </div>
    </b-form>
  </div>
</template>