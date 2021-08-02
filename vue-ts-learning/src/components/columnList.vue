<template>

<ul>
  <li v-for="item in list" :key="item.id"></li>
</ul>

</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue';

export interface ColumnProps {
  id          : string;
  title       : string;
  avatar      : string;
  description : string;
}

export default defineComponent({
  name: "columnList",
  props: {
    type     : Array as PropType<ColumnProps[]>,
    // eslint-disable-next-line vue/require-prop-type-constructor
    required : true
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setup (props) {
    props.list
  }

});

</script>

<style>

</style>