import { createRouter, createWebHistory } from 'vue-router'

//individual import
import LoginPage from '../views/users/individual/LoginPage.vue'
import CreateAccount from '../views/users/individual/CreateAccount.vue'
import About from '../views/documents/About.vue'
import PrivacyPolicy from '../views/documents/PrivacyPolicy.vue'
import HomeIndi from '../views/users/individual/HomePage.vue'
import SettingsIndi from '../views/users/individual/Settings.vue'
import GenerateQR from '../views/users/individual/GenerateQR.vue'



//estab import
import LoginPageEstab from '../views/users/estab/LoginPage.vue'
import CreateAccountEstab from '../views/users/estab/CreateAccount.vue'
import HomePageEstab from '../views/users/estab/HomePage.vue'
import Scanner from '../views/users/estab/Scanner.vue'
import InsertScannedUser from '../views/users/estab/InsertScannedUser.vue'
import Settings from '../views/users/estab/Settings.vue'

//admin import
import LoginPageAdmin from '../views/users/admin/LoginPage.vue'
import AdminHome from '../views/users/admin/AdminHome.vue'
import CheckApplication from '../views/users/admin/CheckApplication.vue'

import {getAuth} from 'firebase/auth'
import app from '../firebase/auth-individual/firebase'

const auth = getAuth(app);

const routes = [

  {
    path: '/individual-home/:phoneId',
    name: 'HomeIndi',
    component: HomeIndi,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/individual-settings/:phoneId',
    name: 'SettingsIndi',
    component: SettingsIndi,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/individual-generate-qr/:phoneId',
    name: 'GenerateQR',
    component: GenerateQR,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/individual-login',
    name: 'LoginPage',
    component: LoginPage
  },

  {
    path: '/individual-create-account',
    name: 'CreateAccount',
    component: CreateAccount,
  },
  {
    path: '/',
    name: 'About',
    component: About
  },

  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },

  {
    path: '/estab-create-account',
    name: 'CreateAccountEstab',
    component: CreateAccountEstab,
  },
  {
    path: '/estab-login',
    name: 'LoginPageEstab',
    component: LoginPageEstab
  },
  {
    path: '/estab-home/:estabId',
    name: 'HomePageEstab',
    component: HomePageEstab,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/estab-scanner/:estabId',
    name: 'Scanner',
    component: Scanner,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/estab-settings/:estabId',
    name: 'Settings',
    component: Settings,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/estab-insert-scanned-data/:estabId/:resultId',
    name: 'InsertScannedUser',
    component: InsertScannedUser,
  },

  {
    path: '/admin-login',
    name: 'LoginPageAdmin',
    component: LoginPageAdmin
  },
  {
    path: '/admin-home',
    name: 'AdminHome',
    component: AdminHome
  },

   {
    path: '/admin-check/:applicationID',
    name: 'CheckApplication',
    component: CheckApplication
  },
  
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path === '/individual-login' && auth.currentUser){
    next('/')
    return;
  }
  if(to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser){
    next('/individual-login');
    return;
  }
  next();
})
export default router
