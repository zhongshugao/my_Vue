<template>
      <div>
            <button v-show="!isshow" @click="changeview">点击事件</button>
           <child-data v-show="isshow" :mywidth="mywidth" :myheight="myheight" :it_property="it_property">
                 <button @click="changeview">点击事件</button>
           </child-data>

      </div>
</template>

<script>
     import childData from './../components/child-data-props-computed-methods'
    export default {
        name: "my-data-props-computed-methods",
        components:{
            'childData':childData
        },
        data(){
            return{
                isshow:true,
                mywidth:200,
                myheight:200,
                it_property:{
                    color:'green',
                    opacity:0.8,
                }
            }
        },
        methods:{
            changeview(){
                  this.isshow = !this.isshow;
            },
        },
        mounted() {
            this.$nextTick(function () {

                // 通过$parent访问父实例,同样也可以通过$children[0,1,2]数组形式访问子实例
                //不推荐使用此形式实现父子组件通信，组件通信使用props和events
                // alert(this.$children[0].myName);

                //子组件访问父实例
                // alert(this.$parent.mywidth);
            })

        }

    }
</script>

<style scoped>

</style>
