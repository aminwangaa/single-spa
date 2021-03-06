import React from "react"
import ReactDOM from "react-dom"
import singleSpaReact from "single-spa-react"
import Root from "./root.component"

function domElementGetter() {
  let el = document.getElementById("nav")
  if (!el) {
    el = document.createElement("div")
    el.id = "nav"
    document.body.appendChild(el)
  }
  return el
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter
})

export const bootstrap = [
  reactLifecycles.bootstrap
]

export const mount = [
  reactLifecycles.mount
]

export const unmount = [
  reactLifecycles.unmount
]
