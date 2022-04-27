<script setup lang='ts'>
let size = $(useStorage('size', 100))
const enlarge = () => {
    size += 20
}
const reset = () => {
    size = 100
}
</script>
<template>
<div flex='~ col' items-center>
    <div>Foo</div>
    <div>
      <RouterLink
        class="m-3 text-sm btn"
        to='/'
      >
        Back
      </RouterLink>
      <button btn @click='enlarge' mr5>Enlarge</button>
      <button btn @click='reset'>Reset</button>
      <div m10 flex='~ col sm:row gap-4' items-center>
          <FloatProxy :style="{width: size+'px', height: size+'px'}" rounded='1/2'/>
        <p flex-1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dignissimos repudiandae eius suscipit! Quibusdam consequuntur quam impedit culpa incidunt ut explicabo in nostrum. Quo, vero fugit. Odit reprehenderit doloremque maiores?</p>
      </div>
    </div>
  </div>
</template>