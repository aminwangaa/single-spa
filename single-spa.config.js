import { registerApplication, start, addErrorHandler, getAppStatus } from 'single-spa'

const commonContext = {
    name: "amin",
    hobby: ["eat", "drink", "play", "happy"]
}

registerApplication(
    'vue',
    () => import('./src/vue/vue.app.js'),
    pathPrefix("/vue")
)


registerApplication(
    'community',
    () => import('./src/community/react.app.js'),
    pathPrefix("/community"),
    {commonContext}
)

registerApplication(
    'admin',
    () => import('./src/admin/react.app.js'),
    pathPrefix("/admin"),
    {commonContext}
)

registerApplication(
    'nav',
    () => import('./src/nav/react.app.js'),
    () => true
)

start()

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.indexOf(`${prefix}`) === 0
    }
}
