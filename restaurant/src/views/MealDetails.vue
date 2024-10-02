<template>
  <div class="meal bg-gray-100 rounded-t-xl">
    <div class="container mx-auto">
      <h2
        class="text-2xl font-semibold mb-5 bg-yellow-500 px-3 py-2 text-white"
      >
        {{ meal.strMeal }}
      </h2>
      <img class="w-full" :src="meal.strMealThumb" :alt="meal.steMeal" />
      <div
        class="descrption grid grid-cols-3 mt-5 bg-yellow-500 px-3 py-2 text-white rounded-full"
      >
        <div>
          <strong class="font-semibold text-xl px-2">Category:</strong
          >{{ meal.strCategory }}
        </div>
        <div>
          <strong class="font-semibold text-xl px-2">Area:</strong
          >{{ meal.strArea }}
        </div>
        <div>
          <strong class="font-semibold text-xl px-2">tags:</strong
          >{{ meal.strTags }}
        </div>
      </div>
      <div class="grid grid-cols-2">
        <div class="Ingredient px-5 mt-5 font-semibold text-2xl">
          Ingredient
          <ul class="text-sm">
            <li class="pb-2" v-for="(el, index) in new Array(20)">
              <div v-if="meal[`strIngredient${index + 1}`]">
                {{ index + 1 }} . {{ meal[`strIngredient${index + 1}`] }}
              </div>
            </li>
          </ul>
        </div>
        <div class="Measure px-5 mt-5 font-semibold text-2xl">
          Measure

          <ul class="text-sm">
            <li class="pb-2" v-for="(el, index) in new Array(20)">
              <div v-if="meal[`strIngredient${index + 1}`]">
                {{ index + 1 }} . {{ meal[`strMeasure${index + 1}`] }}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="view flex justify-between mt-5">
        <a
          class="border-2 border-red-500 px-4 py-2 bg-red-800 text-white hover:bg-white hover:text-red-700 transition-all"
          :href="meal.strYoutube"
          target="_blank"
          >YouTube</a
        >
        <router-link
          to="/"
          class="border-2 border-red-600 px-4 py-2 text-black hover:bg-white hover:text-red-700 transition-all"
          >View</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "MealDetails",
  computed: {
    ...mapState(["meal"]),
  },
  created() {
    return this.$store.dispatch("getMealById", this.$route.params.id);
  },
};
</script>
