const CACHE_NAME = "version-1";
const urlsToCache = ['index.html', 'offline.html'];
const self = this;

//INSTALL SW
self.addEventListener('install', (event) =>{
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache)=>{
                console.log('Opened cache');

                return cache.addAll(urlsToCache);
            })
    )
});


//LISTEN 
self.addEventListener('fetch', (e) =>{
    e.responWith(
        caches.match(e.request)
            .then(() =>{
                return fetch(e.request)
                .catch(() => caches.match('offline.html'))
            })
    )
});
//ACTIVAR SW
self.addEventListener('activate', (e) =>{
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);
    e.waitUntil(
        caches.keys()
            .then((cachesName => Promise.all(
                cachesName.map((cacheName) => {
                    if(!cacheWhiteList.includes(cacheName)){
                        return caches.delete(cacheName);
                    }
                })
            )))
    )
});