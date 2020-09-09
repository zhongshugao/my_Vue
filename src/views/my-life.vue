<template>
      <div>
            生命周期
            <p><input v-model="num">:{{num}}</p>
            <transition>
                  <keep-alive>
                        <keep-child>组件</keep-child>
                  </keep-alive>
            </transition>

      </div>

</template>

<script>
      import keepaliveChild from './../components/keep-alive-child'
    export default {
        name: "my-life",
        components:{
            'keep-child':keepaliveChild,
        },

        data(){
            return{
                num:'',
            }
        },

        beforeCreate() {
            // 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
            console.log(111111);

        },
        created(){
            //数据，观察 和事件回调完成，el property属性不可用，DOM元素未被渲染
            console.log(222222);
        },
        beforeMount() {
            //在挂载开始之前被调用：相关的 render 函数首次被调用。该钩子在服务器端渲染期间不被调用。
            console.log(33333);
        },
        mounted() {
            //实例挂载完成之后调用，视图基本被渲,如果希望整个试图都渲染完毕，可以在mounted内部使用vm.$nextTick
            console.log(44444);
            this.$nextTick(function () {
                // 只有在呈现整个视图之后才会运行的代码
                console.log(55555);
            })
        },
        beforeUpdate() {
            //数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器
            console.log(66666);
        },
        updated() {
            // 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
            // 然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。

            this.$nextTick(function () {
                // 只有在呈现整个视图之后才会运行的代码
                console.log(88888);
            })
            console.log(77777);
        },
        activated(){
            // 被 keep-alive 缓存的组件激活时调用。
            // 该钩子在服务器端渲染期间不被调用。
            console.log(99999);
        },
        deactivated() {
            //被 keep-alive 缓存的组件停用时调用。
            //该钩子在服务器端渲染期间不被调用。
            console.log(10101010);
        },
        beforeDestroy() {
            //vue实例销毁前，实例仍然可用
            console.log(11-11-11-11);
        },
        destroyed(){
            //vue实例的所有指令解除，所以事件监听也被移除
            console.log(12121212);
        },
        errorCaptured(err, vm, info) {
            //
            console.log('------' + info);
            console.log(13131313);
        }

    }
</script>

<style scoped>

</style>
