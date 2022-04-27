<script setup lang="ts">
import { metadata, ProxyEl } from "~/composables/floating";
const attrs = useAttrs()
const el = ref<HTMLElement>()
metadata.attrs = attrs

onMounted(() => {
    ProxyEl.value = el.value
})
</script>
<template>
<div ref='el'>
    <slot />
</div>
</template>