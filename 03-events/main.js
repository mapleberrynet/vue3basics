// http://192.168.1.250/vuejs/03-events/index.html
//https://www.gekkode.com/developpement/tutoriel-vuejs-3-pour-les-debutants/

import { createApp, ref } from 'vue'

import MyComponent from './my-component.js'

const app = createApp({
    components: {
        MyComponent
    },
    data() {
        
        return {
            btnState : true,
            plot : 0
        }
    },
    
    methods: {
        updateCart(count) {
            this.plot = count
        }
    },
  
    
    template: `
<div class="container">
    <my-component :state="btnState" @add-to-cart="updateCart"></my-component>
    
    YAPYAP {{ plot }}
</div>
`
})

const mountedApp = app.mount('#app')
