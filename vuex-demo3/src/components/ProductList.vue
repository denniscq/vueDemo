<template>
    <ul>
        <li v-for="product in products" :key="product.id">
            {{ product.title }} - {{ product.price }} - {{ product.id }}
            <button :disabled="!product.inventory" @click="addProductToCar(product)">
                加入购物车
            </button>
        </li>
    </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: mapState({
        products: state => state.products.all
    }),
    // computed: {
    //     products() {
    //         return this.$store.state.products.all
    //     }
    // }
    // methods: mapActions('car', ['addProductToCar']),
    methods: {
        addProductToCar(product) {
            this.$store.dispatch('car/addProductToCar', product)
        }
    },
    created() {
        this.$store.dispatch('products/getAllProducts')
    }
}
</script>

<style>
</style>