import { defineComponent } from "vue";
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const __VLS_props = defineProps({
        l_height: String,
    });
    const __VLS_fnComponent = (await import('vue')).defineComponent({
        props: {
            l_height: String,
        },
    });
    ;
    let __VLS_functionalComponentProps;
    function __VLS_template() {
        let __VLS_ctx;
        /* Components */
        let __VLS_otherComponents;
        let __VLS_own;
        let __VLS_localComponents;
        let __VLS_components;
        let __VLS_styleScopedClasses;
        // CSS variable injection 
        // CSS variable injection end 
        let __VLS_resolvedLocalAndGlobalComponents;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ((`height: ${__VLS_ctx.l_height}`)) }, ...{ class: ("is_loading table_loading h-[60px]") }, });
        // @ts-ignore
        [l_height,];
        if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
            __VLS_styleScopedClasses['is_loading'];
            __VLS_styleScopedClasses['table_loading'];
            __VLS_styleScopedClasses['h-[60px]'];
        }
        var __VLS_slots;
        return __VLS_slots;
        const __VLS_componentsOption = {};
        const __VLS_name = "Loading";
        let __VLS_defineComponent;
        const __VLS_internalComponent = __VLS_defineComponent({
            setup() {
                return {};
            },
            props: {
                l_height: String,
            },
            name: "Loading",
        });
    }
    return defineComponent({
        setup() {
            return {};
        },
        props: {
            l_height: String,
        },
        name: "Loading",
    });
})();
;
//# sourceMappingURL=Loading.vue.js.map