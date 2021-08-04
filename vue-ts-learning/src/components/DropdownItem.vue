<template>
  <div class="container">
    <li class="dropdown-option">
      <slot></slot>
    </li>
  </div>
</template>


<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: "DropDownItem"
});

</script>

<style>



</style>