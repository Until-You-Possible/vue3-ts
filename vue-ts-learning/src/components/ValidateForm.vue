<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="onsubmitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue';
import mitt from "mitt";
export const emitter = mitt();
type FuncValidate = () => boolean;
export default defineComponent({
  name: "ValidateForm",
  setup(props, context) {
    let funcArray: FuncValidate[] = [];
    const onsubmitForm = () => {
      // 全部校验通过
      // 其中一个error 终止循环
      let result = funcArray.map(item => item()).every(t => t);
      console.log("funcArray", funcArray);
      context.emit("form-submit", result);
    }
    const callback = (params: any) => {
      console.log("params", params);
      funcArray.push(params);
    }
    onMounted(() => {
      emitter.on("form-item-created", callback);
    });
    onUnmounted(() => {
      emitter.off("form-item-created", callback);
    });
    return {
      onsubmitForm
    }
  }
});
</script>
