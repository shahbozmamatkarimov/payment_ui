import { defineStore } from "pinia";
import { reactive } from "vue";
import { useLoadingStore } from "./loading";
import axios from "axios";
// interface loadingStore {
//   loadingTypes: string[];
// }

export const usePaymentStore = defineStore("payment", () => {
  const useLoading = useLoadingStore();

  const store = reactive({
    payment_types: [],
    submit_error: false,
    payment_type: "crypto",
    payment_type_method: 0,
    payment_method: 0,
    payment_visible: false,
    payment_price: "",
    is_error: "",
  });

  function getPaymentTypes() {
    useLoading.addLoading("getPaymentTypes");
    // axios
    //   .get(baseUrl + "/payment_types")
    //   .then((res: any) => {})
    //   .catch((err: any) => {
    //     console.error(err);
    //   });
    setTimeout(() => {
      useLoading.removeLoading("getPaymentTypes");
    }, 1000);
  }

  function getPaymentMethods(type: string) {
    useLoading.addLoading("getPaymentMethods");
    // axios
    //   .get(baseUrl + `/payment_methods/${type}`)
    //   .then((res: any) => {})
    //   .catch((err: any) => {
    //     console.error(err);
    //   });
    setTimeout(() => {
      useLoading.removeLoading("getPaymentMethods");
    }, 1000);
  }

  function setPaymentData() {
    useLoading.addLoading("setPaymentData");
    if (!store.payment_price) {
      store.is_error = "Внимание, минимальная сумма 1.000₽"
      useLoading.showMessage("Оплатить", "Внимание, минимальная сумма 1.000₽", "warning");
      store.submit_error = true;
      return;
    }
    // axios
    //   .post(baseUrl + `/ui/payment/info`)
    //   .then((res: any) => {})
    //   .catch((err: any) => {
    //     console.error(err);
    //   });
    setTimeout(() => {
      useLoading.showMessage("Оплатить", "Выполнено успешно", "success");
    }, 1000);
    setTimeout(() => {
      useLoading.showMessage("Оплатить", "Выполнено успешно", "error");
    }, 1100);
    setTimeout(() => {
      useLoading.showMessage("Оплатить", "Выполнено успешно", "warning");
    }, 1200);
    useLoading.removeLoading("setPaymentData");
  }

  return {
    store,
    getPaymentTypes,
    getPaymentMethods,
    setPaymentData,
  };
});
