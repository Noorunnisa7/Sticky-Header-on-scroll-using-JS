window.addEventListener("scroll", function () {
  const header = document.querySelector(".headerBox");
  
  if (window.scrollY > 400) {
    header.classList.add("stickyHeader");
  } else {
    header.classList.remove("stickyHeader");
  }
});
