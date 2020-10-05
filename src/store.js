import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    todos: [],
    loading: false
}

const actions = {
    addTodo({commit}, todo){
        commit('setLoading', true)
        return new Promise(resolve => {
            setTimeout(() =>{
                todo.id = Date.now()
                commit('addTodo', todo)
                commit('setLoading', false)
                resolve(todo);
            }, 400);
        })
    },
    toggleTodo({commit}, todo) {
        commit('toggleTodo', todo);
    },
    removeTodo({commit}, todo) {
        commit('removeTodo', todo);
    }
}

const mutations = {
    addTodo(state, payload) {
        state.todos.push(payload);
    },
    setLoading(state, payload) {
        state.loading = payload;
    },
    toggleTodo(state, payload) {
        const index = state.todos.findIndex(todos => todos.id === payload.id);
        if (index > -1){
            const checked = !state.todos[index].checked;
            Vue.set(state.todos, index, {...state.todos[index], checked});
            //this.todos[index].checked = checked;
        }
    },
    removeTodo(state, payload) {
        state.todos = state.todos.filter((todo => todo.id != payload.id));

        /* 
        const index = state.todos.findIndex(todos => todos.id === payload.id);
        if(index > -1){
            Vue.delete(state.todos, index);
            //this.todos.splice(index,1);
        }
         */
    }
}

const store = new Vuex.Store({
    state,
    actions,
    mutations,
});


export default store;