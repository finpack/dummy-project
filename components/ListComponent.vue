<template>
  <div>
    {{todo}}
  </div>
</template>
<script lang="ts" setup>
import {PropType} from '@vue/runtime-core';
import {Todo} from '~/models/Todo';

export default defineComponent({
  props: {
    todo: {
      required: true,
      type: Object as PropType<Todo>
    }
  }
})

</script>
<style scoped lang="scss">
</style>
