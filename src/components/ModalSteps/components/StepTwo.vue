<script>
export default {
  name:"StepTwo"
}
</script>

<template>
  <div>
    <section class="py-4 bx-modal-bg">
      <div class="text-center">
        <h1 class="font-48 font-weight-bold">Upload your assets</h1>
        <h6 class="font-18">Add your branding to the box</h6>
      </div>
      <div class="container">
        <div class="py-5 text-center row justify-content-center">
          <div class="col-12 col-sm-10 col-md-8 col-lg-4 col-xl-4">
            <center>
              <div class="my-2 bx-upload">
                <b-form-file
                  accept="image/*"
                  placeholder="Drag or Click here to upload a file"
                  drop-placeholder="Drop file here..."
                />
              </div>
            </center>
          </div>
          <div class="col-12 col-md-10 col-lg-12 col-xl-12">
              <p><small>
              PNG, JPG and SVG formats supported. For optimum printing quality, we recommend using vector graphics or
              images with a minimum resolution of 2400px(w) x 3300px(h) at 300dpi.
              Maximum upload file size is 50MB.
            </small></p>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>