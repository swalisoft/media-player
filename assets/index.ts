import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/ads/index'

const video =document.querySelector('video');

const player = new MediaPlayer({element:video, plugins:[new AutoPlay(), new AutoPause(), new Ads()]});


const playPause: HTMLElement =document.getElementById('playPause');
const mute:HTMLElement =document.getElementById('mute');


playPause.onclick = () =>{
    player.togglePlay()
}

mute.onclick = () =>{
    player.toggleMute()
}


if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(err =>console.log(err.messager))
}
