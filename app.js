const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

if (menu && menuLinks) {
  menu.addEventListener("click", function () {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
  });
}

// 1. Auto-scroll logic (homepage only)
const container = document.querySelector(".services");

if (container) {
  setInterval(() => {
    if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: 630, behavior: "smooth" });
    }
  }, 5000);
}

// 2. Modal logic (homepage only)
const modal = document.getElementById("blogModal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close-btn");
const openBtns = document.querySelectorAll(".open-modal");

if (modal && modalBody) {
  openBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target.classList.contains("disabled-btn")) {
        return;
      }
      const contentId = btn.getAttribute("data-target");
      const sourceContent = document.getElementById(contentId);

      if (sourceContent) {
        modalBody.innerHTML = sourceContent.innerHTML;
        modal.style.display = "block";
      }
    });
  });

  if (closeBtn) {
    closeBtn.onclick = () => (modal.style.display = "none");
  }

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
