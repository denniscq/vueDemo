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
            lastName: "Qiang",
            fullName: "Chen Qiang"
        }
    },
    watch: {
        firstName(val) {
            this.fullName = val + " " + this.lastName;
        },
        lastName(val) {
            this.fullName = this.firstName + " " + val;
        }
    },
};
</script>

<style>
</style>
