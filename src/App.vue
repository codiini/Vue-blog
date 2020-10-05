<template>
  <div>
    <Header/>
    <router-view />
  </div>
</template>

<script>
// Imports
// import AddBlog from "./components/AddBlog.vue";
// import ShowBlogs from "./components/ShowBlogs.vue";
// import ListBlogs from "./components/ListBlogs";
import Header from "./components/Header";
export default {
  components: {
    // AddBlog,
    // ShowBlogs,
    // ListBlogs,
    Header,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
body {
  margin: 0;
  font-family: "Poppins", sans-serif;
}
</style>
