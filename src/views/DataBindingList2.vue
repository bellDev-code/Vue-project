<template>
  <div>
    <select v-model="selectedGender">
      <option value="">전체</option>
      <option value="male">남자</option>
      <option value="female">여자</option>
    </select>
    <input type="search" v-model="searchName" placeholder="Enter the name" />
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
import axios from 'axios'

export default {
  name: '',
  components: {},
  data() {
    return {
      url: 'https://64dd091b-811c-4eda-8fe3-cb394e1d7a48.mock.pstmn.io/getUserList',
      userList: [],
      selectedGender: '',
      searchName: ''
    }
  },
  setup() {},
  created() {},
  mounted() {
    // this.getUserList();
  },
  unmounted() {},
  methods: {
    async getUserList() {
      const userList = (await axios.get(this.url)).data.data

      if (this.selectedGender == '') {
        // 성별 전체 선택
        if (this.searchName == '') {
          // 이름 입력 안함
          this.userList = userList
        } else {
          // 이름 입력함
          this.userList = userList.filter(
            (u) =>
              u.name.toLowerCase().indexOf(this.searchName.toLowerCase()) > -1
          )
        }
      } else {
        // 성별을 남자 혹은 여자 선택한 경우
        if (this.searchName == '') {
          // 이름 입력 안함
          this.userList = userList.filter(
            (u) => u.gender == this.selectedGender
          )
        } else {
          // 이름 입력 함
          this.userList = userList.filter(
            (u) =>
              u.gender == this.selectedGender &&
              u.name.toLowerCase().indexOf(this.searchName.toLowerCase()) > -1
          )
        }
        console.log(this.userList)
      }

      // 성별로 데이터 찾기
      // if (this.selectedGender == "") {
      //   this.userList = userList;
      // } else {
      //   this.userList = userList.filter((u) => u.gender == this.selectedGender);
    }
  }
}
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
