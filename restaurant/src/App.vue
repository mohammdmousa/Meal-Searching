<template>
  <headerVue></headerVue>
    <RouterView />
</template>

<script>
import headerVue from "../src/components/globle/headerVue.vue";
export default {
  name: "app",
  components: {
    headerVue,
  },
};
</script>
<style></style>
