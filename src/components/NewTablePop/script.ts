export default {
  name: "Modal",
  data() {
    return {
      showModal: false,
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
  },
};
