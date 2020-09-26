<template>
    <div class="title flex-centered" :class="{checked: todoComp.checked}">
          
          <div class="title-icon">
            <i class="icon" :class="todoComp.checked ? 'icon-check' : 'icon-time'"></i>
          </div>
          <div class="title-concent mx-2">
            <div class="title-subtitle">{{ todoComp.description }}</div>
          </div>
          <div class="title-action">
            <button class="btn btn-link mx-1" @click="$emit('toggle', todoComp)">
                <!-- 
                <span class="text-success" v-show="!todoComp.checked"><i class="icon icon-check"></i></span>
                <span class="text-error" v-show="todoComp.checked"><i class="icon icon-cross"></i></span> 
                -->
                <span class="text-success" v-if="!todoComp.checked"><i class="icon icon-check"></i></span>
                <span class="text-error" v-else><i class="icon icon-cross"></i></span>
            </button>
            <button class="btn btn-link mx-1"><i class="icon icon-edit"></i></button>
            <button class="btn btn-link mx-1" @click="$emit('remove', todoComp)"><span class="text-error"><i class="icon icon-delete"></i></span></button>
          </div>
          
        </div>
</template>

<script>
export default {
    props: {
        todoComp: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.checked{
    text-decoration: line-through;
    color: lightgray;
}
</style>