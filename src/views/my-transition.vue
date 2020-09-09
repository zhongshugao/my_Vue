<template>
      <div>
            transition元素作为单个元素/组件的过度效果，
            <button @click="isshow=!isshow">过度效果点击</button>

            <transition name="fade">
                  <div v-show="isshow">
                        fade为定义名，自动生存css过度名，在css里可以用。fade-enter，。fade-enter-active等 默认类名为v
                  </div>
            </transition>

      </div>

</template>

<script>
    export default {
        name: "my-transition",
        data(){
            return{
                isshow:true,
            }
        }
    }
</script>

<style scoped>
      .fade-enter-active {
            transition: all 0.3s ease;
      }
      .fade-leave-active {
            transition: all 0.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
      }
      .fade-enter, .fade-leave-to
            /* .slide-fade-leave-active for below version 2.1.8 */ {
            transform: translateX(100px);
            opacity: 0.1;
      }

</style>
