<script setup lang="ts">
import { TheImageProxy } from '../composables/image'
const mode = ref(false)
const toggle = useToggle(mode)
</script>

<template>
  <div>
    <div>Index</div>
    <div>
      <RouterLink
      class="m-3 text-sm btn"
      to='/foo'
      >
      Foo
    </RouterLink>
    <RouterLink
      class="m-3 text-sm btn"
      to='/bar'
      >
      bar
    </RouterLink>
    <button btn @click="toggle()">Toggle</button>
    <TheImageProxy :class="mode? 'w-50 h-50':'w-40 h-60'" rounded-xl/>
    </div>
  </div>
</template>
