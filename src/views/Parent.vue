<template>
  <div><Child ref="child_component" /></div>
</template>
<script>
import Child from "../components/Child.vue";
export default {
  name: "",
  components: { Child },
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {
    // document.getElementById
    // this.$refs.child_component.$rets.btn.click();
    // this.$refs.child_component.myFunction();
    this.$refs.child_component.fullName = "JongHo Lee";
  },
  unmounted() {},
  methods: {},
};
</script>
