<template>
<div id="app">
    <input type="text" v-model="info" />
    <button @click="handleClick">Add</button>
    <ul>
        <Todoitem v-for="item in list" :key="item">
            <template v-slot:item="result">
                <span :style="{fontSize: '20px', color: result.checked? 'red' : 'pink'}">{{item}}</span>
            </template>
        </Todoitem>
    </ul>
</div>
</template>

<script>
import Todoitem from './components/Todoitem';

export default {
    name: 'App',
    components: {
        Todoitem
    },
    data() {
        return {
            info: '',
            list: []
        }
    },
    methods: {
        handleClick() {
            if (this.info) {
                this.list.push(this.info);
                this.info = ''
            }
        }
    },
}
</script>

<style>
</style>
