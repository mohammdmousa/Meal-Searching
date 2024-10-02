<template>
  <div class="container mx-auto">
    <router-link
      class=" "
      :to="{ name: 'ingragint', params: { id: ingragint.strIngredient } }"
      v-for="ingragint in listMeals"
      :key="ingragint.idIngredient"
    >
      <div class="box bg-yellow-600 mb-5 p-5 rounded-md hover:scale-[.9] transition-all">
        <h2 class="mb-2 text-2xl font-bold">{{ ingragint.strIngredient }}</h2>
        <div class="text-white">{{ ingragint.strDescription }}</div>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["listMeals"]),
  },
  created() {
    this.$store.dispatch("getListMeal");
  },
};
</script>
