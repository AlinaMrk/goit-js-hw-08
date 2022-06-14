import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const VIDEO_TIME = 'videoplayer-current-time';
player.on('timeupdate', throttle(timeVideoPlayed, 1000));

function timeVideoPlayed(data) {
    const time = data.seconds;
    localStorage.setItem(VIDEO_TIME, JSON.stringify(time));
}
player
  .setCurrentTime(localStorage.getItem(VIDEO_TIME))
  .then(function (seconds) {
    
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
        default: 
        break;
    }
  });;