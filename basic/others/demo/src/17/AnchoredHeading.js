export default {
    props: {
        level: {
            type: Number,
            default: 1
        }
    },
    render: function(h) {
        console.log("--------")
        console.log(this);
        return h("h" + this.level, this.$slots.default);
    }
}