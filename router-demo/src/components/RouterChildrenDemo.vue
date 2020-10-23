<template>
    <div>
        <h3>this is children component</h3>
        {{ routerInfo }}
    </div>
</template>

<script>
export default {
    computed: {
        routerInfo() {
            const { fullPath, path, name, params, query, meta } = this.$route
            return { fullPath, path, name, params, query, meta }
        }
    }
}
</script>

<style>
</style>