<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/class">Class</router-link> |
    <router-link to="/class2">Class2</router-link> |
    <router-link to="/style">Style</router-link> |
    <router-link to="/dataBindingList">dataBindingList</router-link> |
    <router-link to="/dataBindingList2">dataBindingList2</router-link> |
    <router-link to="/renderingIf">renderingIf</router-link> |
    <router-link to="/eventBinding">eventBinding</router-link> |
    <router-link to="/Vending">Vending</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
