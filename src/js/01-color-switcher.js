const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};
let setIntervalId = null;
let startBtnActiv = false;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick(event) {
  if (startBtnActiv) return;
  startBtnActiv = true;
  event.currentTarget.setAttribute('disabled', 'true');
  refs.stopBtn.removeAttribute('disabled');

  setIntervalId = setInterval(() => {
    document.body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
}
function onStopBtnClick(event) {
  refs.startBtn.removeAttribute('disabled');
  event.currentTarget.setAttribute('disabled', 'true');
  clearInterval(setIntervalId);
  startBtnActiv = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
