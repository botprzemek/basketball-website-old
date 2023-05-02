export const animateHeader = () => {
    setTimeout(() => document.querySelector('.pseudo').classList.remove('-translate-x-[100%]'), 500);
    setTimeout(() => {
        document.querySelector('.pseudo').classList.add('-translate-x-[100%]');
        document.querySelector('.header').classList.remove('opacity-0');
    }, 1500);
}