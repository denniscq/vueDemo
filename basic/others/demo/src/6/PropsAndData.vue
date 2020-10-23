<template>
<div>
    <p>props.name: {{name}}</p>
    <p>props.info: {{info}}</p>
    <p>props.list: {{list}}</p>
    <p>data.a: {{a}}</p>
</div>
</template>

<script>
export default {
    props: {
        info: Object,
        name: String,
        list: Array,
    },
    data() {
        return {
            a: "hello",
            b: "world",
        };
    },
    updated() {
        console.log("触发PropsAndData updated");
    },
    methods: {
        handleBChange() {
            this.b = "vue" + Date.now();
            console.log("data.b发生了变化，但是并没有触发组件的更新", this.b);
        },
    },
};
</script>

<style>
</style>
