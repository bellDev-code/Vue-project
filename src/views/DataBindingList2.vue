<template>
  <div>
    <select v-model="selectedGender">
      <option value="male">남자</option>
      <option value="female">여자</option>
    </select>
    <button @click="getUserList">조회</button>
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>성별</th>
          <th>나이</th>
          <th>회사</th>
          <th>이메일</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="user.userId" v-for="user in userList">
          <td>{{ user.name }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.company }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "",
  components: {},
  data() {
    return {
      url: "https://64dd091b-811c-4eda-8fe3-cb394e1d7a48.mock.pstmn.io/getUserList",
      userList: [],
      selectedGender: "",
    };
  },
  setup() {},
  created() {},
  mounted() {
    // this.getUserList();
  },
  unmounted() {},
  methods: {
    async getUserList() {
      const userList = (await axios.get(this.url)).data.data;

      if (this.selectedGender == "") {
        this.userList = userList;
      } else {
        this.userList = userList.filter((u) => u.gender == this.selectedGender);
      }
      // console.log(this.userList);
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
}
table,
th,
td {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #222;
  padding: 10px;
}

button {
  padding: 10px;
  margin-bottom: 10px;
}
</style>
