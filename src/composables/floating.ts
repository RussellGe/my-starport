import { Component, StyleValue, Teleport } from 'vue'
import { h } from 'vue'
interface FloatingOptions {
  duration?: number
}
export function createFloating<T extends Component>(
  component: T,
  options: FloatingOptions = {}
) {
  const { duration = 500 } = options
  const metadata = reactive<any>({
    props: {},
    attrs: {}
  })
  const ProxyEl = ref<HTMLElement | null>()
  const container = defineComponent({
    setup() {
      let rect = $ref<DOMRect | undefined>()
      const style = computed((): StyleValue => {
        const fixed: StyleValue = {
          transition: 'all ease-in-out',
          transitionDuration: `${duration}ms`,
          position: 'fixed'
        }
        if (!ProxyEl.value) {
          return {
            ...fixed,
            opacity: 0,
            pointerEvents: 'none',
            transform: 'translateY(-100px)'
          }
        }
        return {
          ...fixed,
          left: `${rect?.left ?? 0}px`,
          top: `${rect?.top ?? 0}px`
        }
      })
      function update() {
        rect = ProxyEl.value?.getBoundingClientRect()
      }
      useMutationObserver(document.body, update, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true
      })
      useEventListener('resize', update)

      let landed = $ref(false)
      let landing: any
      async function liftOff() {
        await nextTick()
        landed = false
      }
      function land() {
        landing = setTimeout(() => {
          landed = true
        }, duration)
      }
      watch(ProxyEl, (el, prev) => {
        clearTimeout(landing)
        update()
        if (prev) {
          liftOff()
        }
        if (el) {
          land()
        }
      })
      return () => {
        const children = [h(component, metadata.attrs)]
        return landed && ProxyEl.value
          ? h(Teleport, { to: ProxyEl.value }, children)
          : h('div', { style: style.value }, children)
      }
    }
  })
  const proxy = defineComponent({
    setup(props, ctx) {
      const attrs = useAttrs()
      const el = ref<HTMLElement>()
      metadata.attrs = attrs

      onMounted(() => {
        ProxyEl.value = el.value
      })
      onBeforeUnmount(() => {
        ProxyEl.value = undefined
      })
      return () =>
        h('div', { ref: el }, [ctx.slots.default ? h(ctx.slots.default) : null])
    }
  })

  return {
    container,
    proxy
  }
}
