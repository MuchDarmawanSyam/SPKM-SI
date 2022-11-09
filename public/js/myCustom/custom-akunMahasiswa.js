/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 * 
 */

 "use strict";

 // Gunakan Datatable untuk tabel akun Mahasiswa
 $(document).ready(function () {
   $('#dataTableAkunMhs').DataTable();

   // Buat Fungsi Tombol Scroll to Detail akun Mahasiswa dan Ajax
   $(".btn-detail").click(function() {
    var nimDetail =  $(this).data('detail');
    $.ajax({
      url: "http://localhost:3030/admin/akun-mahasiswa/detail",
      method: "POST",
      data: {id:nimDetail},
      dataType: "JSON",
      success: function(dataDetail){
        $("#detailNamaMhs").val(dataDetail.nama_mahasiswa);
        $("#detailNimMhs").val(nimDetail);
        $("#detailGenderMhs").val(dataDetail.gender_mahasiswa);
        $("#detailUsername").val(dataDetail.username_akun);
        $("#detailPassword").val(dataDetail.password_akun);
      }
    });

    $("html,body").animate({ scrollTop: $('#target-detail').offset().top}, 1000);
  });
 });
 