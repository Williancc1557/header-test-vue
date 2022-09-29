/* eslint-disable @typescript-eslint/no-explicit-any */
import router from "../../router/";

import NewTablePop from "../NewTablePop/NewTablePop.vue";

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
  components: {
    NewTablePop,
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
    changeShowModal() {
      (this as any).$refs.newTable.changeShowModal();
    },
  },
};
