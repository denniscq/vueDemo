<template>
    <div class="car">
        <h2>清单</h2>
        <p v-show="!products.length">
            <i>请添加产品到购物车</i>
        </p>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.title }} - {{ product.price }} x {{ product.quantity }}
            </li>
        </ul>
        <p>合计: {{ total }}</p>
        <p>
            <button :disabled="!products.length" @click="checkout(products)">提交</button>
        </p>
        <p v-show="checkoutStatus">提交{{ checkoutStatus }}.</p>
    </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState({
            checkoutStatus: state => state.car.checkoutStatus
        }),
        ...mapGetters('car', {
            products: 'carProducts',
            total: 'carTotalPrice'
        })
    },
    // computed: {
    //     checkoutStatus(){
    //         return this.$store.state.car.checkoutStatus
    //     },
    //     products(){
    //         return this.$store.getters['car/carProducts']
    //     },
    //     total(){
    //         return this.$store.getters['/car/carTotalPrice']
    //     }
    // },
    methods: {
        // checkout(products) {
        //     this.$store.dispatch('car/checkout', products)
        // }
        ...mapActions('car', ['checkout'])
    }
}
</script>

<style>
</style>