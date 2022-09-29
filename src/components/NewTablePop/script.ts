import axios from "axios";

export default {
  name: "NewTablePop",
  data() {
    return {
      showModal: false,
      data: {
        name: "",
        type: "",
        latitude: "",
        longitude: "",
        city: "",
        state: "",
        country: "",
      },
    };
  },

  mounted() {
    (this as any).showModal = (this as any).showModalProp;
  },

  props: {
    showModalProp: Boolean,
  },

  methods: {
    changeShowModal() {
      (this as any).showModal = !(this as any).showModal;
    },
    async save() {
      const { data } = this as any;

      await axios.post("http://localhost:3000/save", data);
      (this as any).showModal = false;
      (this as any).$router.go((this as any).$router.currentRoute);
    },
  },
};
