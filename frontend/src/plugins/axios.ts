import Vue from "vue";
import axios, { AxiosStatic } from "axios";

Vue.use({
  install() {
    Vue.prototype.axios = axios.create({
      baseURL: process.env.VUE_APP_API_URL
    });
  }
});

declare module "vue/types/vue" {
  interface Vue {
    axios: AxiosStatic;
  }
}
