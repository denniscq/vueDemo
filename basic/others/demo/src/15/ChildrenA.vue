<template>
<div class="border">
    <h1>A 节点</h1>
    <button @click="() => changeColor()">Change Color</button>
    <ChildrenB />
    <ChildrenC />
    <ChildrenD />
</div>
</template>

<script>
import Vue from 'vue';
import ChildrenB from "./ChildrenB";
import ChildrenC from "./ChildrenC";
import ChildrenD from "./ChildrenD";

export default {
    components: {
        ChildrenB,
        ChildrenC,
        ChildrenD
    },
    // data() {
    //     return {
    //         color: "blue"
    //     }
    // },
    // methods: {
    //     changeColor(color) {
    //         if (color) {
    //             this.color = color;
    //         } else {
    //             this.color = this.color === "blue" ? "red" : "blue";
    //         }
    //     }
    // },
    methods: {
        changeColor(color) {
            if (color) {
                this.theme.color = color;
            } else {
                this.theme.color = this.theme.color === "blue" ? "red" : "blue";
            }
        }
    },
    provide() {
        this.theme = Vue.observable({
            color: "blue",
            changeColor: (color) => this.changeColor(color)
        })
        return {
            theme: this.theme
        }
    }
};
</script>

<style>
</style>
