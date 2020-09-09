<template>
      <div>指令

<!--            v-text接收string类型 {{msg}}-->
            <div v-text="'v-text标签内容'"></div>
            <div v-html="'<div>v-html内容</div>'"></div>
            <div v-for="item in list">
                  <div v-if="item == 1" style="background-color: darkorange">第一项</div>
                  <div v-else-if="item == 2" style="background-color: blueviolet">第二项</div>
                  <div v-else v-show="false" style="background-color: darkorange">其他项</div>
            </div>
            <button v-on:click="myclicked">v-on事件</button>
            <div v-bind:class="divClass">v-bind1</div>
            <div v-bind:style="{fontSize:20 + 'px'}">v-bind2</div>
            <div :class="myclass">v-bind的缩写形式</div>
            <div v-bind:$prop="myprop">通过prop给子组件传值</div>
<!--            number是v-model修饰词 还有修饰词 lazy trim-->
            <p><input v-model.number="myindex">{{myindex}}</p>

<!--            v-slot插槽-->
<!--        第一种默认插槽-->
            <myslot>
                  第一种：默认插槽，子组件<slot></slot>没有名称
            </myslot>
            <hr>
<!--            第二种：具名插槽-->
            <myslot>
                  <template v-slot:header>第二种：
                        <h1>具名插槽名称为header</h1>
                  </template>
                  <template #midden>第二种：（具名插槽缩写）
                        <h1>具名插槽名称为midden</h1>
                  </template>
                  <template v-slot:default>
                        <h2>我是默认default插槽</h2>
                  </template>
            </myslot>

            <hr>
<!--            第三种：作用域插槽-->
            <myslot>
                  <template v-slot:default="slotProps">
                        第三种：通过父组件改变子组件插槽的内容 slptProps名称可以随意取
                        {{slotProps.user.firstName}}
                  </template>
            </myslot>

            <hr>
            <hr>
            <hr>
            <span v-pre>v-pre的内容：不需要表达式，跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译</span>

            <div v-cloak>{{message}}</div>
            <div v-once>对低开销的静态组件使用，效果如my-on-once-off-emit</div>
      </div>

</template>

<script>
    export default {
        name: "my-instructions",
        components:{
            'myslot':() =>import('./../components/myslot')
        },
        data(){
            return{
                list:['1','2','3','4'],
                myindex:1,
                message:'指令的message'
            }
        },
        methods:{
            myclicked(){
                console.log('事件方法')
            }
        }
    }
</script>

<style scoped>
      [v-cloak]{
            display: none;
      }

</style>
