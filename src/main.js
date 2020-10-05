import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import Routes from "./Routes";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes: Routes,
  mode:"history"
});

// ***CUSTOM DIRECTIVES***
// Vue.directive("rainbow", {
//   bind(el) {
//     el.style.color =
//       "#" + 
//       Math.random()
//         .toString()
//         .slice(2, 8);
//   },
// });

// Vue.directive("theme", {
//   bind(el, binding) {
//     if (binding.value == "wide") {
//       el.style.maxWidth = "1200px";
//     } else if (binding.value == "narrow") {
//       el.style.maxWidth = "560px";
//     }
//     if (binding.arg == "column") {
//       el.style.background = "#ddd";
//       el.style.padding = "20px";
//     }
//   },
// });

// *** FILTERS**
// Vue.filter('to-uppercase', function(value){
//   return value.toUpperCase()
// })

// Vue.filter("snippet", function(value){
//   return value.slice(0,100) + '...';
// })

new Vue({
  render: (h) => h(App),
  router:router
}).$mount("#app");
