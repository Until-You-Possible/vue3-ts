<template>
  <div>
    <input class="form-control"
           placeholder="enter the content"
           :class="{'is-validate': inputRef.error}"
           type="text"
           :value="inputRef.val"
           @input="inputRefValue"
           @blur="validateInput"
    >
    <span v-if="inputRef.error">{{inputRef.message}}</span>
  </div>
</template>

<script lang="ts">

import {defineComponent, PropType, reactive} from 'vue';
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
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
    }
    // console.log("validateInput", validateInput);
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