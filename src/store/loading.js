import { defineStore } from "pinia";
import { reactive, h } from "vue";
import { ElNotification } from "element-plus";
export const useLoadingStore = defineStore("loading", () => {
    const store = reactive({
        loadingTypes: [],
    });
    function addLoading(type) {
        if (!store.loadingTypes?.includes(type)) {
            store.loadingTypes.push(type);
        }
    }
    function removeLoading(type) {
        if (store.loadingTypes?.includes(type)) {
            store.loadingTypes = store.loadingTypes?.filter((loading) => loading !== type);
        }
    }
    function isLoadingType(type) {
        return store.loadingTypes?.includes(type);
    }
    function priceFormatter(price) {
        let unformattedValue = price.replace(/\s/g, "");
        return unformattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    function showMessage(title, message, type) {
        type = type || "success";
        ElNotification({
            title,
            message: h('i', { style: type == 'success' ? 'color: #E2C299' : type == 'warning' ? '' : 'color: #E86068' }, message),
        });
        // ElMessage({
        //   message,
        //   type: type || "success",
        // });
    }
    return {
        store,
        addLoading,
        removeLoading,
        isLoadingType,
        priceFormatter,
        showMessage,
    };
});
//# sourceMappingURL=loading.js.map