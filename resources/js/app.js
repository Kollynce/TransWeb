/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue';

//sweetalert
import Swal from 'sweetalert2';
window.Swal = Swal;
const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});
window.toast = toast;
window.Fire =  new Vue();

import BackToTop from 'vue-backtotop'
Vue.use(BackToTop);

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import { Form, HasError, AlertError } from 'vform'
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)




// let routes = [
//     { path: '/', component: require('./components/home.vue').default },
//     { path: '/about', component: require('./components/about.vue').default },
//     { path: '/company', component: require('./components/company.vue').default },
//     { path: '/careers', component: require('./components/careers.vue').default },
//     { path: '/team', component: require('./components/team.vue').default },
//     { path: '/services', component: require('./components/services.vue').default },
//     { path: '/software', component: require('./components/software.vue').default },
//     { path: '/Web-Design', component: require('./components/WebDesign.vue').default },
//     { path: '/Mobile-App-Development', component: require('./components/mobileApp.vue').default },
//     { path: '/contact', component: require('./components/contact.vue').default },
//     { path: '/portfolio', component: require('./components/portfolio.vue').default },
//     { path: '/referral', component: require('./components/referral.vue').default },
//     { path: '/blog', component: require('./components/blog.vue').default }
// ]


const router = new VueRouter({
  mode: 'history',
  base: '/',
  scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    },
routes: [
  {
    path: '/',
    component: require('./components/home.vue').default,
    meta: {
      title: 'Home Page | Transonline Web',
      metaTags: [
        {
          name: 'description',
          content: 'The home page.'
        },
        {
          property: 'og:description',
          content: 'The home page.'
        }
      ]
    }
  },
  {
    path: '/about',
    component: require('./components/about.vue').default,
    meta: {
      title: 'About Us | Transonline Web',
      metaTags: [
        {
          name: 'description',
          content: 'About page.'
        },
        {
          property: 'og:description',
          content: 'About page.'
        }
      ]
    }
  },
  {
    path: '/services',
    component: require('./components/services.vue').default,
    meta: {
      title: 'Our Services | Transonline Web',
      metaTags: [
        {
          name: 'description',
          content: 'Services page.'
        },
        {
          property: 'og:description',
          content: 'Services page.'
        }
      ]
    }
  },
  {
    path: '/company',
    component: require('./components/company.vue').default,
    meta: {
      title: 'Company | Transonline Web',
      metaTags: [
        {
          name: 'description',
          content: 'About Company page.'
        },
        {
          property: 'og:description',
          content: 'About Company page.'
        }
      ]
    }
  },
  {
    path: '/careers',
    component: require('./components/careers.vue').default,
    meta: {
      title: 'Careers | Transonline Web',
      metaTags: [
        {
          name: 'description',
          content: 'Careers page.'
        },
        {
          property: 'og:description',
          content: 'Careers page.'
        }
      ]
    }
  },
  {
    path: '/team',
    component: require('./components/team.vue').default,
    meta: {
      title: 'Our Team | Transonline Web',
      metaTags: [
        {
          name: 'description',
          content: 'Our Team page.'
        },
        {
          property: 'og:description',
          content: 'AOur Team page.'
        }
      ]
    }
  },
  {
    path: '/software',
    component: require('./components/software.vue').default,
    meta: {
      title: 'Software Development | Transonline Web',
      metaTags: [
        {
          name: 'description',
          content: 'Software development page.'
        },
        {
          property: 'og:description',
          content: 'Software development page.'
        }
      ]
    }
  },
  {
    path: '/portfolio',
    component: require('./components/portfolio.vue').default,
    meta: {
      title: 'Our Portfolio | Transonline Web',
      metaTags: [
        {
          name: 'description',
          content: 'Our portfolio page.'
        },
        {
          property: 'og:description',
          content: 'Our portfolio page.'
        }
      ]
    }
  },
  {
    path: '/contact',
    component: require('./components/contact.vue').default,
    meta: {
      title: 'Contact Us | Transonline Web',
      metaTags: [
        {
          name: 'description',
          content: 'Contact us page.'
        },
        {
          property: 'og:description',
          content: 'Contact us page.'
        }
      ]
    }
  },
  {
    path: '/referral',
    component: require('./components/referral.vue').default,
    meta: {
      title: 'Referral | Transonline Web',
      metaTags: [
        {
          name: 'description',
          content: 'Referral page.'
        },
        {
          property: 'og:description',
          content: 'Referral page.'
        }
      ]
    }
  },
  {
    path: '/blog',
    component: require('./components/blog.vue').default,
    meta: {
      title: 'Blog | Transonline Web',
      metaTags: [
        {
          name: 'description',
          content: 'News page.'
        },
        {
          property: 'og:description',
          content: 'News page.'
        }
      ]
    }
  },
  {
    path: '/Web-Design',
    component: require('./components/WebDesign.vue').default,
    meta: {
      title: 'Website Design and Development | Transonline Web',
      metaTags: [
        {
          name: 'description',
          content: 'Website design.'
        },
        {
          property: 'og:description',
          content: 'Website design.'
        }
      ]
    }
  },
  {
    path: '/Mobile-App-Development',
    component: require('./components/mobileApp.vue').default,
    meta: {
      title: 'Mobile Application Development | Transonline Web',
      metaTags: [
        {
          name: 'description',
          content: 'Mobile Application Development'
        },
        {
          property: 'og:description',
          content: 'Mobile Application Development.'
        }
      ]
    }
  },
  {
    path: '/Web-Portals',
    component: require('./components/WebPortals.vue').default,
    meta: {
      title: 'Web Portals | Transonline Web',
      metaTags: [
        {
          name: 'description',
          content: 'Web Portals'
        },
        {
          property: 'og:description',
          content: 'Web Portals.'
        }
      ]
    }
  },
  {
    path: '/Internet-Of-Things',
    component: require('./components/InternetOfThings.vue').default,
    meta: {
      title: 'Internet Of Things | Transonline Web',
      metaTags: [
        {
          name: 'description',
          content: 'Internet Of Things'
        },
        {
          property: 'og:description',
          content: 'Internet Of Things.'
        }
      ]
    }
  },
  {
    path: '/Web-App-Development',
    component: require('./components/WebApp.vue').default,
    meta: {
      title: 'Web Application Development | Transonline Web',
      metaTags: [
        {
          name: 'description',
          content: 'Web Application Development'
        },
        {
          property: 'og:description',
          content: 'Web Application Development.'
        }
      ]
    }
  },
  {
    path: '/Artificial-Intelligence',
    component: require('./components/ArtificialIntelligence.vue').default,
    meta: {
      title: 'Artificial Intelligence | Transonline Web',
      metaTags: [
        {
          name: 'description',
          content: 'Artificial Intelligence'
        },
        {
          property: 'og:description',
          content: 'Artificial Intelligence.'
        }
      ]
    }
  },
  {
    path: '/Big-Data',
    component: require('./components/BigData.vue').default,
    meta: {
      title: 'Big Data | Transonline Web',
      metaTags: [
        {
          name: 'description',
          content: 'Big Data'
        },
        {
          property: 'og:description',
          content: 'Big Data.'
        }
      ]
    }
  },
  {
    path: '/Search-Engine-Optimization',
    component: require('./components/seo.vue').default,
    meta: {
      title: 'Search Engine Optimization | Transonline Web',
      metaTags: [
        {
          name: 'description',
          content: 'Search Engine Optimization'
        },
        {
          property: 'og:description',
          content: 'Search Engine Optimization.'
        }
      ]
    }
  },
  {
    path: '/baza',
    component: require('./components/portfolio/baza.vue').default,
    meta: {
      title: 'Portfolio | Transonline Web',
      metaTags: [
        {
          name: 'description',
          content: 'Baza - Bursary Application System'
        },
        {
          property: 'og:description',
          content: 'Baza - Bursary Application System.'
        }
      ]
    }
  },
  {
    path: '/research-expert',
    component: require('./components/portfolio/ResearchExpert.vue').default,
    meta: {
      title: 'Portfolio | Transonline Web',
      metaTags: [
        {
          name: 'description',
          content: 'Reserch Expert '
        },
        {
          property: 'og:description',
          content: 'Research Expert.'
        }
      ]
    }
  },
  {
    path: '/keja-digital',
    component: require('./components/portfolio/KejaDigital.vue').default,
    meta: {
      title: 'Portfolio | Transonline Web',
      metaTags: [
        {
          name: 'description',
          content: 'Keja Digital '
        },
        {
          property: 'og:description',
          content: 'Keja Digital.'
        }
      ]
    }
  },
  { path: '*', redirect: '/' }, 
]
})




router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

    if (!nearestWithMeta) return next();

    nearestWithMeta.meta.metaTags.map(tagDef => {
            const tag = document.createElement('meta');

            Object.keys(tagDef).forEach(key => {
                tag.setAttribute(key, tagDef[key]);
            });

            tag.setAttribute('data-vue-router-controlled', '');
            return tag;
            
        })
        .forEach(tag => document.head.appendChild(tag));

    next();
});


// const router = new VueRouter({
//     //mode: 'history',
//     history: true,
//     base: '/',
//     routes,
//     scrollBehavior() {
//         document.getElementById('app').scrollIntoView();
//     }
// });

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: '#app',
//     router
// });

new Vue({
  router,
  // template: ''
})
.$mount('#app');

