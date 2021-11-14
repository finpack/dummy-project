<template>
  <div>
    <input v-model="todo.isDone" type="checkbox">
    <label>{{ todo.description }}</label> -- {{todo}}
  </div>
</template>
<script lang="ts">
import {PropType} from '@vue/runtime-core';
import {Task} from '~/models/Task';

export default defineComponent({
  props: {
    todo: {
      required: true,
      type: Object as PropType<Task>
    }
  }
})

</script>
<style scoped lang="scss">
</style>
