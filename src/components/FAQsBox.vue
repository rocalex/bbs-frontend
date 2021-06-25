<script>
export default {
  name:"FAQsBox"
}
</script>

<template>
  <div>
    <section class="my-5">
      <div class="container">
        <h2 class="text-center font-weight-bold">Frequently Asked <br/>Questions</h2>
         <div class="accordion mt-4 bx-accordion" role="tablist">
          <b-card no-body class="mb-2">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 variant="Secondary" class="text-left font-weight-bold d-flex align-items-center justify-content-between px-lg-3 px-1">
                Q. What’s the turnaround time for packs?
                <span class="when-open"><i class="fas fa-chevron-down"></i></span><span class="when-closed"><i class="fas fa-chevron-right"></i></span>
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                assumenda shoreditch et.</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-2">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-2 variant="Secondary" class="text-left font-weight-bold d-flex align-items-center justify-content-between px-lg-3 px-1">
                Q. Do you ship globally?
                <span class="when-open"><i class="fas fa-chevron-down"></i></span><span class="when-closed"><i class="fas fa-chevron-right"></i></span>
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                assumenda shoreditch et.</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-2">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-3 variant="Secondary" class="text-left font-weight-bold d-flex align-items-center justify-content-between px-lg-3 px-1">
                Q. Do you do items outside the ones shown in the pack builder?
                <span class="when-open"><i class="fas fa-chevron-down"></i></span><span class="when-closed"><i class="fas fa-chevron-right"></i></span>
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                assumenda shoreditch et.</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-2">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-4 variant="Secondary" class="text-left font-weight-bold d-flex align-items-center justify-content-between px-lg-3 px-1">
                Q. What are all the products we offer?
                <span class="when-open"><i class="fas fa-chevron-down"></i></span><span class="when-closed"><i class="fas fa-chevron-right"></i></span>
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                assumenda shoreditch et.</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-2">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-5 variant="Secondary" class="text-left font-weight-bold d-flex align-items-center justify-content-between px-lg-3 px-1">
                Q. Where are the Boxes by Swagify Warehouse Located?
                <span class="when-open"><i class="fas fa-chevron-down"></i></span><span class="when-closed"><i class="fas fa-chevron-right"></i></span>
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                assumenda shoreditch et.</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </section>
  </div>
</template>