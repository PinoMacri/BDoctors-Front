import { reactive } from "vue";
export const store = reactive({
  name: "",
  address: "",
  specialization: "",
  vote: "",
  city: "",
  review: [],
  alert: "",
  alertType: "",
});
