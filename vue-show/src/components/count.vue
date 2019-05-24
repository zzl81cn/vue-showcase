<template>
    <button @click="countPlus">You click {{ count }}</button>
</template>

<script>
    export default {
        name: "count",
        data: function () {
            return {
                count: 0
            }
        },
        methods: {
            countPlus() {
                this.count++
            }
        }
    }
</script>

<style scoped>

</style>