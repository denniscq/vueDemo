<template>
<div>
    {{ $data }}
    <br />
    <button @click="() => (a += 1)">a+1</button>
</div>
</template>

<script>
export default {
    data() {
        return {
            a: 1,
            b: {
                c: 2,
                d: 3,
            },
            e: {
                f: {
                    g: 4,
                },
            },
            h: [],
        };
    },
    watch: {
        a(val, oldVal) {
            this.b.c += 1;
            console.log("new: %s, old: %s", val, oldVal);
        },
        "b.c"(val, oldVal) {
            this.b.d += 1;
            console.log("new: %s, old: %s", val, oldVal);
        },
        "b.d"(val, oldVal) {
            debugger;
            this.e.f.g += 1;
            console.log("new %s, old: %s", val, oldVal);
        },
        e: {
            handler(val, oldVal) {
                debugger;
                this.h.push("😊");
                console.log("new: %s, old: %s", val, oldVal);
            },
            deep: true,
        },
        h(val, oldVal) {
            debugger;
            console.log("new: %s, old: %s", val, oldVal);
        },
    },
};
</script>

<style>
</style>
