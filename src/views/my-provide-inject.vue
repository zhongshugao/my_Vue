<template>
      <div>
            <div class="main">
                  进阶provide和inject，用于开发高阶插件/组件库
                  这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在其上下游关系成立的时间里始终生效。如果你熟悉 React，这与 React 的上下文特性很相似。
            </div>
            <hr>
            <div>
                  provide是个对象，包含返回对象的函数,provide:{key:value}
                  inject 是个字符串数组 或者对象
            </div>
            <childprovideinject>子组件注入foo</childprovideinject>
            <input v-model="mybar">
            <router-view></router-view>
      </div>


</template>

<script>
      import childProvideInject from './../components/child-provide-inject'
    export default {
        name: "my-provide-inject",
        components:{
          'childprovideinject':childProvideInject
        },

        data(){
            return{
                mybar:'bar',
            }
        },
        provide: {
            foo: 'bar',
        },

    }
</script>

<style scoped>
      .main{
            width: 60%;
            margin:  0 auto;
            text-align: left;
      }

</style>
