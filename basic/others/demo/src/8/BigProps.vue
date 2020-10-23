<template>
<div>
    <br />
    <button @click="handleChange">change name</button>
    <br />
    <!-- {{slotDefault}} -->
    <VNodes :vnodes="slotDefault" />
    <br />
    <VNodes :vnodes="slotTitle" />
    <br />
    <VNodes :vnodes="slotScopeItem({value: 'value'})" />
</div>
</template>

<script>
export default {
    name: 'BigProps',
    components: {
        VNodes: {
            functional: true,
            render: (h, ctx) => {
                console.log(h)
                console.log('--------')
                console.log(ctx)
                return ctx.props.vnodes
            }
        }
    },
    props: {
        name: String,
        onChange: {
            type: Function,
            default: () => {}
        },
        slotDefault: Array,
        slotTitle: Array,
        slotScopeItem: {
            type: Function,
            default: () => {}
        }
    },
    methods: {
        handleChange() {
            this.onChange('Hello World');
        }
    }
}
</script>

<style>

</style>
