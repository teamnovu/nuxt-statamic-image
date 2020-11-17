import Vue from "vue";
import StatamicImage from "vue-statamic-image";

let options = JSON.parse(`<%= JSON.stringify(options) %>`);

Vue.use(StatamicImage, {
  ...options,
});
