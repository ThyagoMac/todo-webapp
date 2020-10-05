<template>
    <div>
        <div class="container grid-xs py-2">
        <h4 class="title">Todo Web App</h4>
        <form @submit.prevent="addTodo(todo)">
            <div class="input-group">
            <input type="text" class="form-input" placeholder="New Todo" v-model="todo.description">
            <button class="btn btn-primary input-group-btn" :class="{loading}">Add</button>
            </div>
        </form>
        </div>
        <hr>
        <div class="todo-list">
        <Todo v-for="todo in todos" :key="todo.id" :todoComp="todo" @toggle="toggleTodo(todo)" @remove="removeTodo" @update="updateTodo"/>
        </div>
    </div>
</template>

<script>

import Todo from '@/components/todo';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'App',
  components: { Todo },
  data() {
    return {
      todo: { checked: false },
      
    }
  },
  computed: {
    ...mapState(['todos', 'loading']),
    /* todos(){
      return this.$store.state.todos;
    },
    loading() {
      return this.$store.state.loading;
    } */
  },
  methods: {
    ...mapActions(['addTodo', 'toggleTodo', 'removeTodo']),

    /* toggleTodo(todo){
      this.$store.dispatch('toggleTodo', todo);
      
    }, */
    async addTodo(todo){

      if(todo.id){
        this.todo = {checked: false};
      }else {
        
        await this.$store.dispatch('addTodo', todo);
        this.todo = {checked: false}
        
      }

    },
    /* removeTodo(todo){
      this.$store.dispatch('removeTodo', todo);
    }, */
    updateTodo(todo){
      //const index = this.todos.findIndex(todos => todos.id === todo.id);
      this.todo = todo;

    }
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