<template>
    <div @click='a = !a' overflow-hidden transition-all >
        <img object-cover w-full block h-full v-if="a" src="https://images.unsplash.com/photo-1650975109944-2772703c72f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="">
        <img object-cover w-full block h-full v-else src="https://images.unsplash.com/photo-1650974727239-95f762d98e1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="">
    </div>
</template>
<script setup lang="ts">
const a = $ref(false)
</script>