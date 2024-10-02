<template>
  <div class="items container mx-auto">
    <div class="meals grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
      <div
        class="meal bg-yellow-600 rounded-t-xl shadow-xl hover:scale-[1.1] transition-all"
        v-for="mo in mealsLeter"
        :key="mo.idMeal"
      >
        <router-link :to="{ name: 'MealDeatails', params: { id: mo.idMeal } }">
          <img class="rounded-t-xl" :src="mo.strMealThumb" alt="strMeal"
        /></router-link>
        <div class="descrption p-5">
          <h3 class="font-bold text-white">{{ mo.strMeal }}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            placeat fuga harum omnis aut pariatur est! Quisquam, fuga! Excepturi
            earum consectetur nobis doloremque totam commodi voluptatum enim ad.
            Quam, quia.
          </p>
          <div class="view flex justify-between mt-5">
            <a
              class="border-2 border-red-500 px-4 py-2 bg-red-800 text-white hover:bg-white hover:text-red-700 transition-all"
              :href="mo.strYoutube"
              target="_blank"
              >YouTube</a
            >
            <router-link
              to="/"
              class="border-2 border-red-600 px-4 py-2 text-white hover:bg-white hover:text-red-700 transition-all"
              >View</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="flex text-white bg-red-500 justify-center rounded-full container mx-auto"
    v-if="!mealsLeter"
  >
    No Meals Found !
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "ListIterm",
  computed: {
    ...mapState(["mealsLeter"]),
  },
  data() {
    return {
      entry: this.$route.params.leter,
    };
  },
  created() {
    this.$store.dispatch("getMealByLeter", this.entry);
  },
  watch: {
    "$route.params.leter": function (newValue, oldValue) {
      this.entry = newValue;
      this.$store.dispatch("getMealByLeter", newValue);
    },
  },
};
</script>
