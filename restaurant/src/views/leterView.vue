<template>
  <div
    class="container mx-auto search-two flex gap-x-5 justify-center mt-4 text-yellow-600 font-bold"
  >
    <router-link
      :to="{ name: 'byLeter', params: { leter } }"
      v-for="leter in leters"
      :key="leter"
    >
      {{ leter }}
    </router-link>
    
    <!-- <button @click="getitems">maslcnbls</button> -->
  </div>
  <router-view />
</template>
<script>
export default {
  name: "homePage",
  data() {
    return {
      leters: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
    };
  },
  // methods: {
  //   getitems() {
  //     return this.$store.dispatch("getMealByLeter");
  //   },
  // },
  // created() {
  //   return this.$store.dispatch("getMealByLeter", this.$route.params.leter);
  // },
};
</script>
