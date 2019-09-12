export class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      day: document.querySelector(`${this.selector} [data-value="days"]`),
      hour: document.querySelector(`${this.selector} [data-value="hours"]`),
      min: document.querySelector(`${this.selector} [data-value="mins"]`),
      sec: document.querySelector(`${this.selector} [data-value="secs"]`)
    };
    // створює кожен раз новий таймер
    this.startTimer();
  }

  startTimer() {
    setInterval(() => {
      // різниця між датою яку ми очікуєм і яка є на даний момент
      const time = this.targetDate - new Date().getTime(); // або Date.now()

      if (time >= 0) {
        // формули для часу
        const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = pad(
          Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

        // запис чисел часу в HTML
        this.refs.day.textContent = days;
        this.refs.hour.textContent = hours;
        this.refs.min.textContent = mins;
        this.refs.sec.textContent = secs;
      } else {
        // зупинка таймера при обнуленні
        clearInterval(this.startTimer);
      }
    }, 1000);
  }
}

// функція для забивання символами '0' пустих місць
export function pad(value) {
  return String(value).padStart(2, "0");
}


