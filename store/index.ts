import { defineStore } from "pinia";

export default defineStore("main", {
  state: () => ({
    loading: false,
  }),
  actions: {
    setLoading(v: boolean) {
      this.loading = v;
    },
  },
});
