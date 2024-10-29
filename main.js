const countDownDate = new Date().setDate(new Date().getDate() + 1);

setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(
    'currentDateTime'
  ).innerHTML = `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}, 1000);
