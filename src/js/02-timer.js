import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const refs = {
  dateInput: document.querySelector('#datetime-picker'),
  timerStartBtn: document.querySelector('[data-btn="start"]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let timerStopBtnRef = {};
let userSlectedTime = 0;
let setIntervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() - Date.now() > 0) {
      refs.timerStartBtn.removeAttribute('disabled');
      userSlectedTime = selectedDates[0].getTime();
    } else {
      refs.timerStartBtn.setAttribute('disabled', 'true');
      Notify.failure('Please choose a date in the future');
    }
  },
};

flatpickr(refs.dateInput, options);

refs.timerStartBtn.addEventListener('click', onStartTimerBtnClick);

function onStartTimerBtnClick(event) {
  event.target.textContent = 'Stop';
  event.target.dataset.btn = 'stop';
  timerStopBtnRef = document.querySelector('[data-btn="stop"]');
  timerStopBtnRef.addEventListener('click', onStopTimerBtnClick);
  Notify.success('Timer started!');
  setIntervalId = setInterval(() => {
    const timeLeftMs = userSlectedTime - Date.now();
    if (timeLeftMs < 0) {
      onStopTimerBtnClick(event);
      return;
    }
    const formattedRemainingTime = convertMs(timeLeftMs);
    addLeadingZero(formattedRemainingTime);
  }, 1000);
  refs.timerStartBtn.removeEventListener('click', onStartTimerBtnClick);
}
function onStopTimerBtnClick(event) {
  refs.timerStartBtn.addEventListener('click', onStartTimerBtnClick);
  Notify.success('Timer stopped!');
  event.target.textContent = 'Start';
  event.target.dataset.btn = 'start';
  clearInterval(setIntervalId);
  timerStopBtnRef.removeEventListener('click', onStopTimerBtnClick);
}

function addLeadingZero({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${String(days).padStart(2, '0')}`;
  refs.hours.textContent = `${String(hours).padStart(2, '0')}`;
  refs.minutes.textContent = `${String(minutes).padStart(2, '0')}`;
  refs.seconds.textContent = `${String(seconds).padStart(2, '0')}`;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
