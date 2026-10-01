// ===== 1. DARK / LIGHT MODE =====

// Ambil tombol tema dan body
const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');

// Saat tombol tema diklik
btnTema.addEventListener('click', function () {

  // Tambahkan / hapus class light-mode
  bodyHalaman.classList.toggle('light-mode');

  // Ubah tulisan tombol
  if (bodyHalaman.classList.contains('light-mode')) {
    btnTema.textContent = '🌙 Mode Gelap';
  } else {
    btnTema.textContent = '☀️ Mode Terang';
  }

});


const btnKirimPesan = document.getElementById("btnKirimPesan");
const modalKontak = document.getElementById("modalkontak");
const btnTutupModal = document.getElementById("btnTutupModal");

btnKirimPesan.addEventListener("click", function () {
  modalKontak.classList.add("show");
});

btnTutupModal.addEventListener("click", function () {
  modalKontak.classList.remove("show");
});

modalKontak.addEventListener("click", function (e) {
  if (e.target === modalKontak) {
    modalKontak.classList.remove("show");
  }
});