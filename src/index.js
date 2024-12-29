// 1 Завдання
const timeHour = () => {
  const secondsEl = document.querySelector(".seconds");
  const minutesEl = document.querySelector(".minutes");
  const hoursEl = document.querySelector(".hours");
  const messageEl = document.querySelector(".message");

  let timer = 3600;

  const interval = setInterval(() => {
    timer--;

    if (timer === 0) {
      clearInterval(interval);
      messageEl.textContent = "Таймер завершився";
      messageEl.classList.add("show");

      setTimeout(() => {
        messageEl.classList.remove("show");
      }, 6000);
    }

    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;

    if (timer === 1800) {
      messageEl.textContent = "Залишилось менше половини часу";
      messageEl.classList.add("show");

      setTimeout(() => {
        messageEl.classList.remove("show");
      }, 3000);
    }

    hoursEl.textContent = hours.toString().padStart(2, "0");
    minutesEl.textContent = minutes.toString().padStart(2, "0");
    secondsEl.textContent = seconds.toString().padStart(2, "0");
  }, 10);
};

timeHour();

// 2 Завдання
const timeSeconds = () => {
  const timerEl = document.querySelector(".second-timer");
  const hoursEl = document.querySelector(".second-hours");
  const minutesEl = document.querySelector(".second-minutes");
  const secondsEl = document.querySelector(".second-seconds");
  const millisecondsEl = document.querySelector(".second-milliseconds");
  const startAgainBtn = document.querySelector(".start-again");

  let timer = 30000;
  let interval;

  const startTimer = () => {
    interval = setInterval(() => {
      timer -= 10;

      if (timer === 0) {
        clearInterval(interval);
        millisecondsEl.textContent = "000";
        timerEl.classList.remove("pulse");

        startAgainBtn.style.display = "block";
        return;
      }

      if (timer <= 10000) {
        timerEl.classList.add("pulse");
      }

      const hours = Math.floor(timer / (1000 * 60 * 60));
      const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timer % (1000 * 60)) / 1000);
      const milliseconds = timer % 1000;

      hoursEl.textContent = hours.toString().padStart(2, "0");
      minutesEl.textContent = minutes.toString().padStart(2, "0");
      secondsEl.textContent = seconds.toString().padStart(2, "0");
      millisecondsEl.textContent = milliseconds.toString().padStart(3, "0");
    }, 10);
  };

  startTimer();

  startAgainBtn.addEventListener("click", () => {
    startAgainBtn.style.display = "none";

    timer = 30000;
    startTimer();
  });
};

timeSeconds();
