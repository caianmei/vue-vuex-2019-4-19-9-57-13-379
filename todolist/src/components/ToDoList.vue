<template>
  <div class="TodoList">
    <div>
      <h2>Vue To Do List</h2>
      <p>
        <em>Simple Todo List with adding and filter by diff status.</em>
      </p>
      <input class="input-text" type="text" v-model="value"/>
      <button @click="add">Add</button>
      <ol>
        <div v-for="(item,index) in items" :key="index">
          <li style="align:left">
            <input id="check" type="checkbox" @click="check(index)"/>
            <span>{{item}}</span>
          </li>
        </div>
      </ol>
      <span class="bottom">
        <button @click="all">All</button>
        <button @click="active">Active</button>
        <button @click="complete">Complete</button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todoList: Number
  },
  data() {
    return {
        value:"",
        items:this.$store.getters.getCheckBoxs,
        ischeck:true
    };
  },
  methods: {
    add:function() {
        this.$store.commit('add',this.value)
    },
    all:function() {
        this.items = this.$store.getters.getCheckBoxs;
    },
    active:function() {
        this.items = this.$store.getters.getActive;
    },
    complete:function() {
        this.items = this.$store.getters.getComplete;
    },
    check:function(index){
        this.$store.commit('check',{index:index,ischeck:this.ischeck})
    }
  }
};
</script>

<style scoped>
.TodoList {
  display: flex;
  justify-content: center;
}
.input-text {
  width: 70%;
}
input {
  padding: 4px 15px 4px 0;
}
button {
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
  display:block;
  flex-wrap: nowrap;
}
.bottom div {
  padding: 10px;
  margin: 5px 10px;
  color: #fc999b;
}
.bottom div:hover {
  border: 1px solid;
  border-radius: 3px;
  cursor: pointer;
}
</style>
