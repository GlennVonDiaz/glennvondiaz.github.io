$(document).ready(function () {
  // menu dropdown
  $(".ldropdown").on("click", function () {
    let menuIkon = $(".ldropdown > button > i");
    menuIkon.toggleClass("bi-chevron-down bi-chevron-up");

    const content = $(this).children(".ldropdown-content");
    content.toggleClass("d-none d-block");
  });
  // hilangkan card
  $(".lclose").on("click", function () {
    const card = $(this).parents(".lblue-card");
    card.css("display", "none");
    console.log("p");
  });
  // konfirmasi simpan data domisili
  $("#simpanperubahandomisili").on("click", function (e) {
    e.preventDefault();
    Swal.fire({
      title: "Peringatan",
      text: "Pastikan data yang di input sudah valid dan benar Data tidak dapat diubah kembali ketika sudah menyimpan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#FFB26A",
      confirmButtonText: "Simpan",
      cancelButtonText: "Kembali",
      reverseButtons: "true",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("aksi!", "aksi disini", "info");
        document.location = "pengubahanDataDomisiliAfter.html";
      }
    });
  });
  // konfirmasi simpan data ubah profil
  $("#ubahDataProfile").on("click", function (e) {
    e.preventDefault();
    Swal.fire({
      title: "Peringatan",
      text: "Pastikan data yang di input sudah valid dan benar Data tidak dapat diubah kembali ketika sudah menyimpan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#FFB26A",
      confirmButtonText: "Simpan",
      cancelButtonText: "Kembali",
      reverseButtons: "true",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("aksi!", "aksi disini", "info");
        document.location = "profile.html";
      }
    });
  });
  // simpan verifikasi dokumen jalur afirmasi
  $("#simpanVerAfirmasi").on("click", function (e) {
    e.preventDefault();
    Swal.fire({
      title: "Peringatan",
      text: "Pastikan data yang di input sudah valid dan benar Data tidak dapat diubah kembali ketika sudah menyimpan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#FFB26A",
      confirmButtonText: "Simpan",
      cancelButtonText: "Kembali",
      reverseButtons: "true",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("aksi!", "aksi disini", "info");
        document.location = "verDokJalurAfirmasiAfter.html";
      }
    });
  });
  // simpan verifikasi dokumen jalur perpindahan ortu / wali
  $("#simpanVerPerpindahanOrtu").on("click", function (e) {
    e.preventDefault();
    Swal.fire({
      title: "Peringatan",
      text: "Pastikan data yang di input sudah valid dan benar Data tidak dapat diubah kembali ketika sudah menyimpan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#FFB26A",
      confirmButtonText: "Simpan",
      cancelButtonText: "Kembali",
      reverseButtons: "true",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("aksi!", "aksi disini", "info");
        document.location = "verDokPerpindahanTugasOrtuWaliAfter.html";
      }
    });
  });
  // simpan pendataan radius rumah siswa
  $("#simpanPendataanRadius").on("click", function (e) {
    e.preventDefault();
    Swal.fire({
      title: "Peringatan",
      text: "Pastikan data yang di input sudah valid dan benar Data tidak dapat diubah kembali ketika sudah menyimpan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#FFB26A",
      confirmButtonText: "Simpan",
      cancelButtonText: "Kembali",
      reverseButtons: "true",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("aksi!", "aksi disini", "info");
        document.location = "pendataanRadiusAfter.html";
      }
    });
  });
  // simpan penambahan nilai prestasi non akademik
  $("#simpanPenambahanNilaiPNA").on("click", function (e) {
    e.preventDefault();
    Swal.fire({
      title: "Peringatan",
      text: "Pastikan data yang di input sudah valid dan benar Data tidak dapat diubah kembali ketika sudah menyimpan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#FFB26A",
      confirmButtonText: "Simpan",
      cancelButtonText: "Kembali",
      reverseButtons: "true",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("aksi!", "aksi disini", "info");
        document.location = "verDokPenambahanNilaiPNAAfter.html";
      }
    });
  });
  // simpan data siswa lulusan luar DIY
  $("#simpanDataSiswaLulusanLuarDIY").on("click", function (e) {
    e.preventDefault();
    Swal.fire({
      title: "Peringatan",
      text: "Pastikan data yang di input sudah valid dan benar Data tidak dapat diubah kembali ketika sudah menyimpan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#FFB26A",
      confirmButtonText: "Simpan",
      cancelButtonText: "Kembali",
      reverseButtons: "true",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("aksi!", "aksi disini", "info");
        document.location = "dataSiswaLulusanLuarDIYAfter.html";
      }
    });
  });
  // log out
  $("#lo-btn").on("click", function (e) {
    e.preventDefault();
    const link = $(this).attr("href");
    Swal.fire({
      title: "Anda Yakin Akan Melakukan Logout?",
      text: "",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#FFB26A",
      confirmButtonText: "Konfirmasi",
      cancelButtonText: "Tidak",
      reverseButtons: "true",
    }).then((result) => {
      if (result.isConfirmed) {
        document.location = link;
      }
    });
  });
  // menu group link
  $(".menu-list").on("click", function () {
    const link = $(this).children("a").attr("href");
    document.location = link;
  });
  // collapse help.html
  $(".collaps").on("click", function () {
    $(this).toggleClass("collapss");
    const content = $(this).children(".content");
    console.log(content.css("max-height"));
    if (content.css("max-height") == "0px") {
      content.css("max-height", content.prop("scrollHeight") + "px");
    } else {
      content.css("max-height", "0px");
    }
  });
});
