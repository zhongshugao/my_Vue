const extendA ={
    data(){
        return {
            title:'extend扩展的title',
        }
    },
    methods:{
        extendMethod(){
            console.log('extend扩展的方法');
        }
    },
    created() {
        console.log('extend扩展的生命周期钩子')
    }
}
export default extendA

