import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframeRef = document.querySelector('#vimeo-player');
const localPlayer = new Player(iframeRef);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const player = new Player('vimeo-player');

const timeToStart = localStorage.getItem(STORAGE_KEY);
if (timeToStart) {
  player.setCurrentTime(timeToStart);
}

const throttledTimeUpdate = throttle(takeValueSeconds, 1000);

function takeValueSeconds(data) {
  localStorage.setItem(STORAGE_KEY, Number.parseInt(data.seconds));
  // player.setMuted(false);
}

player.on('timeupdate', throttledTimeUpdate);


