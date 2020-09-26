<template>
  <div id="app">
    <div class="container grid-xs py-2">
      <h3 class="title">Todo Web App</h3>
      <form @submit.prevent="addTodo(todo)">
        <div class="input-group">
          <input type="text" class="form-input" placeholder="New Todo" v-model="todo.description">
          <button class="btn btn-primary input-group-btn">Add</button>
        </div>
      </form>
    </div>
      <hr>
      <div class="todo-list">
        <Todo v-for="todo in todos" :key="todo.id" :todoComp="todo" @toggle="toggleTodo(todo)" @remove="removeTodo"/>
      </div>
    
  </div>
</template>

<script>

import  Todo from './components/todo'

export default {
  name: 'App',
  components: { Todo },
  data() {
    return {
      todos: [],
      todo: { checked: false}
    }
  },
  methods: {
    toggleTodo(todo){
      const index = this.todos.findIndex(todos => todos.id === todo.id);
      if (index > -1){
        const checked = !this.todos[index].checked;
        this.$set(this.todos, index, {...this.todos[index], checked});
        //this.todos[index].checked = checked;
      }
      
    },
    addTodo(todo){
      todo.id = Date.now();
      this.todos.push(todo);
      this.todo = {checked: false};
    },
    removeTodo(todo){
      const index = this.todos.findIndex(todos => todos.id === todo.id);
      if(index > -1){
        this.$delete(this.todos, index);
        //this.todos.splice(index,1);

      }
    },
  },
}
</script>

<style scoped>
.title{
  text-align: center;
}
.todo-list{
  padding-top: 2em;
}

</style>
