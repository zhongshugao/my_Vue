<template>
      <div>
            <div>dat a& props & computed & methods</div>
            <div class="title">{{myName}}</div>
<!--            默认插槽-->
            <slot></slot>
            <div id="child_view">{{mywidth}}</div>
      </div>


</template>

<script>
    export default {
        name: "my-data-props-computed-methods",
        //data是以函数的形式 不是以对象的形式，
        //当一个组件被定义，data 必须声明为返回一个初始数据对象的函数，
        // 因为组件可能被用来创建多个实例。如果 data 仍然是一个纯粹的对象，
        // 则所有的实例将共享引用同一个数据对象！通过提供 data 函数，
        // 每次创建一个新实例后，我们能够调用 data 函数，
        // 从而返回初始数据的一个全新副本数据对象
        data(){
            return{
                  myName:'让坦克车飞',

            }
        },
        //props用于接收父组件的数据 可以接受简单的数组或者对象

        //1简单写法
        //  props:['mywidth','myheight'],

        //对象语法
        props:{
            mywidth:Number,
            myheight:Number,
            it_property:{
                color: String,
                opacity:Number,
                //可包含函数返回值
                // validator:function (value) {
                //     return value >= 0
                // }
            }
        },
        mounted() {
            console.log(this.mywidth);
            let childView = document.getElementById('child_view');
            childView.style.width = this.v_width;
            childView.style.height = this.v_height;
            childView.style.backgroundColor = this.it_property.color;
            childView.style.opacity = this.it_property.opacity;
            childView.style.margin = '0 auto';
        },

        //computedd
        computed:{
            //只读模式
            v_width(){
                return this.mywidth + 'px';
            },
            v_height(){
                return this.myheight + 'px';
            },

            //读取模式
            // v_readandwrite:{
            //     get:function () {
            //         return this.mywidth + 'px';
            //     },
            //     set:function (add) {
            //         this.myName = this.myName + add
            //     }
            // }
        },
    }
</script>

<style scoped>

</style>
