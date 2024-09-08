'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ffe6964a8b2dd4fa88fc47658f67a8da",
"assets/AssetManifest.bin.json": "ab4724751253c77214e4f333b1b8f6d0",
"assets/AssetManifest.json": "202e3a68e8b4de4d083074020be4beed",
"assets/assets/fonts/BaskervvilleSC-Regular.ttf": "c6c34517afd2f53c6f1174e4fc8ed496",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/13reaosns.webp": "0e88ac6bf7879660b509d80952d260da",
"assets/assets/images/allofus.jpg": "e59de2ee5f0c8d1a8c7ed36df49a470d",
"assets/assets/images/annathe.jpg": "7f54bb15d286cac4e33d325cda2c8a10",
"assets/assets/images/belts.jpg": "d08bc643b041f1bbacf5cb82fa5443b6",
"assets/assets/images/bg1.jpg": "dd5924674e157592c6b6aafc084c196f",
"assets/assets/images/bg2.jpg": "443a7493eb64ed1c1dc66eae536443a6",
"assets/assets/images/bg3.jpg": "4040865b68fd039ac54ada6f0a5042c2",
"assets/assets/images/bg4.jpg": "b1551122934a24a9cdc239d1e2648b46",
"assets/assets/images/bg5.jpg": "8981c0df1dab0341484d0232217c37d3",
"assets/assets/images/bhidu.jpg": "05570be87dc78d677e55d5ef10519a78",
"assets/assets/images/car.webp": "965a55e54834c843a423623114792214",
"assets/assets/images/car1.webp": "5d25022577d3eaebb211cec85cd7b688",
"assets/assets/images/car2.webp": "8c694b015eabea8e77a9a3d8b742e55a",
"assets/assets/images/car3.jpg": "0e7c1ac7e79fb3a98b96ddac0030b0be",
"assets/assets/images/car5.jpg": "07385a3b9ff8266552b49b93fc0b92e1",
"assets/assets/images/certificates/cybersecurity%2520Essentials%2520.jpg": "988ece927fb16fb4453526df371fa9e8",
"assets/assets/images/certificates/Flutterdevelopment.jpg": "35eb27b6c6869d71c04dedb05bc4248c",
"assets/assets/images/certificates/Pcap.jpg": "7f177eddf3e3c807d8d6659caae02699",
"assets/assets/images/certificates/switching,routing.jpg": "149815f475c5051c834fe63924e06ce6",
"assets/assets/images/driving-license.png": "56a03c886f15cf01c96c93d7e3f586be",
"assets/assets/images/evening.jpg": "7afb1b4a8f9418b8b3e3fdbac482b3c1",
"assets/assets/images/googles.jpg": "dab10c431d741b2f627b455d0d4691f4",
"assets/assets/images/gradient.jpg": "21041800540a6495e23df49280d9de4b",
"assets/assets/images/halfstar.png": "1045374d5b976d6a5a811d84349108e9",
"assets/assets/images/instaicon.png": "df8aeb89c8bfb339e12834147a1fd55a",
"assets/assets/images/jeans.jpg": "114b6558755d62cae1b63e56c91e06fc",
"assets/assets/images/Kbelts.jpg": "eada9b8172583866abb2aa45399893de",
"assets/assets/images/Kjeans.png": "96979ea5f90855da51e7758e854adaca",
"assets/assets/images/kkkg.jpg": "05bc9d866524ca5e95061c4c01347096",
"assets/assets/images/kotafact.jpg": "1b64a5cd7eb5eb7bbabd9dfcaa9243f9",
"assets/assets/images/Kshirts.png": "ee45ebcd6fcd9ee6d1382a29c919ac67",
"assets/assets/images/Kshoes.jpg": "f0693925a8f6d941d843b4909918b718",
"assets/assets/images/Ksuits.jpg": "ddf01c01db2b4c722106efdcf4cb67c7",
"assets/assets/images/Ktshirts.jpg": "31e0c96e849479a147436a16c9a0534c",
"assets/assets/images/Kwatch.jpg": "f699e017d51290dc55862986c1971758",
"assets/assets/images/lucifer.webp": "8cfa91c4eb961f8de4235c7eefb65e20",
"assets/assets/images/lukachuppi.webp": "4adaf42dbd470243742ba7e23efbc56d",
"assets/assets/images/manfromtoronto.jpg": "654b79345a3ffe73fdb0ceb5a2ef3260",
"assets/assets/images/mh2.jpg": "0ef062ad22f2e4330a28bb7b0350c647",
"assets/assets/images/mh3.webp": "f320fa83a075066414ec709e9ad969cb",
"assets/assets/images/mh4.jpg": "eae2033a93d7a2453e48e4856b30059f",
"assets/assets/images/mike.jpg": "c476a48bb189318b5954aa38b8c273f4",
"assets/assets/images/moneyheist.jpg": "f85e798e551efd6815eee07c1072c9db",
"assets/assets/images/netbg.jpg": "7cabec5b194eacb8176b6d5d802348ee",
"assets/assets/images/netflix.png": "bb7de599d479f0be70c66ac1186310ec",
"assets/assets/images/netflix2.png": "27213a7c8ebcb3538d7f6fc1715076b8",
"assets/assets/images/night.jpg": "396633135edcad7baf8a54decc590e52",
"assets/assets/images/profilePic.png": "e7b8f165257a31ac77836d8697a47934",
"assets/assets/images/profile_new.jpg": "b2c1630e32004fb37c609f67705b64e5",
"assets/assets/images/project.png": "be845ec37244b937e1bcce80445a6582",
"assets/assets/images/rushhour.jpg": "43e1ce245ca4180df6cb2b80fd1f3433",
"assets/assets/images/saral.jpeg": "d27be86cbb6aa93c869f899dfa204d5e",
"assets/assets/images/Shirts.webp": "3dfaaeb233dedc6b9a072590b770c460",
"assets/assets/images/shoes.jpg": "8ba4529072891fb3520cfefab2f8553a",
"assets/assets/images/shoppingbag.png": "4e1bb242d461b7a6adb3049e7012058c",
"assets/assets/images/shoppping.jpg": "0630cda7773885552cb49ead543cbae1",
"assets/assets/images/star.png": "cfc8572ffbc9cce2661687c4b11bc892",
"assets/assets/images/tousers.jpg": "89c7f332a74e6dd475bc65fede59bc28",
"assets/assets/images/tshits.jpg": "1e920d4b4bf6898b7702ce2dbe8d8111",
"assets/assets/images/user.jpg": "4a7b3691dbd49747a8126b445a9af30f",
"assets/assets/images/vision.jpg": "91f8c6c7fe427582d1f6f1d9ff93927a",
"assets/assets/images/watches.webp": "f350096c04bcb2fdbd43d40b159181ca",
"assets/assets/images/Wbelts.jpg": "6059787753ad5cb5e0dc038f9c80d3c0",
"assets/assets/images/weathersunny.jpg": "5fcfa030dcaa7d09cbce193f05e4c965",
"assets/assets/images/Wgoogles.jpg": "85203c9468aed28fc9213b5f1bf7933d",
"assets/assets/images/Wjeans.jpg": "94e3c2fd668a62bda49731778b577593",
"assets/assets/images/Wshirt.jpg": "f3f0c9945665446b4d2ef698fb81db51",
"assets/assets/images/Wshoes.jpg": "f1e20a282355c2faddd684158ba11846",
"assets/assets/images/Wsuits.jpg": "b1b84a74aab594b485a5c570ed49d15d",
"assets/assets/images/Wtshirts.webp": "ba9e6149d0e03976205af8533e87428e",
"assets/assets/images/Wwatch.jpg": "384bf3368b0172c42168b1b279201a55",
"assets/assets/images/yash.jpg": "d080a20815ddc1622dda4d2e4af83af7",
"assets/assets/pdf/cvYash.pdf": "ef2d9982386587f24f195fed4b319300",
"assets/FontManifest.json": "fbb12960e5157a4dfb0ab8d88ceb43d0",
"assets/fonts/MaterialIcons-Regular.otf": "8297b9b4323590d3ca8213af7d8dc64f",
"assets/NOTICES": "d421f2867eabc625ad77e8de160666f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "ca190ef2efe999733f789ddfc79e4038",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "09b358a28721c2cd5a8aa9715db75afb",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2e6ee0527d1acade0fe9ed09075fcb6c",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "f37e7434df0175dc4eb4cb7f23ac993e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "602e62f89df12236f359b2e132ef666a",
"/": "602e62f89df12236f359b2e132ef666a",
"main.dart.js": "1c0e0a5c13b3d70e46c0980160221d0f",
"manifest.json": "452a717921227321b0ac624fac6b7b2d",
"version.json": "40e7b06505e2c3869ae177334fa1b1b4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
