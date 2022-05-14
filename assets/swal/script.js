//hapus foto profil alert
$(".hapus-profile-btn").on("click", function (e) {
  e.preventDefault();

  const form = $(this).parents("form");

  Swal.fire({
    title: "Apakah Anda Ingin Menghapus Foto Profil?",
    text: "Anda Tidak Bisa Membatalkan Aksi Ini!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, HAPUS!",
  }).then((result) => {
    if (result.isConfirmed) {
      form.submit();
    }
  });
});

// logout alert
$(".log-out-btn").on("click", function (e) {
  e.preventDefault();

  const link = $(this).attr("href");

  Swal.fire({
    title: "Anda Ingin Log Out?",
    text: "",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya!",
    cancelButtonText: "Batal",
  }).then((result) => {
    if (result.isConfirmed) {
      document.location.href = link;
    }
  });
});