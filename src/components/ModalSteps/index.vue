<script>
import StepOne           from "./components/StepOne"
import StepTwo           from "./components/StepTwo"
import StepThree         from "./components/StepThree"
import StepForth         from "./components/StepForth"
import PresetPacksStep   from "./components/PresetPacksStep"

export default {
  name: "ModalSteps",

  components:{
    StepOne,
    StepTwo,
    StepThree,
    StepForth,
    PresetPacksStep
  },

  data() {
    return {
      max: 100,
      current_step: 1,
      total_steps: 4,
    }
  },

  computed: {
    progress() {
      return this.current_step * (100/this.total_steps);
    }
  },

  methods: {
    nextStep() {
      if(this.current_step === this.total_steps) {
        return;
      }

      this.current_step++;
    },

    previousStep() {
      if(this.current_step === 1) {
        return;
      }

      this.current_step--;
    },

  }
};
</script>
<template>
  <div>
    <b-modal id="modal-steps" size="xl" modal-class="px-0" dialog-class="steps-modal m-0" content-class="bx-stepper-modal rounded-0" centered no-close-on-backdrop hide-footer>
      <template #modal-header="{ close }">
        <b-button @click="close()"><i class="fas fa-times"></i></b-button>
      </template>

      <div class="w-100">
        <div :style="{width:progress + '%'}" class="text-right bx-progress-status">
          <div>Step {{ current_step }} of {{ total_steps }}</div>
        </div>
        <b-progress :max="max">
          <b-progress-bar variant="primary" :value="progress"></b-progress-bar>
        </b-progress>
      </div>

        <StepOne v-if="current_step === 1"/>

        <div v-if="true">
          <PresetPacksStep v-if="current_step === 2"/>
        </div>

        <div v-else>
          <StepTwo v-if="current_step === 2"/>
        </div>

        <StepThree v-if="current_step === 3"/>

        <StepForth v-if="current_step === 4"/>

      <div class="my-2 text-center">
        <b-button class="m-2" variant="light" v-if="current_step > 1" @click="previousStep()">Go Back</b-button>
        <b-button class="m-2" variant="primary" v-if="current_step < this.total_steps" @click="nextStep">Next Step</b-button>
        <b-button class="m-2" variant="primary" v-if="current_step === this.total_steps" @click="$router.push('order')">Checkout</b-button>
      </div>
    </b-modal>
  </div>
</template>