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

  // auto slide
  autoSlide();
  function autoSlide() {
    const autoSlideDelay = 6500; //miliseconds
    let sliderContainer = $(".row-pengumuman").children(".col-12.sliders");
    setInterval(function () {
      let currIndex = $(".data-slider-true[data-slide-index]").data("slideIndex");
      let nextIndex = currIndex + 1;
      let sliderLength = $(".row-pengumuman").children(".col-12.sliders").length;
      sliderContainer.each(function () {
        if (nextIndex > sliderLength) {
          $(`[data-slide-index='1']`).addClass("data-slider-true");
          $(`[data-slide-index='1']`).removeClass("data-slider-false");

          $(`.sliders:not([data-slide-index='1'])`).addClass("data-slider-false");
          $(`.sliders:not([data-slide-index='1'])`).removeClass("data-slider-true");
          return;
        }

        $(`.sliders:not([data-slide-index='${nextIndex}'])`).addClass("data-slider-false");
        $(`.sliders:not([data-slide-index='${nextIndex}'])`).removeClass("data-slider-true");
        $(`[data-slide-index='${nextIndex}']`).addClass("data-slider-true");
        $(`[data-slide-index='${nextIndex}']`).removeClass("data-slider-false");
      });
    }, autoSlideDelay);
  }
  // auto slide end

  // add class data-slider
  addClassDataSlider();
  function addClassDataSlider() {
    let slidersLength = $(".row-pengumuman").children(".col-12.sliders").length;
    let sliderContainer = $(".row-pengumuman").children(".col-12.sliders");

    sliderContainer.first().addClass("data-slider-true");
    sliderContainer.not(":first").addClass("data-slider-false");
  }
  // add class data-slider end

  // add data-slider-index
  addDataSlideIndex();
  function addDataSlideIndex() {
    let slidersLength = $(".row-pengumuman").children(".col-12.sliders").length;
    let sliderContainer = $(".row-pengumuman").children(".col-12.sliders");

    for (i = 1; i <= slidersLength; i++) {
      sliderContainer.each(function (i) {
        $(this).attr("data-slide-index", i + 1);
      });
    }
  }
  // add data-slider-index end

  // slider
  const sliderPrev = $("#previous-slide-pe");
  const sliderNext = $("#next-slide-pe");

  sliderNext.on("click", function () {
    let slideIndex = $(".data-slider-true").data("slideIndex");
    nextSlide(slideIndex);
  });
  sliderPrev.on("click", function () {
    let slideIndex = $(".data-slider-true").data("slideIndex");
    prevSlide(slideIndex);
  });

  function nextSlide(slideIndex) {
    let nextIndex = slideIndex + 1;
    let sliderLength = $(".row-pengumuman").children(".col-12.sliders").length;

    if (nextIndex > sliderLength) {
      $(`[data-slide-index='1']`).addClass("data-slider-true");
      $(`[data-slide-index='1']`).removeClass("data-slider-false");

      $(`.sliders:not([data-slide-index='1'])`).addClass("data-slider-false");
      $(`.sliders:not([data-slide-index='1'])`).removeClass("data-slider-true");
      return;
    }

    $(`.sliders:not([data-slide-index='${nextIndex}'])`).addClass("data-slider-false");
    $(`.sliders:not([data-slide-index='${nextIndex}'])`).removeClass("data-slider-true");
    $(`[data-slide-index='${nextIndex}']`).addClass("data-slider-true");
    $(`[data-slide-index='${nextIndex}']`).removeClass("data-slider-false");
  }
  function prevSlide(slideIndex) {
    let prevIndex = slideIndex - 1;
    let sliderLength = $(".row-pengumuman").children(".col-12.sliders").length;

    if (prevIndex < 1) {
      $(`[data-slide-index='${sliderLength}']`).addClass("data-slider-true");
      $(`[data-slide-index='${sliderLength}']`).removeClass("data-slider-false");

      $(`.sliders:not([data-slide-index='${sliderLength}'])`).addClass("data-slider-false");
      $(`.sliders:not([data-slide-index='${sliderLength}'])`).removeClass("data-slider-true");
      return;
    }

    $(`.sliders:not([data-slide-index='${prevIndex}'])`).addClass("data-slider-false");
    $(`.sliders:not([data-slide-index='${prevIndex}'])`).removeClass("data-slider-true");
    $(`[data-slide-index='${prevIndex}']`).addClass("data-slider-true");
    $(`[data-slide-index='${prevIndex}']`).removeClass("data-slider-false");
  }
  // slider end
});
