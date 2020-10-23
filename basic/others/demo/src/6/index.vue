<template>
<div>
    <p>
        <button @click="handleNameChange">change this.name</button>
        <button @click="handleInfoChange">change this.info</button>
        <button @click="handleListChange">change this.list</button>
    </p>
    <PropsAndData :name="name" :info="info" :list="list"></PropsAndData>
</div>
</template>

<script>
import PropsAndData from '../6/PropsAndData'

export default {
    name: 'index',
    components: {
        PropsAndData
    },
    data() {
        // this.name = name;
        return {
            name: '',
            info: {
                number: undefined
            },
            list: []
        }
    },
    methods: {
        handleNameChange() {
            this.name = 'Vue' + Date.now();
            console.log('this.name 发生了变化', this.name);
        },
        handleInfoChange() {
            this.info.number = 1;
            console.log('this.info 发生了变化', this.info);
        },
        handleListChange() {
            this.list.push(1, 2, 3);
            console.log('this.list 发生了变化', this.list);
        }
    }
}
</script>

<style>

</style>
