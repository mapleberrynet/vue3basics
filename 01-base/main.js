// http://192.168.1.250/vuejs/01-base/index.html
//https://www.gekkode.com/developpement/tutoriel-vuejs-3-pour-les-debutants/

import { createApp, ref } from 'vue'

import MyComponent from './my-component.js'

const app = createApp({
    components: {
        MyComponent
    },
    template: `
    <my-component></my-component>
    
    YAPYAP`
})

const mountedApp = app.mount('#app')
