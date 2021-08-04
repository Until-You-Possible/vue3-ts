<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <router-link class="navbar-brand" to="/">者也专栏</router-link>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item"><router-link to="/login" class="btn btn-outline-light my-2">登陆</router-link></li>
      <li class="list-inline-item"><router-link to="/signup" class="btn btn-outline-light my-2">注册</router-link></li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <DropDown :title="`你好，${user.name}`"></DropDown>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import DropDown from "./DropDown.vue";
export interface UserProps{
  isLogin : boolean;
  name?   : string;
  id?     : number

}
export default defineComponent({
  name: "GlobalHeader",
  components: {
    DropDown
  },
  props: {
    user: {
      type     : Object as PropType<UserProps>,
      required : true
    }
  }
})

</script>