document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("main img");
  const modals = document.querySelectorAll(".modal");
  let scrollPosition = 0;

  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      scrollPosition = window.pageYOffset;
      document.body.style.top = `-${scrollPosition}px`;
      document.body.classList.add("modal-open");
      modals[index].classList.add("active");
    });
  });

  modals.forEach((modal) => {
    const closeBtn = modal.querySelector(".modal-close");

    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.remove("active");
      document.body.classList.remove("modal-open");
      document.body.style.top = "";
      window.scrollTo(0, scrollPosition);
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
        document.body.classList.remove("modal-open");
        document.body.style.top = "";
        window.scrollTo(0, scrollPosition);
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const activeModal = document.querySelector(".modal.active");
      if (activeModal) {
        activeModal.classList.remove("active");
        document.body.classList.remove("modal-open");
        document.body.style.top = "";
        window.scrollTo(0, scrollPosition);
      }
    }
  });
});
