if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("https://vgougeon.github.io/pwa/serviceworker.js", {
        scope: "https://vgougeon.github.io/pwa/"
    });
}