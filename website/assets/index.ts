import MediaPlayer from '@sparragus/platzimediaplayer';
import AutoPlay from '@sparragus/platzimediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@sparragus/platzimediaplayer/lib/plugins/AutoPause';
import Ads from '@sparragus/platzimediaplayer/lib/plugins/Ads';

const video = document.querySelector('video')
const button: HTMLElement = document.getElementById('play')
const sonido: HTMLElement = document.getElementById('sonido')
let volume: HTMLElement = document.getElementById('volume')

sonido.onclick = () => player.toggleMute();

const player = new MediaPlayer({ el : video, plugins: [
    new AutoPlay(), 
    new AutoPause(),
    new Ads(),

]});

volume.oninput = (e) => player.changeVolume(e.target as HTMLInputElement)
    
button.onclick = () => player.reproducir()

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js').catch(error => {
//         console.log(error.message)
//     });
// }

function registerServiceWorker(): void {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js')
            .then((registration) =>
                console.log(`Service Worker registration complete, scope: '${registration.scope}'`))
            .catch((error) =>
                console.log(`Service Worker registration failed with error: '${error}'`))
        });
    }
};


registerServiceWorker();
