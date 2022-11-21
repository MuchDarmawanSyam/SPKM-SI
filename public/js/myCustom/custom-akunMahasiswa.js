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
        $("#btnModal-reset-akun").data('nimReset', {nimResetAkun: nimDetail});
      }
    });

    $("html,body").animate({ scrollTop: $('#target-detail').offset().top}, 1000);
  });

  // Modal Reset Akun Mahasiswa
  $("#btnModal-reset-akun").fireModal({
    title: 'Reset Akun Mahasiswa',
    body: $("#modal-reset-akun-mahasiswa"),
    footerClass: 'bg-whitesmoke',
    autoFocus: false,
    buttons: [
      {
          text: 'Reset Akun',
          submit: false,
          class: 'btn btn-danger btn-shadow btnResetPass',
          handler: function(modal) {
          }
      }
    ]
  });


  // Fungsi Reset Password dengan Ajax
  $('.btnResetPass').click(function(e) {
    var nimReset = $('#nim_reset_akun').serialize();
    $.ajax({
      url: "/admin/akun-mahasiswa/reset",
      method: "POST",
      data: nimReset,
      dataType: "JSON",
      success: function(dataResetResult){
        $('#hasilReset').html(
          'Password Baru:<div class="form-group"><div class="alert alert-success alert-dismissible show fade ms-3"><div class="alert-body"><button class="close" data-dismiss="alert"><span>&times;</span></button>'+dataResetResult.passMhs+'&nbsp;</div></div></div>'
        );
        $('#modal-reset-akun-mahasiswa').hide();
      },
      error: function(dataResetResult){
        $('#hasilReset').html(
          '<div class="form-group"><div class="alert alert-danger alert-dismissible show fade ms-3"><div class="alert-body"><button class="close" data-dismiss="alert"><span>&times;</span></button>Gagal Mereset Password NIM: '+dataResetResult.nimMhs+'&nbsp;</div></div></div>'
        );
        $('#modal-reset-akun-mahasiswa').hide();
      }
    });
    e.preventDefault();
  });

  // Fungsi Salin text NIM
  $(".btnCopyNIM").click(function(e){
    let nimCopy = $('#detailNimMhs').select().val();
    document.execCommand('copy');
    e.preventDefault();
  });
 });

 // Dapatkan Data Mahasiswa via NIM Search
 $(document).on('click', '#btnSearchMhsbyNim', function(e){
  var nimSearch = $("#searchMhsbyNim").val();
  $.ajax({
    url: "http://localhost:3030/admin/akun-mahasiswa/detail",
    method: "POST",
    data: {id:nimSearch},
    dataType: "JSON",
    success: function(dataAkunDetail){
      $("#detailNamaMhs").val(dataAkunDetail.nama_mahasiswa);
      $("#detailNimMhs").val(nimSearch);
      $("#detailGenderMhs").val(dataAkunDetail.gender_mahasiswa);
      $("#detailUsername").val(dataAkunDetail.username_akun);
      $("#detailPassword").val(dataAkunDetail.password_akun);
    }
  });

  $("html,body").animate({ scrollTop: $('#target-detail').offset().top}, 1000);
  e.preventDefault();
 });

  // Dapatkan Data Akun Reset
  $(document).on('click', '#btnModal-reset-akun', function(){
    var nim = $(this).data('nimReset').nimResetAkun;
    $('#nim_reset_akun').val(nim);
  });
 