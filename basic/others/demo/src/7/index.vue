<template>
<Event :name="name" @change="changeIndex"></Event>
</template>

<script>
import Event from './Event'

export default {
    data() {
        return {
            name: ''
        }
    },
    components: {
        Event
    },
    methods: {
        changeIndex(value) {
            this.name = value;
            console.log('index component getted the value：', this.name);
        }
    }
}
</script>

<style>

</style>
