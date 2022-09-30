import { ref } from "vue";
import type { Header, Item } from "vue3-easy-data-table";
import axios from "axios";

interface Company {
  id: number;
  name: string;
  type: string;
  city: number;
  country: string;
  created: string;
  updated: number;
  owner: string;
  actions: string;
}

export default {
  name: "ListCompanies",
  data() {
    return {
      itemsSelected: ref([]),
      headers: [
        { text: "ID", value: "id", width: 50 }, // set fixed to true
        { text: "NAME", value: "name", width: 180 }, // set fixed to true
        { text: "TYPE", value: "type", width: 80 }, // set fixed to true
        { text: "CITY", value: "city", width: 80 },
        { text: "COUNTRY", value: "country", width: 100 },
        { text: "CREATED AT", value: "created", width: 80 },
        { text: "UPDATED AT", value: "updated", width: 80 },
        { text: "OWNER", value: "owner", width: 80 },
        { text: "ACTIONS", value: "actions", width: 80 },
      ] as Header[],
      items: [] as Item[],
    };
  },
  async created() {
    const { body } = (await axios.get("http://localhost:3000/find")).data;

    (this as any).items = [...(this as any).items, ...body];
  },
  methods: {
    async del() {
      const selected = (this as any).itemsSelected as Company[];
      const object = (this as any).items as Company[];

      if (selected.length == object.length) {
        await axios.delete(`http://localhost:3000/delete-all`);
        return ((this as any).items = []);
      }

      selected.forEach(async (value: any) => {
        const index = object.findIndex(
          (finded: Company) => finded.name == value.name
        );

        await axios.delete(`http://localhost:3000/delete/${object[index].id}`);
        object.splice(index, 1);
      });

      (this as any).items = object;
      (this as any).itemsSelected = ref([]);
    },
  },
};
