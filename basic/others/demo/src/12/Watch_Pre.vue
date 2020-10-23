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
            fullName: "Chen Qiang",
        };
    },
    watch: {
        firstName(val) {
            clearInterval(this.firstNameTimeout);
            this.firstNameTimeout = setTimeout(() => {
                this.fullName = val + " " + this.lastName;
            }, 1000);
        },
        lastName(val) {
            clearInterval(this.lastNameTimeout);
            this.lastNameTimeout = setTimeout(() => {
                this.fullName = this.firstName + " " + val;
            }, 1000);
        }
    },
};
</script>

<style>
</style>
