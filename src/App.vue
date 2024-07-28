<script setup lang="ts">
import { reactive, onBeforeMount } from "vue";

import { usePaymentStore, useLoadingStore } from "./store";
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

function changePaymentType(type: string) {
  if (usePayment.store.payment_type == type) {
    usePayment.store.payment_visible = !usePayment.store.payment_visible;
  } else {
    usePayment.getPaymentMethods("rub");
    usePayment.store.payment_type = type;
    usePayment.store.payment_type_method = 0;
    usePayment.store.payment_visible = true;
  }
}

function handlePaymentPrice(e: any) {
  const input = e.target as HTMLInputElement;
  const cursorPosition = input.selectionStart || 0;
  if (
    usePayment.store.payment_price?.length &&
    e.inputType == "deleteContentBackward"
  ) {
    usePayment.store.payment_price =
      usePayment.store.payment_price.slice(0, cursorPosition) +
      usePayment.store.payment_price.slice(cursorPosition);
  }
  usePayment.store.payment_price = usePayment.store.payment_price.replace(
    /[^\d]/g,
    ""
  );
  if (Number(usePayment.store.payment_price) < 1000) {
    usePayment.store.is_error = "Внимание, минимальная сумма 1.000₽ ";
    if (usePayment.store.payment_price) {
      usePayment.store.payment_price += "₽";
    }
    return;
  }
  usePayment.store.is_error = "";
  usePayment.store.payment_price = usePayment.store.payment_price.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    "."
  );
  if (usePayment.store.payment_price) {
    usePayment.store.payment_price += "₽";
  }
}
onBeforeMount(() => {
  usePayment.getPaymentTypes();
  usePayment.getPaymentMethods("rub");
});
</script>

<script lang="ts">
import { defineComponent } from "vue";
import LoadingUI from "./components/Loading.vue";
export default defineComponent({
  components: {
    LoadingUI,
  },
});
</script>

