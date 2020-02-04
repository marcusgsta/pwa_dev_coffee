// declare a name for our cache:
const staticDevCoffee = "dev-coffee-site-v1"
// declare what assets to store in the cache
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/coffee.jpg",
]
// to perform cachine, we attach a listener to self
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets)
        })
    )
})
// self is the service worker itself. It enables us to listen to life cycle events and do something in return
// When the install event is fired, we run the callback which gives us access to the event object
// cachine something on the browser can take som time to finish because it's asynchronous
// So, to handle it, we need to use waitUntil() which waits for the action to finish
// Once the cache API is ready, we can run the open() method and create our cache by passing its name as an argument to caches.open(staticDevCoffee)
// Then it returns a promise, which helps us store our assets in the cache with cache.addAll(assets)

// Fetch the assets in our cache
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})

// fetchEvent.request is our array of assets

