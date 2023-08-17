function $(something) {
  return document.querySelector(something);
}
let i = 0;
let isCounting = false;
let time = $('#show');
let intervalID = undefined;
let double = function (m) {
  return m < 10 ? `0${m}` : `${m}`;
}
let show = function (t, sh) {
  t.innerHTML = sh + '';
}
let milli = 0;
let showTime = function (n) {
  const hour = parseInt(n / 3600);
  const min = parseInt(n / 60) % 60;
  const sec = parseInt(n) % 60;
  milli ++;
  milli = milli % 10;
  return `${double(hour)}:${double(min)}:${double(sec)}.${milli}`;
}
$('#start').onclick = function () {
  if (isCounting) {
    return
  }
  isCounting = true;
  intervalID = setInterval(function () {
    i += 0.1;
    show(time, showTime(i));
  }, 100);
}
$('#stop').onclick = function () {
  isCounting = false;
  clearInterval(intervalID);
}
$('#reset').onclick = function () {
  isCounting = false;
  clearInterval(intervalID);
  i = 0;
  milli = -1;
  show(time, showTime(i));
}
