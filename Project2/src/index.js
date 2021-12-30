const body = document.querySelector("body");

function handleWindowResize() {
  if (window.innerWidth < 500) {
    body.classList.remove("middle");
    body.classList.remove("wide");
    body.classList.add("narrow");
  } else if (window.innerWidth < 900) {
    body.classList.remove("narrow");
    body.classList.remove("wide");
    body.classList.add("middle");
  } else {
    body.classList.remove("narrow");
    body.classList.remove("middle");
    body.classList.add("wide");
  }
}

window.addEventListener("resize", handleWindowResize);