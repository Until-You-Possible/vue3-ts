<template>
  <div class="container">
    <GlobalHeader :user="currentUser"/>
<!--    <column-list :list="list"></column-list>-->
    <ValidateForm>
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <inputValidForm
            :rules="inputTestData"
            placeholder="请输入邮箱地址"
            type="text"
            v-model="emailValue" />
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <inputValidForm
            :rules="inputTestData"
            placeholder="请输入密码"
            type="password" />
      </div>
    </ValidateForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import ValidateForm from "./components/ValidateForm.vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import inputValidForm, { RuleProp } from "./components/inputValidForm.vue";

import 'bootstrap/dist/css/bootstrap.min.css';
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧, 这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_150,w_150'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧 这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  }
]
const userData: UserProps = {
  isLogin : true,
  name    : "arthur"
}
const inputTestData: RuleProp[] = [
  {
    type: "required",
    message: "不能为空"
  },
  {
    type: "email",
    message: "邮箱格式不对"
  }
]




export default defineComponent({
  name: 'App',
  components: {
    // ColumnList,
    GlobalHeader,
    inputValidForm,
    ValidateForm
  },
  setup() {
    const emailValue = ref("");
    return {
      list        : testData,
      currentUser : userData,
      inputTestData,
      emailValue
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
