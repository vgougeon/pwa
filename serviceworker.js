const urlsToCache = [
    "/pwa/",
    "/pwa/index.js",
    "/pwa/styles.css",
    "/pwa/index.html",
    "/pwa/icon.png",
    "/pwa/icon120.png",
    "/pwa/icon.svg"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("v1")
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener("activate", event => {
    console.log("Service worker activated");
});

self.addEventListener("fetch", (event) => {
    console.log(`Handling fetch event for ${event.request.url}`);

    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                console.log("Found response in cache:", response);
                return response;
            }
            console.log("No response found in cache. About to fetch from network…");

            return fetch(event.request)
                .then(async (response) => {
                    console.log("Response from network is:", response);
                    const cache = await caches.open("v1");
                    cache.put(e.request, response.clone());
                    return response;
                })
        })
    );
});