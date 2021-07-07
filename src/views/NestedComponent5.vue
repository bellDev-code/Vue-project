<template>
  <div>
    <DataGrid2 :header="header" :body="body" />
  </div>
</template>
<script>
import DataGrid2 from "../components/DataGrid2.vue";
export default {
  name: "",
  components: { DataGrid2 },
  data() {
    return {
      header: [
        { title: "이름", key: "name" },
        { title: "연락처", key: "tel" },
        { title: "이메일", key: "email" },
        { title: "주소", key: "addr" },
      ],
      body: [
        {
          name: "유재석",
          tel: "010-0000-1111",
          email: "ryu@gami.com",
          addr: "서울시",
        },
        {
          name: "김종국",
          tel: "010-0000-1111",
          email: "ryu@gami.com",
          addr: "안양시",
        },
        {
          name: "지석진",
          tel: "010-3333-4444",
          email: "ryu@gami.com",
          addr: "서울시",
        },
      ],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
