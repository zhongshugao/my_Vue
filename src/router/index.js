import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mywatch from './../views/my-watch'
import Mydata from '@/views/my-data-props-computed-methods'
import Mylife from '@/views/my-life'
import MymixinsAndextend from '@/views/my-mixins-extend'
import MyprovideAndinject from '@/views/my-provide-inject'
import Myproperty from '@/views/my-property'
import MyOnEmit from '@/views/my-on-once-off-emit'
import MyInstruction from '@/views/my-instructions'
import MyTransition from '@/views/my-transition'

Vue.use(Router)

export default new Router({
    mode:'history',
  routes: [
      {
          path:'/',
          redirect:{name: 'HelloWorld'}
      },
     {
         path: '/HelloWorld',
         name: 'HelloWorld',
         component: HelloWorld
     },
     {
         path:'/Mywatch',
         name:'Mywatch',
         component:Mywatch
     },
      {
          path:'/Mydata',
          name:'Mydata',
          component:Mydata
      },
      {
          path:'/Mylife',
          name:'Mylife',
          component:Mylife
      },
      {
          path:'/MymixinsAndextend',
          name:'MymixinsAndextend',
          component:MymixinsAndextend
      },
      {
          path:'/MyprovideAndinject',
          name:'MyprovideAndinject',
          component:MyprovideAndinject,
      },
      {
          path:'/Myproperty',
          name:'Myproperty',
          component:Myproperty
      },
      {
          path:'/MyOnEmit',
          name:'MyOnEmit',
          component:MyOnEmit
      },
      {
          path:'/MyInstruction',
          name:'MyInstruction',
          component:MyInstruction
      },
      {
          path:'/MyTransition',
          name:'MyTransition',
          component:MyTransition
      }

  ]
})
