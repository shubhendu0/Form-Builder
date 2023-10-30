export const themeSettings = (mode) => {
    if (mode === "dark") {
        document.documentElement.classList.add('dark');
    } 
    else {
        document.documentElement.classList.remove('dark');
    }
}