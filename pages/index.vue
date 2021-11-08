<script setup lang="ts">
import {Todo} from '~/models/Todo';
import {Ref} from '@vue/reactivity';
import ListComponent from '~/components/ListComponent.vue';

const todos: Ref<Todo[]> = ref([]);

onMounted(() => {
  todos.value = [];
})
</script>
<template>
  <div class="container mx-auto">
    <div class="heading text-center">
      ToDo lista
    </div>
    <div>
      <div v-for="todo in todos">
        <ListComponent :todo="todo"></ListComponent>
      </div>
      {{todos}}
    </div>
  </div>
</template>
