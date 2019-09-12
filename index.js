export class CountdownTimer {
  constructor({ selector, targetDate, birthDay }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.birthDay = birthDay;
    this.refs = {
      year: document.querySelector(` [data-value="end-years"]`),
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
      const differenceTime = this.targetDate - new Date().getTime(); // або Date.now()
      // різниця між кінцем таймера років і теперішнім роком
      let yearsEnd =
        this.targetDate.getFullYear(differenceTime) -
        new Date().getFullYear(differenceTime);
      // console.log(yearsEnd);

      if (differenceTime >= 0) {
        // формули для часу
        const days = pad(Math.floor(differenceTime / (1000 * 60 * 60 * 24)));
        const hours = pad(
          Math.floor(
            (differenceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          )
        );
        const mins = pad(
          Math.floor((differenceTime % (1000 * 60 * 60)) / (1000 * 60))
        );
        const secs = pad(Math.floor((differenceTime % (1000 * 60)) / 1000));

        // запис чисел часу в HTML
        this.refs.year.textContent = (yearsEnd - 1) + " р).";
        // console.log();
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

const timeBirthday_100 = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jun 23, 2102"),
  birthDay: new Date("Jun 23, 2002")
});
// console.log(timeBirthday_100);

// const timeBirthday_1 = new CountdownTimer({
//   selector: "#timer-2",
//   targetDate: new Date("Jun 14, 2020"),
// });
