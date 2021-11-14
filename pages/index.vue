<script setup lang="ts">
import {Task} from '~/models/Task';
import {ComputedRef, Ref} from '@vue/reactivity';
import ListComponent from '~/components/ListComponent.vue';
import {useApi} from '~/services/api';

const allTasks: Ref<Task[]> = ref([]);

const newTodo: Ref<Task> = ref({
  isDone: false,
  description: ''
});

const {getAllListElements, addNewTodo} = useApi()

onMounted(async() => {
  allTasks.value = await getAllListElements();
})

const todos: ComputedRef<Task[]> = computed<Task[]>(() => allTasks.value.filter(x => !x.isDone))
const listOfDoneTasks: ComputedRef<Task[]> = computed<Task[]>(() => allTasks.value.filter(x => x.isDone))

const addNewListElement = async() => {
  let item = unref(newTodo.value);
  await addNewTodo(item)
  allTasks.value.push(item)
  newTodo.value.description = ''
}
</script>
<template>
  <div class="container mx-auto">
    {{ allTasks }}
    <div class="heading text-center">
      Zadania do wykonania
    </div>
    <div>
      <div>
        <label>Dodaj nowe zadanie</label>
        <input type="text" v-model="newTodo.description">
        <button @click="addNewListElement">Dodaj</button>
      </div>
      <div v-for="(todo, index) in todos">
        <ListComponent :todo="todo" :key="index + todo.description"></ListComponent>
      </div>
    </div>
    <div class="heading text-center">
      Zadania wykonane
    </div>
    <div>
      <div v-for="todo in listOfDoneTasks">
        <ListComponent :todo="todo"></ListComponent>
      </div>
    </div>
  </div>
</template>
