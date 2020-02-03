import Vue from "vue"
import singleSpaVue from "single-spa-vue"
import Hello from "./main.vue"

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: "#root",
    render: (r) => r(Hello),
  },
})

export const bootstrap = [
  vueLifecycles.bootstrap,
]

export const mount = [
  vueLifecycles.mount,
]

export const unmount = [
  vueLifecycles.unmount,
]
