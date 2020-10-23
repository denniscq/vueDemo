<template>
    <div id="app">
        {{ count }}
        <br/>
        {{$store.getters.doubleCount}}
        <button @click="$store.commit('increment', 2)">Count ++</button>
        <button @click="$store.dispatch('increment')">Count ++</button>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {},
    computed: {
        count() {
            return this.$store.state.count
        }
    }
}
</script>

<style>
</style>
