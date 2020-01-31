import { registerApplication, start, addErrorHandler, getAppStatus } from 'single-spa'

const commonContext = {
    name: "amin",
    hobby: ["eat", "drink", "play", "happy"]
}

registerApplication(
    'vue',
    () => import(/* webpackChunkName: "vue" */'./src/vue/vue.app.js'),
    pathPrefix("/vue")
)


registerApplication(
    'profile',
    () => import(/* webpackChunkName: "profile" */'./src/profile/react.app.js'),
    pathPrefix("/profile"),
    {commonContext}
)

registerApplication(
    'admin',
    () => import(/* webpackChunkName: "admin" */'./src/admin/react.app.js'),
    pathPrefix("/admin"),
    {commonContext}
)

registerApplication(
    'nav',
    () => import(/* webpackChunkName: "nav" */'./src/nav/react.app.js'),
    () => true
)

start()

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.indexOf(`${prefix}`) === 0
    }
}
