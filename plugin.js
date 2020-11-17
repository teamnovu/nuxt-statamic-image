import Vue from "vue";
import StatamicImage from "vue-statamic-image";

let options = JSON.parse(`<%= JSON.stringify(options) %>`);
console.log("plugin", options);

Vue.use(StatamicImage, {
  ...options,
});
