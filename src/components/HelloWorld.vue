<template>
  <div class="hello">
        <input v-myactive="'abc'">
        <ul>
              <li>
                    <router-link to="Mywatch">watch监听</router-link>
              </li>
              <li>
                    <router-link to="Mydata">data&props&computed*methods</router-link>
              </li>
              <li>
                    <router-link to="Mylife">生命周期钩子</router-link>
              </li>
              <li>
                    <router-link to="MymixinsAndextend">mixins混入</router-link>
              </li>
              <li>
                    <router-link to="MyprovideAndinject">provide/inject</router-link>
              </li>
              <li>
                    <router-link to="Myproperty">实例property</router-link>
              </li>
              <li>
                    <router-link to="MyOnEmit">实例方法/事件</router-link>
              </li>
              <li>
                    <router-link to="MyInstruction">指令</router-link>
              </li>
              <li>
                    <router-link to="MyTransition">transition过度效果</router-link>
              </li>
        </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
        data() {
            return{
                mydata:1,
            }
        }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
