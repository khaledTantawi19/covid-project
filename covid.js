let links = document.querySelectorAll("ul li");
let sections = document.querySelectorAll("section");
function menuLinksBG() {
  sections.forEach((section) => {
    if (
      window.scrollY >= section.offsetTop &&
      window.scrollY < section.offsetTop + section.offsetHeight
    ) {
      let ele = document.querySelector(`#${section.classList[0]}`);
      links.forEach((li) => {
        li.classList.remove("active");
      });
      ele.classList.add("active");
    }
  });
}

//start top button action
let topbtn = document.getElementById("top-btn");
function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    topbtn.style.display = "block";
  } else {
    topbtn.style.display = "none";
  }
}
topbtn.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
//end top button action

window.onscroll = function () {
  menuLinksBG();
  scrollFunction();
};