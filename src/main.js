import { createApp } from "vue";
import "./assets/styles/style.css";
import "./assets/styles/tailwind.css";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { createPinia } from "pinia";
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.mount("#app");
AOS.init({
    // Global settings:
    disable: false, // Accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // Name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // Class applied after initialization
    animatedClassName: "aos-animate", // Class applied on animation
    useClassNames: false, // If true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // Disables automatic mutations' detections (advanced)
    debounceDelay: 50, // The delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // The delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // Offset (in px) from the original trigger point
    delay: 0, // Values from 0 to 3000, with step 50ms
    duration: 400, // Values from 0 to 3000, with step 50ms
    easing: "ease", // Default easing for AOS animations
    once: false, // Whether animation should happen only once - while scrolling down
    mirror: false, // Whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // Defines which position of the element regarding to window should trigger the animation
});
//# sourceMappingURL=main.js.map