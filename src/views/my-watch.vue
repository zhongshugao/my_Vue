<template>
      <div>
            <div>watch监听</div>
            <hr></hr>
            <p><input v-model="p1">{{value}}</p>
            <p><input v-model="pdic.p2">{{value}}</p>
            <p><input v-model="child.title">{{childTitle}}</p>
      </div>

</template>

<script>
    export default {
        name: "my-watch",
        data(){
            return{
                value:'',
                childTitle:'',
                p1:'',
                pdic:{p2:'1'},
                child:{
                    title:'监听',
                    id:'123',
                }
            }
        },
        watch:{
            //第一种：简单的监听p1值的改变修改value的值
            // p1(val){
            //     this.value = val;
            // },
            p1:function(val,odlval){
                this.value = val;
                console.log(val + '-----' + odlval);
            },


            /*******************/
            //第二种：监听对象,不直接监听对象，可以用computed进行转化后监听
            divValue(val){
                this.value = val;
            },

            /*******************/
            //第三种:对象的深度监听，数组不需要深度监听， 只监听对象的一个属性的时候 可以用'child.title'的形式,
            // 'child.title':function (Val) {
            //     this.childTitle = Val;
            // },
            child:{
                handler:function (val,oldVal) {
                    console.log(val + '-----' + oldVal);
                    this.childTitle = val.title;
                },
                deep:true, //深度监听deep：true
                immediate:true,//监听立即执行 false时不改变属性值 不执行操作，
            }
        },

        computed:{
            divValue(){
                return this.pdic.p2;
            }
        }
    }
</script>

<style scoped>

</style>
