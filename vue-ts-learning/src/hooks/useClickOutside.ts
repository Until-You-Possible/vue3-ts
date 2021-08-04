import { ref, onMounted, onUnmounted, Ref } from 'vue';

const  useClickOutSide = (elementRef: Ref<null | HTMLElement>) => {
    const isClickOutside = ref(false);
    const handler = (e: MouseEvent) => {
        if (elementRef.value) {
            isClickOutside.value = !(!elementRef.value.contains(e.target as HTMLElement) && isClickOutside.value);
        }
    }
    onMounted(() => {
        document.addEventListener("click", handler);
    });
    onUnmounted(() => {
        document.addEventListener("click", handler);
    })
    return isClickOutside;
}

export default  useClickOutSide;