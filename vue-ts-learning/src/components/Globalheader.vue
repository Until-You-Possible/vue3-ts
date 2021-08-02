<template>
  <div>
    header
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
export interface UserProps{
  isLogin : boolean;
  name?   : string;
  id?     : number

}
export default defineComponent({
  name: "GlobalHeader",
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
})

</script>