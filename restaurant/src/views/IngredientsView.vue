<template>
  <div class="items container mx-auto">
    <div class="meals grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
      <div
        class="meal bg-yellow-600 rounded-t-xl shadow-xl hover:scale-[1.1] transition-all"
        v-for="mo in IngradientMeal"
        :key="mo.idMeal"
      >
        <h3 class="font-bold text-white pl-2 mb-2">{{ mo.strMeal }}</h3>
        <router-link :to="{ name: 'MealDeatails', params: { id: mo.idMeal } }">
          <img class="rounded-t-xl" :src="mo.strMealThumb" alt="strMeal"
        /></router-link>
      </div>
    </div>
  </div>
  <div
    class="flex text-white bg-red-500 justify-center rounded-full container mx-auto"
    v-if="!IngradientMeal"
  >
    No Meals Found !
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "IngradientMeal",
  computed: {
    ...mapState(["IngradientMeal"]),
  },
  created() {
    return this.$store.dispatch("getMealByIngradient", this.$route.params.id);
  },
};
</script>
