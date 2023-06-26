// http://192.168.1.250/vuejs/02-props/index.html
//https://www.gekkode.com/developpement/tutoriel-vuejs-3-pour-les-debutants/

import { createApp, ref } from 'vue'

import MyComponent from './my-component.js'

const app = createApp({
    components: {
        MyComponent
    },
    data() {
        
        return {
            btnState : false
        }
    },
    
    template: `
    <my-component :state="btnState"></my-component>
    
    YAPYAP`
})

const mountedApp = app.mount('#app')
