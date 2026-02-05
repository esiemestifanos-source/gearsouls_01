document.addEventListener("DOMContentLoaded", () => {

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Mobile nav
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav");
  navToggle.addEventListener("click", () => nav.classList.toggle("open"));

  // Modal
  const modal = document.getElementById("modal");
  const modalText = document.getElementById("modal-text");
  const closeModal = document.getElementById("close-modal");

  document.querySelectorAll(".open-modal").forEach(btn => {
    btn.addEventListener("click", () => {
      modalText.textContent = btn.parentElement.dataset.product;
      modal.style.display = "grid";
    });
  });

  closeModal.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });

});
