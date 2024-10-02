<template>
  <header class="bg-yellow-700 mb-32">
    <div class="container flex mx-auto items-center h-12 text-white shadow-xl">
      <div class="logo w-1/4 font-bold  italic ">MousaIT</div>
      <div class="link w-3/4 flex justify-end gap-x-5 text-slate-400">
        <router-link to="/" class="hover:text-white">Home</router-link>
        <router-link to="leter" class="hover:text-white"
          >Search By leters</router-link
        >
        <router-link to="name" class="hover:text-white"
          >Search By Name</router-link
        >
        <router-link to="/Gradient" class="hover:text-white"
          >Filter By Gradient</router-link
        >
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "headerVue",
};
</script>
