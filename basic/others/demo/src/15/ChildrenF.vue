<template>
<div class="border2">
    <h3 :style="{ color: theme1.color }">F 节点</h3>
</div>
</template>

<script>
export default {
    components: {},
    inject: {
        theme1: {
            from: "theme",
            default: () => {},
        }
    }
};
</script>

<style>
</style>
