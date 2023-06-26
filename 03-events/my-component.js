// my-component.js

export default {
    
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
    
    computed: {
        
        
    },
    
    methods: {
        addToCart() {
            this.count += 1
            this.$emit('add-to-cart', this.count)
        }
    },
  
    template: `
<button
    v-if="state"
    class="btn" :class="[ activeClass ? 'btn-warning' : 'btn-primary' ]"
    @click="addToCart">
    You clicked me {{ count }} times.
</button>`

}