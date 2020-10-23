<template>
<div>
    <!-- <SlotDemo>
        <p>default slot</p>
        <template v-slot:title>
            <p>title slot1</p>
            <p>title slot2</p>
        </template>
        <template v-slot:item="props">
            <p>item slot-scope {{props.value}}</p>
        </template>
    </SlotDemo> -->
    <span>{{name}}</span>
    <BigProps :name="bigPropsName" :on-change="handleBigPropChange" :slot-default="getDefault()" :slot-title="getTitle()" :slot-scope-item="getItem" />
</div>
</template>

<script>
// import SlotDemo from './Slot'
import BigProps from './BigProps'

export default {
    components: {
        // SlotDemo,
        BigProps
    },
    data: () => {
        return {
            name: '',
            type: 'success',
            bigPropsName: 'Hello World'
        }
    },
    methods: {
        handleBigPropChange(val) {
            this.name = val;
        },
        getDefault() {
            return [this.$createElement("p", "default slot")];
        },
        getTitle() {
            return [this.$createElement("p", "title slot1"),
                this.$createElement("p", "title slot2")
            ]
        },
        getItem(props) {
            return [this.$createElement("p", `item slot-scope ${JSON.stringify(props)}`)]
        }
    }
}
</script>

<style>

</style>
