<template>
    <div class="container-board">
        <div class="columns">
            <div class="column col-5">
                <div class="panel">
                    <div class="panel-header">
                        <div class="panel-title">Todos</div>
                    </div>
                    <div class="panel-body">
                        <Todo v-for="todo in uncheckeds" :todoComp='todo' @toggle="toggleTodo(todo)" @remove="removeTodo" @update="updateTodo" :key="todo.id"/>
                    </div>
                    <div class="panel-footer">
                        <button v-if="uncheckeds.length > 0" @click="checkAll" class="btn btn-link float-right" >Check All</button>
                    </div>
                </div>
            </div>
            <div class="column col-5">
                <div class="panel">
                    <div class="panel-header">
                        <div class="panel-title">Done</div>
                    </div>
                    <div class="panel-body">
                        <Todo  v-for="todo in checkeds" :todoComp='todo' @toggle="toggleTodo(todo)" @remove="removeTodo" @update="updateTodo" :key="todo.id"/>
                    </div>
                    <div class="panel-footer">
                        <button v-if="checkeds.length > 0" @click="uncheckAll" class="btn btn-link float-right">Uncheck All</button>
                        <button v-if="checkeds.length > 0" @click="removeAllCheckeds" class="btn btn-link float-right text-error">Remove All</button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import Todo from '@/components/todo';
import { mapGetters, mapActions } from 'vuex';

export default {
    components: { Todo },
    computed: {
        ...mapGetters(['uncheckeds', 'checkeds'])
    },
    methods: {
        ...mapActions(['removeTodo', 'toggleTodo', 'checkAll', 'uncheckAll', 'removeAllCheckeds']),
        updateTodo(todo){
        //const index = this.todos.findIndex(todos => todos.id === todo.id);
            this.todo = todo;
        }
    }
}
</script>

<style scoped>
    .container-board {
        height: calc(100vh - 100px);
        padding: 15px;
    }
    .columns {
        height: 100%;
    }
    .columns .column .panel {
        height: 100%;
        border: 0;
        box-shadow: 2px 0.25rem 1rem rgba(48, 55, 66,0.15);
    }
    
</style>