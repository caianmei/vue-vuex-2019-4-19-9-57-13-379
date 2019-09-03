<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <ToDoList />
  </div>
</template>

<script>
import ToDoList from "./components/ToDoList.vue";

export default {
  name: "app",
  components: {
    ToDoList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.input-text {
  width: 70%;
}
input {
  padding: 4px 15px 4px 0;
}
#button {
  display: inline-block;
  background-color: #fc999b;
  color: #ffffff;
  border-radius: 5px;
  text-align: center;
  margin-top: 2px;
  padding: 5px 15px;
}
#button:hover {
  opacity: 0.7;
  cursor: pointer;
}
.list {
  margin: 20px;
}
.bottom {
  display: block;
  width: 400px;
  /* display: flex; */
  flex-wrap: nowrap;
  margin: 20px auto;
}
.bottom span {
  padding: 10px;
  margin: 5px 10px;
  color: #fc999b;
  margin: center;
}
.bottom span:hover {
  border: 1px solid;
  border-radius: 3px;
  cursor: pointer;
  margin: center;
}
</style>
