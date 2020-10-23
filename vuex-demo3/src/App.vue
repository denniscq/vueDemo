<template>
    <div id="app">
        <h1>购物车实例</h1>
        <p>账号: {{ email }}</p>
        <hr />
        <h2>产品</h2>
        <ProductList />
        <hr />
        <ShoppingCar />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductList from './components/ProductList'
import ShoppingCar from './components/ShoppingCar'
export default {
    name: 'App',
    components: {
        ProductList,
        ShoppingCar
    },
    computed: mapState({
        email: state => state.userInfo.email
    })
}
</script>

<style>
</style>
