<template>
<div>
    <input :value="phoneInfo.phone" type="number" placeholder="phone" @input="handlePhoneChange" />
    <input :value="zipCode" type="number" placeholder="code" @input="handleZipCodeChange" />
</div>
</template>

<script>
export default {
    name: "PersonalInfo",
    model: {
        prop: "phoneInfo", // 默认 value
        event: "change", // 默认 input
    },
    props: {
        phoneInfo: Object,
        zipCode: String,
    },
    methods: {
        handlePhoneChange(e) {
            this.$emit("change", {
                ...this.phoneInfo,
                phone: e.target.value,
            });
        },
        handleZipCodeChange(e) {
            this.$emit("update:zipCode", e.target.value);
        },
    },
};
</script>

<style>
</style>
