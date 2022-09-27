/* eslint-disable @typescript-eslint/no-explicit-any */
import router from "../../router/";

export default {
  data() {
    return {
      selected: "places",
    };
  },
  created() {
    router.push({
      path: `/customer/places`,
    });
  },
  methods: {
    change(el: any): void {
      const id = el.target.id;

      (this as any).selected = id;

      /* console.log(router.currentRoute.value.params); */
      router.push({
        path: `/customer/${id}`,
      });
    },
  },
};
