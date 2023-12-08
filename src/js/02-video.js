import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');

const KEY_PLAYER = 'videoplayer-current-time';
const player = new Player(iframe);

let throt_fun = throttle(data => {
  localStorage.setItem(KEY_PLAYER, data.seconds);
  console.log(data);
}, 1000);

player.on('timeupdate', function (data) {
  throt_fun(data);
});

if (localStorage.getItem(KEY_PLAYER)) {
  player.setCurrentTime(Number(localStorage.getItem(KEY_PLAYER)));
}
