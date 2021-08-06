<template>
  <div>
    <input class="form-control"
           placeholder="enter the content"
           :class="{'is-validate': inputRef.error}"
           type="text"
           v-model="inputRef.val"
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
    rules: {
      type: Array as PropType<RuleProp[]>
    }
  },
  setup(props) {
    const  inputRef = reactive({
      val: "",
      error: false,
      message: ""
    });
    const validateInput = () => {
      console.log("inner");
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
        console.log("allPassed", allPassed);
        console.log("inputRef", inputRef);
        return allPassed;
      }
    }
    // console.log("validateInput", validateInput);
    return {
      inputRef,
      validateInput
    }
  }
});

</script>

<style>


</style>