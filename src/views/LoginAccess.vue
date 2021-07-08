<template>
  <div>{{ user.email ? '콘텐츠를 보여줍니다.' : '로그인 후 사용하세요.' }}</div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  created() {},
  mounted() {
    if (!this.user.email) {
      this.$router.push({ path: '/login' })
    }
  },
  unmounted() {},
  methods: {}
}
</script>
