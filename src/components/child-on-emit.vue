<template>
      <div>
            我是on-emit子组件
            <button @click="clickforT1">点击监听事件</button>
            <button @click="clickforT2">取消监听</button>
      </div>

</template>

<script>
    export default {
        name: "child-on-emit",
        data(){
            return{
                childdata:{name:'jinyu',age:'1'}
            }
        },

        // mounted() {
        //     this.$emit('childTest',this.childdata);
        // },
        methods:{
            clickforT1(){
                this.$emit('childTest',this.childdata);
            },
            clickforT2(){
                this.$off('childTest');
            },
        }
    }
</script>

<style scoped>

</style>
