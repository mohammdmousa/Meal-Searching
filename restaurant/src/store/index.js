import { data } from "autoprefixer";
import { createStore } from "vuex";
export default createStore({
  state: {
    meals: "",
    meal: "",
    mealsLeter: "",
    listMeals: "",
    IngradientMeal: "",
    randomMeal: "",
  },
  mutations: {
    getMeals(state, meals) {
      state.meals = meals;
      console.log(meals);
      console.log(state.meals);
    },
    mealById(state, meal) {
      state.meal = meal;
      console.log(meal);
    },
    mealsByLeter(state, mealsByLeter) {
      state.mealsLeter = mealsByLeter;
      console.log(mealsByLeter);
    },
    mealList(state, listMeals) {
      state.listMeals = listMeals;
    },
    mealsByIngradient(state, IngradientMeal) {
      state.IngradientMeal = IngradientMeal;
      console.log(IngradientMeal);
    },
    mealRandom(state, randomMeal) {
      state.randomMeal = randomMeal;
      console.log(randomMeal);
    },
  },
  actions: {
    async loadMeals(context, v) {
      await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${v}`)
        .then((response) => response.json())
        .then((data) => {
          context.commit("getMeals", data.meals);
          console.log(data);
        });
    },
    async getMealById(context, v) {
      await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${v}`)
        .then((response) => response.json())
        .then((data) => {
          context.commit("mealById", data.meals[0] || {});
          console.log(data);
        });
    },
    async getMealByLeter(context, v) {
      await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${v}`)
        .then((response) => response.json())
        .then((data) => {
          context.commit("mealsByLeter", data.meals);
          console.log(data.meals);
        });
    },
    async getListMeal(context) {
      await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?i=list",
        token
      )
        .then((response) => response.json())
        .then((data) => {
          context.commit("mealList", data.meals);
          console.log(data.meals);
        });
    },
    async getMealByIngradient(context, value) {
      await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${value}`
      )
        .then((res) => res.json())
        .then((data) => {
          context.commit("mealsByIngradient", data.meals);
          console.log(data.meals);
        });
    },
    async getRandomMeal(context) {
      await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${v}`)
        .then((response) => response.json())
        .then((data) => {
          context.commit("mealRandom", data.meals);
          console.log(data.meals);
        });
    },
  },
});
