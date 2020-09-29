function Timer() {
  function createSeconds(seconds) {
    const date = new Date(seconds * 1000);

    return date.toLocaleTimeString("pt-br", {
      hour12: false,
      timeZone: "UTC"
    });
  }

  const paragraph = document.querySelector("p");
  const title = document.querySelector(".title");

  let seconds = 0;
  let timer;

  document.addEventListener("click", function (event) {
    const element = event.target;

    if (element.classList.contains("iniciar")) {
      clearInterval(timer);

      paragraph.style.color = "green";
      title.style.color = "green";

      timer = setInterval(function () {
        paragraph.innerText = createSeconds(seconds);
        seconds++;
      }, 1000);
    }
    if (element.classList.contains("pausar")) {
      clearInterval(timer);
      paragraph.style.color = "red";
      title.style.color = "red";
    }
    if (element.classList.contains("zerar")) {
      clearInterval(timer);
      seconds = 0;
      paragraph.style.color = "black";
      title.style.color = "black";
      paragraph.innerText = "00:00:00";
    }
  });
}

Timer();
