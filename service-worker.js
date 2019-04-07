console.log('Hello from service-worker.js');

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  
  
  workbox.routing.registerRoute(
	  new RegExp('.*\.js'),
	  new workbox.strategies.NetworkFirst()
	);
  
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}