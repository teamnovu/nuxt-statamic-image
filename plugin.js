import Vue from "vue";
import StatamicImage from "vue-statamic-image";

let statamicGlideApiEndpoint = "<%= options.statamicGlideApiEndpoint %>";

if (statamicGlideApiEndpoint.length === 0) {
  statamicGlideApiEndpoint = undefined;
}

Vue.use(StatamicImage, {
  statamicBaseUrl: "<%= options.statamicBaseUrl %>",
  statamicGlideApiEndpoint,
});
