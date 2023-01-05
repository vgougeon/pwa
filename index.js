if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("https://vgougeon.github.io/pwa/serviceworker.js", {
        scope: "https://vgougeon.github.io/pwa/"
    });
}

const refresh = () => {
     if(navigator.onLine) document.getElementById("onlineStatus").innerHTML = 'ONLINE';
     else document.getElementById("onlineStatus").innerHTML = 'OFFLINE';
}

refresh()
window.addEventListener("online", refresh);
window.addEventListener("offline", refresh);