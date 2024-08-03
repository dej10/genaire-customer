import type { DirectiveBinding } from 'vue'

type FormFieldElement = HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement

const vDebounce = {
  beforeMount: (el: FormFieldElement, binding: DirectiveBinding) => {
    const { value, arg } = binding

    el.addEventListener(
      'input',
      lodashDebounce(() => {
        value(el.value)
      }, toMilliseconds(arg)),
    )
  },
}

const vBlur = {
  mounted: (el: Element, binding: DirectiveBinding) => {
    const { value, arg } = binding
    const trigger = document.querySelector(`[data-vBlur="${arg}"]`)
    document.addEventListener('click', (event: any) => {
      if (!el.contains(event.target) && trigger != null && trigger !== event.target) {
        if (typeof value === 'function')
          value()
      }
    })
  },
}

export const useDirectives = () => ({
  vDebounce,
  vBlur,
})
