<template>
  <div v-if="userRole == 'Admin'">
    <!-- <h1 v-if="type == 'A'">A</h1>
    <h1 v-else-if="type == 'B'">B</h1>
    <h1 v-else>C</h1> -->
    <button>조회</button>
    <button v-if="userRole == 'Admin'">생성</button>
    <button v-show="userRole == 'Admin'">삭제</button>
  </div>
  <div v-else>
    <button>조회</button>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      // type: "B",
      userRole: 'User'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
