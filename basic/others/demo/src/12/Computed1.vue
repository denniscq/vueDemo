<template>
<div>
    {{ fullName }}
    <div>firstName: <input v-model="firstName" /></div>
    <div>lastName: <input v-model="lastName" /></div>
</div>
</template>

<script>
export default {
    data() {
        return {
            firstName: "Chen",
            lastName: "Qiang"
        }
    },
    computed: {
        fullName() {
            return this.firstName + " " + this.lastName;
        }
    },
    watch: {
        fullName(val, oldVal) {
            console.log("new: %s, old: %s", val, oldVal);
        }
    },
};
</script>

<style>
</style>
