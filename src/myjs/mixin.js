
const mixin = {
    //对mixin扩展
    data(){
        return{
            // title:'mixin的混合title'
        }
    },
    methods:{
        getMyMixin(){
            console.log('获取到mixin的混合方法');
        },
        getTitle(){
            console.log('在混合mixin中方法打印的Title'+ '------' + this.title);
        }
    },
    created() {
           console.log('在mixin中vue的实例属性，方法，生命周期都可以使用');
    },
    mounted() {
        console.log('mixin中mounted钩子函数');
    }
};

//exprot 实例导出 和improt导入相反
export  default mixin;
