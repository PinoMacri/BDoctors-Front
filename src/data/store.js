import { reactive } from "vue";
export const store = reactive({
  isRegistered: false,
  name: "",
  address: "",
  specialization: "",
  vote: "",
  city: "",
});
