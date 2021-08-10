<template>
  <div>
    <input class="form-control"
           :class="{'is-validate': inputRef.error}"
           :value="inputRef.val"
           v-bind="$attrs"
           @input="inputRefValue"
           @blur="validateInput"
    >
    <span v-if="inputRef.error">{{inputRef.message}}</span>
  </div>
</template>

<script lang="ts">

import {defineComponent, PropType, reactive, onMounted } from 'vue';
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
import { emitter } from './ValidateForm.vue';
export interface RuleProp {
  type: "email"| "required",
  message: string
}

// export type RulesProp = RuleProp[]

export default defineComponent({
  name: "inputValidForm",
  props: {
    rules: Array as PropType<RuleProp[]>,
    modelValue: String
  },
  inheritAttrs: false,
  setup(props, context) {
    const  inputRef = reactive({
      val: props.modelValue || "",
      error: false,
      message: ""
    });
    const inputRefValue = (e: KeyboardEvent) => {
      const currentInputValue = (e.target as HTMLInputElement).value;
      inputRef.val = currentInputValue;
      context.emit("update:modelValue", currentInputValue);
    }
    const validateInput = () => {
      if (props.rules) {
        let allPassed = props.rules.every(rules => {
          let passed = true;
          inputRef.message = rules.message;
          switch (rules.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '');
              break;
            case 'email':
              passed = emailReg.test(inputRef.val);
              break;
            default:
              break;
          }
          return passed;
        });
        inputRef.error = !allPassed;
        return allPassed;
      }
      return true;
    }

    onMounted(() => {
      emitter.emit("form-item-created", validateInput);
    });



    return {
      inputRef,
      validateInput,
      inputRefValue
    }
  }
});

</script>

<style>


</style>