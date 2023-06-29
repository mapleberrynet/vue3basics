// http://192.168.1.250/vuejs/04-rest/index.html
//https://www.gekkode.com/developpement/tutoriel-vuejs-3-pour-les-debutants/
//https://github.com/rakagemi/vue-3-rest-api-frontend/blob/master/src/views/product/Index.vue

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
    <h1>APP {{ plot }}</h1>
    <my-component :state="btnState" @add-to-cart="updateCart"></my-component>
    
    
</div>
`
})

const mountedApp = app.mount('#app')
