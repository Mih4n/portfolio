(function () {
    try {
        const theme = localStorage.getItem('app-theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const html = document.documentElement;
        if (theme === 'dark' || theme === 'auto' || (!theme && prefersDark)) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    } catch (e) {}
})();