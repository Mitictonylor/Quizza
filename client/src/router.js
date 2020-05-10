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
import HallOfFame from '@/views/HallOfFame'

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
      //localhost 8080
      path: '/newgame',
//name we give to this path
      name:'newgame',
//which component to render
      component: NewGame,
      props: true
    },
    {
      //localhost 8080
      path: '/classic',
//name we give to this path
      name:'classic',
//which component to render
      component: Classic,
      props: true
    },
    {
      //localhost 8080
      path: '/seek',
//name we give to this path
      name:'seek',
//which component to render
      component: Seek,
      props: true
    },
    {
      //localhost 8080
      path: '/mental',
//name we give to this path
      name:'mental',
//which component to render
      component: Mental,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      //allow to pass props
      props: true
    },
    {
      path: '/halloffame',
      name: 'halloffame',
      component: HallOfFame,
      //allow to pass props
      props: true
    }

  ]
});
//export the router object in line 9
export default router;
