<template>
<div>
    <p>Reversed Message1: "{{ reversedMessage1 }}"</p>
    <p>Reversed Message2: "{{ reversedMessage2() }}"</p>
    <p>Current Time: {{ now }}</p>
    <button @click="() => $forceUpdate()">forceUpdate</button>
    <br />
    <input v-model="message" />
</div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello World'
        }
    },
    computed: {
        reversedMessage1() {
            console.log('执行reversedMessage1');
            return this.message.split("").reverse().join("");
        },
        now() {
            return Date.now();
        }
    },
    methods: {
        reversedMessage2() {
            console.log('执行reversedMessage2');
            return this.message.split("").reverse().join("");
        }
    },
};
</script>

<style>
</style>
