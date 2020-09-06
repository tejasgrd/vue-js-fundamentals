import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/Partinfo.vue';
import BrowsParts from '../parts/BrowseParts.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotBases from '../parts/RobotBases.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import SidebarStandard from '../sidebars/SidebarStandard.vue';
import SidebarBuild from '../sidebars/SidebarBuild.vue';
import ShoppingCart from '../cart/ShoppingCart.vue';

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [{
    name: 'Home',
    path: '/',
    components: {
      default: HomePage,
      sidebar: SidebarStandard,
    },
  },
  {
    path: '/build',
    name: 'Build',
    components: {
      default: RobotBuilder,
      sidebar: SidebarBuild,
    },
  },
  {
    path: '/parts/browse',
    name: 'BrowseParts',
    component: BrowsParts,
    children: [
      {
        name: 'BrowsHeads',
        path: 'heads',
        component: RobotHeads,
      },
      {
        name: 'BrowsBases',
        path: 'bases',
        component: RobotBases,
      },
      {
        name: 'BrowsArms',
        path: 'arms',
        component: RobotArms,
      },
      {
        name: 'BrowsTorsos',
        path: 'torsos',
        component: RobotTorsos,
      },
    ],
  },
  {
    path: '/parts/:routeType/:id',
    name: 'Parts',
    component: PartInfo,
    props: true,
    beforeEnter(to, from, next) {
      const isValidId = Number.isInteger(Number(to.params.id));
      next(isValidId);
    },
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShoppingCart,
  }],
});
