import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
//we importei to be available in the routes
import Home from '@/views/Home';
import About from '@/views/About';
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
      path: '/about',
      name: 'about',
      component: About,
      //allow to pass props
      props: true
    }

  ]
});
//export the router object in line 9
export default router