<template>
  <main>
    <!-- <header></header> -->
    <section class="text-[#212529] pt-10 pb-20 px-5">
      <h1 class="md:text-[36px] text-[18px]">
        <strong>Пополните баланс, </strong>
        <span class="opacity-60">чтобы получить номер для приема смс</span>
      </h1>

      <!-- Выберите валюту оплаты -->

      <p class="flex items-center md:text-xl text-sm pt-[30px] pb-[15px]">
        <span>Выберите валюту оплаты</span>
        <img src="./assets/svg/info.svg" alt="" />
      </p>
      <div
        class="flex flex-wrap gap-4"
        v-if="useLoading.isLoadingType('getPaymentTypes')"
      >
        <LoadingUI v-for="i in 2" class="h-[68px] w-[200px] cardbox" />
      </div>
      <ul v-else class="flex flex-wrap gap-4">
        <li
          @click="changePaymentType('crypto')"
          class="relative flex items-center gap-[10px] p-5 cardbox r12 cp"
          :class="
            usePayment.store.payment_type == 'crypto' ? 'selected_card' : ''
          "
        >
          <img src="./assets/svg/crypto.svg" alt="" />
          <p class="text-sm font-medium">Криптовалюты</p>
          <p
            class="recommend text-white full_flex text-[10px] py-0.5 px-[6px] rounded-full absolute top-1.5 right-1.5"
          >
            Рекомендуем
          </p>
        </li>
        <li
          @click="changePaymentType('rub')"
          :class="usePayment.store.payment_type == 'rub' ? 'selected_card' : ''"
          class="flex items-center gap-[10px] p-5 cardbox r12 cp"
        >
          <div class="full_flex gap-[10px] border-r border-[#0000001a] pr-5">
            <img src="./assets/svg/rub.svg" alt="" />
            <p class="text-sm font-medium">RUB</p>
          </div>
          <div class="full_flex gap-[10px] pl-3">
            <img src="./assets/svg/valyuta.svg" alt="" />
            <p class="text-sm font-medium">Другие валюты</p>
            <img src="./assets/svg/arrow.svg" alt="" />
          </div>
        </li>
      </ul>
      <ul
        data-aos="zoom-out"
        data-aos-duration="1500"
        v-if="usePayment.store.payment_visible"
        class="flex flex-wrap gap-[15px] mt-6"
      >
        <li
          v-if="usePayment.store.payment_type == 'crypto'"
          v-for="(i, index) in 2"
          @click="usePayment.store.payment_type_method = index"
          :class="
            usePayment.store.payment_type_method == index ? 'selected_card' : ''
          "
          class="full_flex items-center gap-3 h-[60px] p-5 cardbox r12 cp"
        >
          <img src="./assets/svg/rub.svg" alt="" />
          <p class="text-sm font-medium">RUB</p>
        </li>
        <li
          v-else
          v-for="(i, index) in 14"
          @click="usePayment.store.payment_type_method = index"
          :class="
            usePayment.store.payment_type_method == index ? 'selected_card' : ''
          "
          class="full_flex items-center gap-3 h-[60px] p-5 cardbox r12 cp"
        >
          <img src="./assets/svg/rub.svg" alt="" />
          <p class="text-sm font-medium">RUB</p>
        </li>
      </ul>
      <p class="md:text-xl text-sm pt-[30px]">Выберите валюту оплаты</p>
      <div
        class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 max-h-[214px] p-[10px] pt-[15px] -mx-[10px] overflow-y-auto"
        v-if="useLoading.isLoadingType('getPaymentMethods')"
      >
        <LoadingUI v-for="i in 30" class="h-[68px] md:w-[220px] cardbox" />
      </div>
      <ul
        v-else
        data-aos="zoom-in"
        data-aos-duration="800"
        class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 max-h-[214px] p-[10px] pt-[15px] -mx-[10px] overflow-y-auto"
      >
        <li
          v-for="(i, index) in 30"
          class="flex items-center gap-3 p-5 cardbox r12 cp md:w-[220px] min-w-fit h-[68px]"
          :class="
            usePayment.store.payment_method == index ? 'selected_card' : ''
          "
          @click="usePayment.store.payment_method = index"
        >
          <img
            class="md:max-w-[48px] md:max-h-[40px] max-w-[36px] max-h-[24px]"
            src="./assets/svg/visa.svg"
            alt=""
          />
          <ul class="space-y-1.5 min-w-fit">
            <li class="font-medium">Картой РФ</li>
            <li class="text-[13px]">
              <span class="opacity-60">Комиссия:</span>
              <span class="font-medium"> 8%</span>
            </li>
          </ul>
        </li>
      </ul>
      <p
        @click="store.visible = !store.visible"
        class="full_flex max-w-fit md:text-sm text-xs font-medium pt-[30px] pb-[15px] gap-2.5 cp"
      >
        <img src="./assets/svg/warning.svg" alt="" />
        <span>Внимание, при нажатии раскрывается информация про страны</span>
        <img
          class="duration-500"
          :class="store.visible ? 'rotate-180' : ''"
          src="./assets/svg/arrow.svg"
          alt=""
        />
      </p>
      <p class="text-sm" :class="store.visible ? '' : 'h-0 overflow-hidden'">
        Зачисление до 6 минут <br />
        <br />
        Эта платежная система не принимает платежи из стран: <br />
        Армения, Австрия, Азербайджан, Бельгия, Болгария, Кипр, Чешская
        Республика, Дания, Эстония, Финляндия, Франция, Грузия, Германия,
        Греция, Венгрия, Исландия, Ирландия, Испания, Италия, Кыргызстан,
        Латвия, Литва, Люксембург, Мальта, Румыния, Сербия и Черногория,
        Словакия, Словения, Швеция, Швейцария, Таджикистан, Турция,
        Туркменистан, Соединенное Королевство, Узбекистан, Австралия, Норвегия,
        Израиль, Португалия, Нидерланды, Саудовская Аравия, Объединенные
        Арабские Эмираты, Сингапур, Новая Зеландия, Хорватия, Польша,
        Бруней-Даруссалам, Перу, Южная Корея, Катар, Египет.
      </p>

      <!-- form -->

      <p class="md:text-xl text-sm pt-[30px] pb-[15px]">
        Укажите сумму платежа
      </p>
      <div>
        <div class="relative">
          <input
            id="current_price"
            @input="handlePaymentPrice"
            v-model="usePayment.store.payment_price"
            class="border r12 outline-none w-full border-[#0000001a] h-[50px] px-5 pr-12"
            type="text"
            placeholder="Минимальная сумма платежа: 1.000₽"
            :class="
              usePayment.store.payment_price
                ? usePayment.store.is_error
                  ? 'error'
                  : 'success'
                : ''
            "
          />
          <img
            v-show="usePayment.store.payment_price"
            @click="usePayment.store.payment_price = ''"
            class="absolute right-5 top-0 bottom-0 my-auto cp"
            src="./assets/svg/x.svg"
            alt=""
          />
        </div>
        <p
          class="text-[#E86068] md:text-sm text-xs"
          v-if="
            (usePayment.store.is_error && usePayment.store.payment_price) ||
            usePayment.store.submit_error
          "
        >
          {{ usePayment.store.is_error }}
        </p>
        <div
          data-aos="zoom-out"
          data-aos-duration="800"
          class="flex overflow-hidden overflow-x-auto gap-[10px] text-sm font-medium pt-[10px] pb-[30px]"
        >
          <label
            for="current_price"
            @click="usePayment.store.payment_price = i"
            v-for="i in payment_price"
            :class="usePayment.store.payment_price == i ? 'selected_card' : ''"
            class="bg-[#2125290A] rounded-lg py-2 px-3 cp"
          >
            <span class="opacity-60">{{ i }}</span>
          </label>
        </div>
      </div>

      <!-- submit button -->

      <button
        data-aos="zoom-in"
        data-aos-duration="800"
        @click="usePayment.setPaymentData"
        :class="
          !usePayment.store.payment_price || usePayment.store.is_error
            ? '!opacity-80'
            : ''
        "
        class="full_flex py-5 recommend md:text-xl text-sm h-[60px] text-white r12 w-full"
      >
        Оплатить
      </button>
    </section>
    <!-- <footer></footer> -->
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
