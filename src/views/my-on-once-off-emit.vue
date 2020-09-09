<template>
      <div>
            实例方法/事件
            $on: 接收两个参数：一个是事件名称 一个是事件处理函数function，同时绑定的事件名称可以多个(数组)
            <child_on_emit @childTest="fTest">监听子组件的自定义事件</child_on_emit>
      </div>
</template>

<script>
    import child_on_emit from './../components/child-on-emit'
    export default {
        name: "my-on-once-off-emit",
        components:{
          child_on_emit,
        },
        data(){
            return{
                  msg:{name:'zhong',age:'18'}
            }
        },
        methods:{
            //监听子组件事件方法
            fTest(data){
                console.log('监听子组件的自定义事件' + data.name)
            },
        },
        created(){
            //监听当前实例的自定义test事件,监听事件在定义前
            // this.$on('test',function (vaule) {
            //     console.log('监听父组件本身的事件'+ vaule.name);
            // });
            this.$once('test',function (vaule) {
                console.log('监听父组件本身的事件'+ vaule.name);
            });
        },

        mounted() {
            //自定义事件test
            this.$emit('test',this.msg);
        },
    }
</script>

<style scoped>

</style>
