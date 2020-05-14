import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
//we importei to be available in the routes
import Home from '@/views/Home';
import About from '@/views/About';
import NewGame from '@/views/NewGame.vue';
import Classic from '@/views/Classic.vue';
import Seek from '@/views/Seek.vue';
import Mental from '@/views/Mental.vue';
import HallOfFame from '@/views/HallOfFame';
import Warning from '@/views/Warning';

//we need to define a roter object, that takes in an object with the routes
const router = new Router({
//to remove the hash that doesnt let u back and forward
  mode: 'history',
  routes:[
    //each route is an object ant take in at least 3 properties{
    {
      //localhost 8080
      path: '',
//name we give to this path
      name:'home',
//which component to render
      component: Home
    },
    {
      path: '/newgame',
      name:'newgame',
      component: NewGame,
      props: true
    },
    {
      path: '/classic',
      name:'classic',
      component: Classic,
      props: true
    },
    {
      path: '/seek',
      name:'seek',
      component: Seek,
      props: true
    },
    {
      path: '/mental',
      name:'mental',
      component: Mental,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      props: true
    },
    {
      path: '/halloffame',
      name: 'halloffame',
      component: HallOfFame,
      props: true
    },
    {
      path: '/warning',
      name:'warning',
      component: Warning,
      props: true
    }
  ]
});
//export the router object in line 9
export default router;
