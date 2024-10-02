<template>
  <div class="container mx-auto">
    <input
      type="text"
      v-model="entry"
      @change="this.$store.dispatch('loadMeals', this.entry)"
      placeholder="Serach For Meals"
      class="placeholder:italic placeholder:text-slate-400 rounded-full w-full h-8 border-2 border-yellow-600 px-3 py-2 outline-yellow-700 shadow-xl"
    />
    <div class="meals grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
      <div
        class="meal bg-yellow-600 rounded-t-xl shadow-xl hover:scale-[1.1] transition-all"
        v-for="mo in this.$store.state.meals"
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
    <div
      class="flex text-white bg-red-500 justify-center rounded-full container mx-auto"
      v-if="!this.$store.state.meals"
    >
      No Meals Found !
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      entry: "",
    };
  },
  created() {
    return this.$store.dispatch("loadMeals", this.entry);
  },
};
</script>
