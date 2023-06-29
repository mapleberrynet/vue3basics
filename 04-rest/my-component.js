// my-component.js

import axios from 'axios'
import {onMounted, ref} from 'vue'

export default {
     emits: ["add-to-cart"],
     setup() {
        
        let products = ref([])
        
        console.log('SETUP')
        onMounted(() => {
            // get data from api
            axios.get('http://192.168.1.250/vuejs/data/products.json')
            .then((result) => {
                products.value = result.data
                console.log(products.value)
            }).catch(() => {
                console.log(err.response)
            });
        });
        return {
            products
        }
    },
    
    props: {
        
        state: {
            type: Boolean
        }
    },
    
    data() {
        return {
            count: 0,
            activeClass : false
        }
    },
    
    methods: {
        addToCart() {
            this.count += 1
            this.$emit('add-to-cart', this.count)
            
            this.products.data.push({"name" : "Airbus A321"})
            this.activeClass = true
        }
    },
  
    template: `
<button
    v-if="state"
    class="btn" :class="[ activeClass ? 'btn-primary':'btn-warning']"
    @click="addToCart">
    You clicked me {{ count }} times.
</button>
<ul class="list-unstyled">
    <li class="row m-0"  v-for="(product, index) in products.data" :key="index">
        {{product.name}}
    </li>
</ul>
`
}