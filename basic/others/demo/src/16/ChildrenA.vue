<template>
<div class="border">
    <h1>A 节点</h1>
    <button @click="() => getEH3Ref()">获取 E h3 Ref</button>
    <ChildrenB />
    <ChildrenC />
    <ChildrenD />
</div>
</template>

<script>
import Vue from "vue";
import ChildrenB from "./ChildrenB";
import ChildrenC from "./ChildrenC";
import ChildrenD from "./ChildrenD";

export default {
    components: {
        ChildrenB,
        ChildrenC,
        ChildrenD,
    },
    methods: {
        getEH3Ref(color) {
            console.log(this.childrenE);
        },
    },
    provide() {
        return {
            setChildrenRef: (name, ref) => {
                this[name] = ref;
            },
            getChildrenRef: (name) => {
                return this[name];
            },
            getRef: () => {
                return this;
            }
        };
    }
};
</script>

<style>
</style>
