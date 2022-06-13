// Loading

window.addEventListener("DOMContentLoaded", () => {
  const loading = document.getElementById("loading");
  setTimeout(() => {
    loading.setAttribute("class", "hide");
  }, 1000);
});

// Nav bar fixed

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > nav.offsetHeight + 80) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});

// footer

const subfooter = document.getElementById("subfooter");
subfooter.innerHTML = `Centro de Emprendedores | Todos los derechos reservados ${new Date().getFullYear()} | Facatativá Cundinamarca`;

// spaces cards

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");
  });
});

const removeActiveClass = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};

// Close info

const closeInfo = document.querySelectorAll(".closeInfo");
const description = document.querySelectorAll(".description");
const openInfo = document.querySelectorAll(".openInfo");
const inactive = document.querySelectorAll(".inactive");

closeInfo.forEach((close) => {
  close.addEventListener("click", (e) => {
    const targetCard = e.target.name;
    hideDescription(targetCard);
    showOpen(targetCard);
  });
});

openInfo.forEach((open) => {
  open.addEventListener("click", (e) => {
    const targetCard = e.target.name;
    showDescription(targetCard);
    hideOpen(targetCard);
  });
});

const showDescription = (target) => {
  const text = document.getElementsByName(target)[1];
  text.classList.remove("inactive");
};

const hideOpen = (target) => {
  const open = document.getElementsByName(target)[0];
  open.classList.add("openInfo");
};

const hideDescription = (target) => {
  const text = document.getElementsByName(target)[1];
  text.classList.add("inactive");
};

const showOpen = (target) => {
  const open = document.getElementsByName(target)[0];
  open.classList.remove("openInfo");
};

// Button Ripple Effect

const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    console.log(xInside, yInside);

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 300);
    console.log("click");
  });
});

// Responsive cards

const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

// Observer player video Croma

const videoCroma = document.getElementById("videoCroma");

const callback = (entries) => {
  if (entries[0].isIntersecting) {
    videoCroma.play();
  } else {
    videoCroma.pause();
  }
};

const options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  treshold: 1,
};

const observer = new IntersectionObserver(callback, options);

observer.observe(videoCroma);
