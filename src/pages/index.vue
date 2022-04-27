<script setup lang="ts">
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
      Go
    </RouterLink>
    <button btn @click="toggle">Toggle</button>
    <FloatProxy :class="mode? 'w-50 h-50':'w-40 h-60'" rounded-xl/>
    </div>
  </div>
</template>
