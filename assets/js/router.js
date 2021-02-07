import VueRouter from "vue-router";
import Vue from "vue";
import Main from "./views/Main";
import Config from "./views/Config";
import Setup from "./views/Setup";
import SetupSite from "./components/configuration/Site";
import SetupVehicles from "./components/configuration/Vehicles";
import SetupLoadpoints from "./components/configuration/Loadpoints";
import SetupInterfaces from "./components/configuration/Interfaces";
import SetupNotifications from "./components/configuration/Notifications";
import Config2 from "./testing/views/Config";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Main },
  { path: "/config", component: Config },
  {
    path: "/setup",
    component: Setup,
    children: [
      { path: "site", component: SetupSite },
      { path: "vehicles", component: SetupVehicles },
      { path: "loadpoints", component: SetupLoadpoints },
      { path: "interfaces", component: SetupInterfaces },
      { path: "notifications", component: SetupNotifications },
    ],
  },
  { path: "/testing", component: Config2 },
];

export default new VueRouter({
  routes,
  linkExactActiveClass: "active", // Bootstrap <nav>
});
