<template>
      <div>

      </div>
</template>

<script>
    export default {
        name: "child-provide-inject",
        // inject:['foo'],
        inject:{
            foo:{
                from:'bar',
                default:() =>[1,2,3]
            }
        },
        mounted() {
            this.$nextTick(function () {
                console.log(this.foo[0]);
                //=>bar
            })
        }
    }
</script>
<style scoped>

</style>
