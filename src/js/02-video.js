import Player from '@vimeo/player';
const _ = require('lodash');

const player = new Player('vimeo-player');

player.on('timeupdate', _.throttle(() => {
    player.getCurrentTime().then(function (seconds) {
        localStorage.setItem("videoplayer-current-time", seconds);
}) 
}, 1000));

window.addEventListener('load', pageOpened, false);

function pageOpened() {
    const lastPlayTime = localStorage.getItem("videoplayer-current-time");
    player.setCurrentTime(lastPlayTime);
}
