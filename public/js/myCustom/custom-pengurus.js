/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 * 
 */

 "use strict";
 
 $(document).ready(function () {
    // Gunakan Datatable untuk semua tabel
   $('#dataTableMhs').DataTable();
 
   // Buat Fungsi Tombol Scroll to Detail Mahasiswa dan Ajax
   $(".btn-detail").click(function() {
     var nimDetail =  $(this).data('detail');
     $.ajax({
       url: "http://localhost:3030/Admin/Mahasiswa/edit",
       method: "POST",
       data: {id:nimDetail},
       dataType: "JSON",
       success: function(dataDetail){
         $("#detailNamaMhs").val(dataDetail.nama_mahasiswa);
         $("#detailNimMhs").val(dataDetail.nim_mahasiswa);
         $("#detailGenderMhs").val(dataDetail.gender_mahasiswa);
         $("#detailEmail").val(dataDetail.email_mahasiswa);
         $("#detailAlamatMhs").val(dataDetail.alamat_mahasiswa);
         $("#detailNohpMhs").val(dataDetail.no_telp_mahasiswa);
         $("#detailKelasMhs").val(dataDetail.kelas_mahasiswa);
         $("#detailSemesterMhs").val(dataDetail.id_semester);
       }
     });
 
     $("html,body").animate({ scrollTop: $('#target-detail').offset().top}, 1000);
   });

    // Modal Tambah Pengurus
    $(".modal-tambah-pengurus").fireModal({
        title: 'Data Anggota',
        body: $("#modal-add-pengurus"),
        footerClass: 'bg-whitesmoke',
        autoFocus: false,
        buttons: [
        {
            text: 'Jadikan Pengurus',
            submit: true,
            class: 'btn btn-primary btn-shadow',
            handler: function(modal) {
            }
        }
        ]
    });

     // Modal Hapus Pengurus
    $(".modal-delete-pengurus").fireModal({
        title: 'Hapus Data Pengurus',
        body: $("#modal-delete-pengurus"),
        footerClass: 'bg-whitesmoke',
        autoFocus: false,
        buttons: [
          {
              text: 'Hapus Pengurus',
              submit: true,
              class: 'btn btn-primary btn-shadow',
              handler: function(modal) {
              }
          }
        ]
    });

    // Fungsi Dapatkan Data Mahasiswa untuk dijadikan Pengurus
    $(".modal-tambah-pengurus").click(function(e){
      var thisYear = new Date().getFullYear();
      $('#titleMhsAngkatan').append('Data Mahasiswa Angkatan '+thisYear);
      $.ajax({
        url: "http://localhost:3030/Admin/pengurus/get",
        method: "POST",
        data: {year:thisYear},
        dataType: "JSON",
        success: function(data){
          let no = 1;
          for(let i = 0; i < data.length; i++){
            $('#tblMhsAngkatan').append('<tr><td>'+no+'</td><td>'+data[i].nim_mahasiswa+'</td><td>'+data[i].nama_mahasiswa+'</td><td>'+data[i].gender_mahasiswa+'</td><td>'+data[i].id_semester+'</td></tr>');
            no++;
          }
          // Datatabke ditaruh di dalam fungsi ajax agar dapat membaca data di tabel & hidari malfunngsi tabel
          // Datatable ditaruh dibagian akhir looping untuk menghindari data hilang saat sorting & searching
          $('#dataTableMhsAngkatan').DataTable();
        },
        error: function(xhr, status, error) {
          var err = eval('(' + xhr.responseText + ')');
          alert(err.Message);
          }
      });
    });

    // Fungsi Salin text NIM
    $(".btnCopyNIM").click(function(e){
      let nimCopy = $('#detailNimMhs').select().val();
      document.execCommand('copy');
      e.preventDefault();
    });
 });
 
 // Dapatkan Data Mahasiswa untuk dihapus
 $(document).on('click', '.modal-delete-pengurus', function(){
   var nim = $(this).data('nim');
   $('.nim_delete_pengurus').val(nim);
 });

 // Dapatkan Data Mahasiswa via NIM Search
 $(document).on('click', '#btnSearchMhsbyNim', function(e){
  var nimSearch = $("#searchMhsbyNim").val();
  $.ajax({
    url: "http://localhost:3030/Admin/Mahasiswa/edit",
    method: "POST",
    data: {id:nimSearch},
    dataType: "JSON",
    success: function(dataDetailSearch){
      $("#detailNamaMhs").val(dataDetailSearch.nama_mahasiswa);
      $("#detailNimMhs").val(dataDetailSearch.nim_mahasiswa);
      $("#detailGenderMhs").val(dataDetailSearch.gender_mahasiswa);
      $("#detailEmail").val(dataDetailSearch.email_mahasiswa);
      $("#detailAlamatMhs").val(dataDetailSearch.alamat_mahasiswa);
      $("#detailNohpMhs").val(dataDetailSearch.no_telp_mahasiswa);
      $("#detailKelasMhs").val(dataDetailSearch.kelas_mahasiswa);
      $("#detailSemesterMhs").val(dataDetailSearch.id_semester);
    }
  });

  $("html,body").animate({ scrollTop: $('#target-detail').offset().top}, 1000);
  e.preventDefault();
 });