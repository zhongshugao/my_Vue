<template>
      <div class="mian">
            实例property
            <select v-model="selectItem">
                  <option :value="item.name" v-for="item in list">{{item.name}}</option>
            </select>
            <textarea v-model="title" rows="10"></textarea>
            <div>{{title}}</div>
      </div>

</template>

<script>
    export default {
        name: "my-property",
        data(){
            return{
                  title:'property',
                list:[
                    {id:'1',name:'我'},
                    {id:'2',name:'你'},
                    {id:'3',name:'他'},
                ],
                selectItem:'',
            }
        },
        autoproperty:'自定义property',
        props:['myName','Sex'],
        methods:{
          myclicekd(){

          }
        },
        mounted() {
            console.log(this.$el);
            console.log(this.$options.autoproperty);
            console.log(this.$parent);
            console.log(this.$root);
            console.log(this.$children);
            console.log(this.$props);
            console.log(this.$data);
            console.log(this.$refs);
            console.log(this.$listeners);
        }

    }
</script>

<style scoped>

</style>
