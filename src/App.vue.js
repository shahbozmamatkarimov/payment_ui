import { reactive, onBeforeMount } from "vue";
import { usePaymentStore, useLoadingStore } from "./store";
import { defineComponent } from "vue";
import LoadingUI from "./components/Loading.vue";
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const store = reactive({
        visible: false,
    });
    const payment_price = [
        "1.000₽",
        "2.000₽",
        "5.000₽",
        "10.000₽",
        "20.000₽",
        "50.000₽",
    ];
    const usePayment = usePaymentStore();
    const useLoading = useLoadingStore();
    function changePaymentType(type) {
        if (usePayment.store.payment_type == type) {
            usePayment.store.payment_visible = !usePayment.store.payment_visible;
        }
        else {
            usePayment.getPaymentMethods("rub");
            usePayment.store.payment_type = type;
            usePayment.store.payment_type_method = 0;
            usePayment.store.payment_visible = true;
        }
    }
    function handlePaymentPrice(e) {
        const input = e.target;
        const cursorPosition = input.selectionStart || 0;
        if (usePayment.store.payment_price?.length &&
            e.inputType == "deleteContentBackward") {
            usePayment.store.payment_price =
                usePayment.store.payment_price.slice(0, cursorPosition) +
                    usePayment.store.payment_price.slice(cursorPosition);
        }
        usePayment.store.payment_price = usePayment.store.payment_price.replace(/[^\d]/g, "");
        if (Number(usePayment.store.payment_price) < 1000) {
            usePayment.store.is_error = "Внимание, минимальная сумма 1.000₽ ";
            if (usePayment.store.payment_price) {
                usePayment.store.payment_price += "₽";
            }
            return;
        }
        usePayment.store.is_error = "";
        usePayment.store.payment_price = usePayment.store.payment_price.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        if (usePayment.store.payment_price) {
            usePayment.store.payment_price += "₽";
        }
    }
    onBeforeMount(() => {
        usePayment.getPaymentTypes();
        usePayment.getPaymentMethods("rub");
    });
    const __VLS_fnComponent = (await import('vue')).defineComponent({});
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
        __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("text-[#212529] pt-10 pb-20 px-5") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("md:text-[36px] text-[18px]") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("opacity-60") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("flex items-center md:text-xl text-sm pt-[30px] pb-[15px]") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("./assets/svg/info.svg"), alt: (""), });
        if (__VLS_ctx.useLoading.isLoadingType('getPaymentTypes')) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-wrap gap-4") }, });
            for (const [i] of __VLS_getVForSourceType((2))) {
                // @ts-ignore
                const __VLS_0 = {}
                    .LoadingUI;
                ({}.LoadingUI);
                __VLS_components.LoadingUI;
                // @ts-ignore
                [LoadingUI,];
                // @ts-ignore
                const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("h-[68px] w-[200px] cardbox") }, }));
                const __VLS_2 = __VLS_1({ ...{ class: ("h-[68px] w-[200px] cardbox") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
                ({}({ ...{ class: ("h-[68px] w-[200px] cardbox") }, }));
                const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
                // @ts-ignore
                [useLoading,];
            }
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("flex flex-wrap gap-4") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                        if (!(!((__VLS_ctx.useLoading.isLoadingType('getPaymentTypes')))))
                            return;
                        __VLS_ctx.changePaymentType('crypto');
                        // @ts-ignore
                        [changePaymentType,];
                    } }, ...{ class: ("relative flex items-center gap-[10px] p-5 cardbox r12 cp") }, ...{ class: ((__VLS_ctx.usePayment.store.payment_type == 'crypto' ? 'selected_card' : '')) }, });
            __VLS_styleScopedClasses = (usePayment.store.payment_type == 'crypto' ? 'selected_card' : '');
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("./assets/svg/crypto.svg"), alt: (""), });
            // @ts-ignore
            [usePayment,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm font-medium") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("recommend text-white full_flex text-[10px] py-0.5 px-[6px] rounded-full absolute top-1.5 right-1.5") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                        if (!(!((__VLS_ctx.useLoading.isLoadingType('getPaymentTypes')))))
                            return;
                        __VLS_ctx.changePaymentType('rub');
                        // @ts-ignore
                        [changePaymentType,];
                    } }, ...{ class: ((__VLS_ctx.usePayment.store.payment_type == 'rub' ? 'selected_card' : '')) }, ...{ class: ("flex items-center gap-[10px] p-5 cardbox r12 cp") }, });
            __VLS_styleScopedClasses = (usePayment.store.payment_type == 'rub' ? 'selected_card' : '');
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("full_flex gap-[10px] border-r border-[#0000001a] pr-5") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("./assets/svg/rub.svg"), alt: (""), });
            // @ts-ignore
            [usePayment,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm font-medium") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("full_flex gap-[10px] pl-3") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("./assets/svg/valyuta.svg"), alt: (""), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm font-medium") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("./assets/svg/arrow.svg"), alt: (""), });
        }
        if (__VLS_ctx.usePayment.store.payment_visible) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ "data-aos": ("zoom-out"), "data-aos-duration": ("1500"), ...{ class: ("flex flex-wrap gap-[15px] mt-6") }, });
            if (__VLS_ctx.usePayment.store.payment_type == 'crypto') {
                for (const [i, index] of __VLS_getVForSourceType((2))) {
                    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                                if (!((__VLS_ctx.usePayment.store.payment_visible)))
                                    return;
                                if (!((__VLS_ctx.usePayment.store.payment_type == 'crypto')))
                                    return;
                                __VLS_ctx.usePayment.store.payment_type_method = index;
                                // @ts-ignore
                                [usePayment, usePayment, usePayment,];
                            } }, ...{ class: ((__VLS_ctx.usePayment.store.payment_type_method == index ? 'selected_card' : '')) }, ...{ class: ("full_flex items-center gap-3 h-[60px] p-5 cardbox r12 cp") }, });
                    __VLS_styleScopedClasses = (usePayment.store.payment_type_method == index ? 'selected_card' : '');
                    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("./assets/svg/rub.svg"), alt: (""), });
                    // @ts-ignore
                    [usePayment,];
                    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm font-medium") }, });
                }
            }
            else {
                for (const [i, index] of __VLS_getVForSourceType((14))) {
                    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                                if (!((__VLS_ctx.usePayment.store.payment_visible)))
                                    return;
                                if (!(!((__VLS_ctx.usePayment.store.payment_type == 'crypto'))))
                                    return;
                                __VLS_ctx.usePayment.store.payment_type_method = index;
                                // @ts-ignore
                                [usePayment,];
                            } }, ...{ class: ((__VLS_ctx.usePayment.store.payment_type_method == index ? 'selected_card' : '')) }, ...{ class: ("full_flex items-center gap-3 h-[60px] p-5 cardbox r12 cp") }, });
                    __VLS_styleScopedClasses = (usePayment.store.payment_type_method == index ? 'selected_card' : '');
                    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("./assets/svg/rub.svg"), alt: (""), });
                    // @ts-ignore
                    [usePayment,];
                    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm font-medium") }, });
                }
            }
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("md:text-xl text-sm pt-[30px]") }, });
        if (__VLS_ctx.useLoading.isLoadingType('getPaymentMethods')) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 max-h-[214px] p-[10px] pt-[15px] -mx-[10px] overflow-y-auto") }, });
            for (const [i] of __VLS_getVForSourceType((30))) {
                // @ts-ignore
                const __VLS_6 = {}
                    .LoadingUI;
                ({}.LoadingUI);
                __VLS_components.LoadingUI;
                // @ts-ignore
                [LoadingUI,];
                // @ts-ignore
                const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("h-[68px] md:w-[220px] cardbox") }, }));
                const __VLS_8 = __VLS_7({ ...{ class: ("h-[68px] md:w-[220px] cardbox") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
                ({}({ ...{ class: ("h-[68px] md:w-[220px] cardbox") }, }));
                const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
                // @ts-ignore
                [useLoading,];
            }
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ "data-aos": ("zoom-in"), "data-aos-duration": ("800"), ...{ class: ("grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 max-h-[214px] p-[10px] pt-[15px] -mx-[10px] overflow-y-auto") }, });
            for (const [i, index] of __VLS_getVForSourceType((30))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                            if (!(!((__VLS_ctx.useLoading.isLoadingType('getPaymentMethods')))))
                                return;
                            __VLS_ctx.usePayment.store.payment_method = index;
                            // @ts-ignore
                            [usePayment,];
                        } }, ...{ class: ("flex items-center gap-3 p-5 cardbox r12 cp md:w-[220px] min-w-fit h-[68px]") }, ...{ class: ((__VLS_ctx.usePayment.store.payment_method == index ? 'selected_card' : '')) }, });
                __VLS_styleScopedClasses = (usePayment.store.payment_method == index ? 'selected_card' : '');
                __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("md:max-w-[48px] md:max-h-[40px] max-w-[36px] max-h-[24px]") }, src: ("./assets/svg/visa.svg"), alt: (""), });
                // @ts-ignore
                [usePayment,];
                __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("space-y-1.5 min-w-fit") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("font-medium") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("text-[13px]") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("opacity-60") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("font-medium") }, });
            }
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.store.visible = !__VLS_ctx.store.visible;
                    // @ts-ignore
                    [store, store,];
                } }, ...{ class: ("full_flex max-w-fit md:text-sm text-xs font-medium pt-[30px] pb-[15px] gap-2.5 cp") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("./assets/svg/warning.svg"), alt: (""), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("duration-500") }, ...{ class: ((__VLS_ctx.store.visible ? 'rotate-180' : '')) }, src: ("./assets/svg/arrow.svg"), alt: (""), });
        __VLS_styleScopedClasses = (store.visible ? 'rotate-180' : '');
        // @ts-ignore
        [store,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm") }, ...{ class: ((__VLS_ctx.store.visible ? '' : 'h-0 overflow-hidden')) }, });
        __VLS_styleScopedClasses = (store.visible ? '' : 'h-0 overflow-hidden');
        __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
        // @ts-ignore
        [store,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("md:text-xl text-sm pt-[30px] pb-[15px]") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onInput: (__VLS_ctx.handlePaymentPrice) }, id: ("current_price"), value: ((__VLS_ctx.usePayment.store.payment_price)), ...{ class: ("border r12 outline-none w-full border-[#0000001a] h-[50px] px-5 pr-12") }, type: ("text"), placeholder: ("Минимальная сумма платежа: 1.000₽"), ...{ class: ((__VLS_ctx.usePayment.store.payment_price
                    ? __VLS_ctx.usePayment.store.is_error
                        ? 'error'
                        : 'success'
                    : '')) }, });
        __VLS_styleScopedClasses = (usePayment.store.payment_price
            ? usePayment.store.is_error
                ? 'error'
                : 'success'
            : '');
        // @ts-ignore
        [usePayment, usePayment, usePayment, handlePaymentPrice,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.usePayment.store.payment_price = '';
                    // @ts-ignore
                    [usePayment,];
                } }, ...{ class: ("absolute right-5 top-0 bottom-0 my-auto cp") }, src: ("./assets/svg/x.svg"), alt: (""), });
        __VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.usePayment.store.payment_price));
        // @ts-ignore
        [usePayment, vShow,];
        if ((__VLS_ctx.usePayment.store.is_error && __VLS_ctx.usePayment.store.payment_price) ||
            __VLS_ctx.usePayment.store.submit_error) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-[#E86068] md:text-sm text-xs") }, });
            (__VLS_ctx.usePayment.store.is_error);
            // @ts-ignore
            [usePayment, usePayment, usePayment, usePayment,];
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ "data-aos": ("zoom-out"), "data-aos-duration": ("800"), ...{ class: ("flex overflow-hidden overflow-x-auto gap-[10px] text-sm font-medium pt-[10px] pb-[30px]") }, });
        for (const [i] of __VLS_getVForSourceType((__VLS_ctx.payment_price))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ onClick: (...[$event]) => {
                        __VLS_ctx.usePayment.store.payment_price = i;
                        // @ts-ignore
                        [usePayment, payment_price,];
                    } }, for: ("current_price"), ...{ class: ((__VLS_ctx.usePayment.store.payment_price == i ? 'selected_card' : '')) }, ...{ class: ("bg-[#2125290A] rounded-lg py-2 px-3 cp") }, });
            __VLS_styleScopedClasses = (usePayment.store.payment_price == i ? 'selected_card' : '');
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("opacity-60") }, });
            (i);
            // @ts-ignore
            [usePayment,];
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.usePayment.setPaymentData) }, "data-aos": ("zoom-in"), "data-aos-duration": ("800"), ...{ class: ((!__VLS_ctx.usePayment.store.payment_price || __VLS_ctx.usePayment.store.is_error
                    ? '!opacity-80'
                    : '')) }, ...{ class: ("full_flex py-5 recommend md:text-xl text-sm h-[60px] text-white r12 w-full") }, });
        __VLS_styleScopedClasses = (!usePayment.store.payment_price || usePayment.store.is_error
            ? '!opacity-80'
            : '');
        // @ts-ignore
        [usePayment, usePayment, usePayment,];
        if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
            __VLS_styleScopedClasses['text-[#212529]'];
            __VLS_styleScopedClasses['pt-10'];
            __VLS_styleScopedClasses['pb-20'];
            __VLS_styleScopedClasses['px-5'];
            __VLS_styleScopedClasses['md:text-[36px]'];
            __VLS_styleScopedClasses['text-[18px]'];
            __VLS_styleScopedClasses['opacity-60'];
            __VLS_styleScopedClasses['flex'];
            __VLS_styleScopedClasses['items-center'];
            __VLS_styleScopedClasses['md:text-xl'];
            __VLS_styleScopedClasses['text-sm'];
            __VLS_styleScopedClasses['pt-[30px]'];
            __VLS_styleScopedClasses['pb-[15px]'];
            __VLS_styleScopedClasses['flex'];
            __VLS_styleScopedClasses['flex-wrap'];
            __VLS_styleScopedClasses['gap-4'];
            __VLS_styleScopedClasses['h-[68px]'];
            __VLS_styleScopedClasses['w-[200px]'];
            __VLS_styleScopedClasses['cardbox'];
            __VLS_styleScopedClasses['flex'];
            __VLS_styleScopedClasses['flex-wrap'];
            __VLS_styleScopedClasses['gap-4'];
            __VLS_styleScopedClasses['relative'];
            __VLS_styleScopedClasses['flex'];
            __VLS_styleScopedClasses['items-center'];
            __VLS_styleScopedClasses['gap-[10px]'];
            __VLS_styleScopedClasses['p-5'];
            __VLS_styleScopedClasses['cardbox'];
            __VLS_styleScopedClasses['r12'];
            __VLS_styleScopedClasses['cp'];
            __VLS_styleScopedClasses['text-sm'];
            __VLS_styleScopedClasses['font-medium'];
            __VLS_styleScopedClasses['recommend'];
            __VLS_styleScopedClasses['text-white'];
            __VLS_styleScopedClasses['full_flex'];
            __VLS_styleScopedClasses['text-[10px]'];
            __VLS_styleScopedClasses['py-0.5'];
            __VLS_styleScopedClasses['px-[6px]'];
            __VLS_styleScopedClasses['rounded-full'];
            __VLS_styleScopedClasses['absolute'];
            __VLS_styleScopedClasses['top-1.5'];
            __VLS_styleScopedClasses['right-1.5'];
            __VLS_styleScopedClasses['flex'];
            __VLS_styleScopedClasses['items-center'];
            __VLS_styleScopedClasses['gap-[10px]'];
            __VLS_styleScopedClasses['p-5'];
            __VLS_styleScopedClasses['cardbox'];
            __VLS_styleScopedClasses['r12'];
            __VLS_styleScopedClasses['cp'];
            __VLS_styleScopedClasses['full_flex'];
            __VLS_styleScopedClasses['gap-[10px]'];
            __VLS_styleScopedClasses['border-r'];
            __VLS_styleScopedClasses['border-[#0000001a]'];
            __VLS_styleScopedClasses['pr-5'];
            __VLS_styleScopedClasses['text-sm'];
            __VLS_styleScopedClasses['font-medium'];
            __VLS_styleScopedClasses['full_flex'];
            __VLS_styleScopedClasses['gap-[10px]'];
            __VLS_styleScopedClasses['pl-3'];
            __VLS_styleScopedClasses['text-sm'];
            __VLS_styleScopedClasses['font-medium'];
            __VLS_styleScopedClasses['flex'];
            __VLS_styleScopedClasses['flex-wrap'];
            __VLS_styleScopedClasses['gap-[15px]'];
            __VLS_styleScopedClasses['mt-6'];
            __VLS_styleScopedClasses['full_flex'];
            __VLS_styleScopedClasses['items-center'];
            __VLS_styleScopedClasses['gap-3'];
            __VLS_styleScopedClasses['h-[60px]'];
            __VLS_styleScopedClasses['p-5'];
            __VLS_styleScopedClasses['cardbox'];
            __VLS_styleScopedClasses['r12'];
            __VLS_styleScopedClasses['cp'];
            __VLS_styleScopedClasses['text-sm'];
            __VLS_styleScopedClasses['font-medium'];
            __VLS_styleScopedClasses['full_flex'];
            __VLS_styleScopedClasses['items-center'];
            __VLS_styleScopedClasses['gap-3'];
            __VLS_styleScopedClasses['h-[60px]'];
            __VLS_styleScopedClasses['p-5'];
            __VLS_styleScopedClasses['cardbox'];
            __VLS_styleScopedClasses['r12'];
            __VLS_styleScopedClasses['cp'];
            __VLS_styleScopedClasses['text-sm'];
            __VLS_styleScopedClasses['font-medium'];
            __VLS_styleScopedClasses['md:text-xl'];
            __VLS_styleScopedClasses['text-sm'];
            __VLS_styleScopedClasses['pt-[30px]'];
            __VLS_styleScopedClasses['grid'];
            __VLS_styleScopedClasses['xl:grid-cols-5'];
            __VLS_styleScopedClasses['lg:grid-cols-4'];
            __VLS_styleScopedClasses['md:grid-cols-3'];
            __VLS_styleScopedClasses['grid-cols-2'];
            __VLS_styleScopedClasses['gap-4'];
            __VLS_styleScopedClasses['max-h-[214px]'];
            __VLS_styleScopedClasses['p-[10px]'];
            __VLS_styleScopedClasses['pt-[15px]'];
            __VLS_styleScopedClasses['-mx-[10px]'];
            __VLS_styleScopedClasses['overflow-y-auto'];
            __VLS_styleScopedClasses['h-[68px]'];
            __VLS_styleScopedClasses['md:w-[220px]'];
            __VLS_styleScopedClasses['cardbox'];
            __VLS_styleScopedClasses['grid'];
            __VLS_styleScopedClasses['xl:grid-cols-5'];
            __VLS_styleScopedClasses['lg:grid-cols-4'];
            __VLS_styleScopedClasses['md:grid-cols-3'];
            __VLS_styleScopedClasses['grid-cols-2'];
            __VLS_styleScopedClasses['gap-4'];
            __VLS_styleScopedClasses['max-h-[214px]'];
            __VLS_styleScopedClasses['p-[10px]'];
            __VLS_styleScopedClasses['pt-[15px]'];
            __VLS_styleScopedClasses['-mx-[10px]'];
            __VLS_styleScopedClasses['overflow-y-auto'];
            __VLS_styleScopedClasses['flex'];
            __VLS_styleScopedClasses['items-center'];
            __VLS_styleScopedClasses['gap-3'];
            __VLS_styleScopedClasses['p-5'];
            __VLS_styleScopedClasses['cardbox'];
            __VLS_styleScopedClasses['r12'];
            __VLS_styleScopedClasses['cp'];
            __VLS_styleScopedClasses['md:w-[220px]'];
            __VLS_styleScopedClasses['min-w-fit'];
            __VLS_styleScopedClasses['h-[68px]'];
            __VLS_styleScopedClasses['md:max-w-[48px]'];
            __VLS_styleScopedClasses['md:max-h-[40px]'];
            __VLS_styleScopedClasses['max-w-[36px]'];
            __VLS_styleScopedClasses['max-h-[24px]'];
            __VLS_styleScopedClasses['space-y-1.5'];
            __VLS_styleScopedClasses['min-w-fit'];
            __VLS_styleScopedClasses['font-medium'];
            __VLS_styleScopedClasses['text-[13px]'];
            __VLS_styleScopedClasses['opacity-60'];
            __VLS_styleScopedClasses['font-medium'];
            __VLS_styleScopedClasses['full_flex'];
            __VLS_styleScopedClasses['max-w-fit'];
            __VLS_styleScopedClasses['md:text-sm'];
            __VLS_styleScopedClasses['text-xs'];
            __VLS_styleScopedClasses['font-medium'];
            __VLS_styleScopedClasses['pt-[30px]'];
            __VLS_styleScopedClasses['pb-[15px]'];
            __VLS_styleScopedClasses['gap-2.5'];
            __VLS_styleScopedClasses['cp'];
            __VLS_styleScopedClasses['duration-500'];
            __VLS_styleScopedClasses['text-sm'];
            __VLS_styleScopedClasses['md:text-xl'];
            __VLS_styleScopedClasses['text-sm'];
            __VLS_styleScopedClasses['pt-[30px]'];
            __VLS_styleScopedClasses['pb-[15px]'];
            __VLS_styleScopedClasses['relative'];
            __VLS_styleScopedClasses['border'];
            __VLS_styleScopedClasses['r12'];
            __VLS_styleScopedClasses['outline-none'];
            __VLS_styleScopedClasses['w-full'];
            __VLS_styleScopedClasses['border-[#0000001a]'];
            __VLS_styleScopedClasses['h-[50px]'];
            __VLS_styleScopedClasses['px-5'];
            __VLS_styleScopedClasses['pr-12'];
            __VLS_styleScopedClasses['absolute'];
            __VLS_styleScopedClasses['right-5'];
            __VLS_styleScopedClasses['top-0'];
            __VLS_styleScopedClasses['bottom-0'];
            __VLS_styleScopedClasses['my-auto'];
            __VLS_styleScopedClasses['cp'];
            __VLS_styleScopedClasses['text-[#E86068]'];
            __VLS_styleScopedClasses['md:text-sm'];
            __VLS_styleScopedClasses['text-xs'];
            __VLS_styleScopedClasses['flex'];
            __VLS_styleScopedClasses['overflow-hidden'];
            __VLS_styleScopedClasses['overflow-x-auto'];
            __VLS_styleScopedClasses['gap-[10px]'];
            __VLS_styleScopedClasses['text-sm'];
            __VLS_styleScopedClasses['font-medium'];
            __VLS_styleScopedClasses['pt-[10px]'];
            __VLS_styleScopedClasses['pb-[30px]'];
            __VLS_styleScopedClasses['bg-[#2125290A]'];
            __VLS_styleScopedClasses['rounded-lg'];
            __VLS_styleScopedClasses['py-2'];
            __VLS_styleScopedClasses['px-3'];
            __VLS_styleScopedClasses['cp'];
            __VLS_styleScopedClasses['opacity-60'];
            __VLS_styleScopedClasses['full_flex'];
            __VLS_styleScopedClasses['py-5'];
            __VLS_styleScopedClasses['recommend'];
            __VLS_styleScopedClasses['md:text-xl'];
            __VLS_styleScopedClasses['text-sm'];
            __VLS_styleScopedClasses['h-[60px]'];
            __VLS_styleScopedClasses['text-white'];
            __VLS_styleScopedClasses['r12'];
            __VLS_styleScopedClasses['w-full'];
        }
        var __VLS_slots;
        return __VLS_slots;
        const __VLS_componentsOption = {
            LoadingUI,
        };
        let __VLS_name;
        let __VLS_defineComponent;
        const __VLS_internalComponent = __VLS_defineComponent({
            setup() {
                return {
                    store: store,
                    payment_price: payment_price,
                    usePayment: usePayment,
                    useLoading: useLoading,
                    changePaymentType: changePaymentType,
                    handlePaymentPrice: handlePaymentPrice,
                    LoadingUI: LoadingUI,
                };
            },
            components: {
                LoadingUI,
            },
        });
    }
    return defineComponent({
        setup() {
            return {};
        },
        components: {
            LoadingUI,
        },
    });
})();
;

//# sourceMappingURL=App.vue.js.map