<template>
      <div>
            <div class="mixins_main">
                  mixin混入
                  mixins 选项接收一个混入对象的数组。这些混入对象可以像正常的实例对象一样包含实例选项，这些选项将会被合并到最终的选项中，使用的是和 Vue.extend() 一样的选项合并逻辑。也就是说，如果你的混入包含一个 created 钩子，而创建组件本身也有一个，那么两个函数都会被调用。
                  Mixin 钩子按照传入顺序依次调用，并在调用组件自身的钩子之前被调用。
            </div>
            <hr>
            <div class="extend-main">
                  extend扩展类似于mixins混入，
                  允许声明扩展另一个组件 (可以是一个简单的选项对象或构造函数)，而无需使用 Vue.extend。这主要是为了便于扩展单文件组件。
            </div>
            <hr>
            <div class="mixins_header">{{title}}</div>
            <button @click="getTitle">点击获取title的方法</button>
            <button @click="extendMethod">点击获取extend的方法</button>
      </div>

</template>

<script>
      import mixin from './../myjs/mixin'
      import extendA from './../myjs/extend'
    export default {
        name: "my-mixins-extend",
        mixins:[mixin],
        extends:extendA,
        delimiters: ['${', '}'],
        functional:false,
        data(){
            return{
                // title:'组件title,设置属性之后优先展示组件title',
                myName:'钟书高'
            }
        },
        methods: {
            // getTitle(){
            //     console.log('在组件实例中方法打印的Title'+ '----' + this.title)
            // }
        },
        created() {
            console.log('vue组件实例的生命周期');
        },
        mounted() {
            console.log('vue组件实例mounted钩子函数');
        }

        /*
        * 使用mixins混入,data，methods相同情况下选择vue组件实力例的
        * mixins和组件实例的生命周期都依次调用，mixin生命周期的钩子函数先被调用
        * */
    }
</script>

<style scoped>
      .mixins_main{
            width: 60%;
            margin:  0 auto;
            text-align: left;
      }
      .extend-main{
            width: 60%;
            margin:  0 auto;
            text-align: left;
      }
</style>
