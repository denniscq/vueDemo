<template>
    <div>
        <router-link to="/chen">go to chen</router-link>
        <br />
        <router-link to="/qiang">go to qiang</router-link>
        <br />
        <router-link to="/user/12">goto /user/12</router-link>
        <br />
        <router-link to="/user/12/profile">go to /user/12/profile</router-link>
        <br />
        <router-link to="/user/12/posts">go to /user/12/posts</router-link>
        <br />
        <router-link to="/others">go to 404</router-link>
        <br />
        <router-link to="/a">go to redirect url</router-link>
        <br />
        <a href="/qiang">go to qiang by a href</a>
        <br />
        <button @click="$router.push('chen')">go to chen</button>
        <p>id: {{ id }}</p>
        <p>{{ routerInfo }}</p>
        <br />
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    props: ['id'],
    computed: {
        routerInfo() {
            const { fullPath, path, name, params, query, meta } = this.$route
            return { fullPath, path, name, params, query, meta}
        }
    }
}
</script>

<style>
</style>