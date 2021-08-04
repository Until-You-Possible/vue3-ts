<template>
  <div class="dropdown" ref="dropdownRef">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle"
        @click.prevent="toggleOpen"
    >{{title}}</a>
    <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>


<script lang="ts">

import { defineComponent, ref, watch } from 'vue';
import useClickOutSide from "../hooks/useClickOutside";
export default defineComponent({
  name: "DropDown",
  props: {
    title: {
      type     : String,
      required : true
    }
  },
  setup(props) {
    const isOpen = ref(false);
    const dropdownRef = ref<null | HTMLElement>(null);
    const toggleOpen  = () => {
      return isOpen.value = !isOpen.value;
    }
    const isClickOutSide = useClickOutSide(dropdownRef);
    watch(isClickOutSide, () => {
      if (isOpen.value && isClickOutSide.value) {
        isOpen.value = false;
      }
    });

    return {
      isOpen,
      toggleOpen,
      dropdownRef
    }
  }
});

</script>