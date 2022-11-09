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
         $("#detailAlamatMhs").val(dataDetail.alamat_mahasiswa);
         $("#detailNohpMhs").val(dataDetail.no_telp_mahasiswa);
         $("#detailKelasMhs").val(dataDetail.kelas_mahasiswa);
         $("#detailSemesterMhs").val(dataDetail.id_semester);
       }
     });
 
     $("html,body").animate({ scrollTop: $('#target-detail').offset().top}, 1000);
   });

    // Modal Form Tambah Anggota Mahasiswa
    $("#modal-tambah-mahasiswa").fireModal({
        title: 'Form Tambah Anggota',
        body: $("#modal-add-mahasiswa"),
        footerClass: 'bg-whitesmoke',
        autoFocus: false,
        buttons: [
        {
            text: 'Tambah Anggota',
            submit: true,
            class: 'btn btn-primary btn-shadow',
            handler: function(modal) {
            }
        }
        ]
    });

    // Modal Form Edit Mahasiswa
    $(".modal-edit-mahasiswa").fireModal({
        title: 'Form Edit Anggota',
        body: $("#modal-edit-mahasiswa"),
        footerClass: 'bg-whitesmoke',
        autoFocus: false,
        buttons: [
            {
            text: 'Edit Anggota',
            submit: true,
            class: 'btn btn-primary btn-shadow',
            handler: function(modal) {
            }
            }
        ]
    });

     // Modal Hapus Mahasiswa
    $(".modal-delete-mahasiswa").fireModal({
        title: 'Hapus Anggita Anggota',
        body: $("#modal-delete-mahasiswa"),
        footerClass: 'bg-whitesmoke',
        autoFocus: false,
        buttons: [
        {
            text: 'Hapus Anggota',
            submit: true,
            class: 'btn btn-primary btn-shadow',
            handler: function(modal) {
            }
        }
        ]
    });
 });
 
 // Isi Data Mahasiswa pada Form Edit Mahasiswa
 $(document).on('click', '.modal-edit-mahasiswa', function(){
   var nim = $(this).data('nim');
 
   $.ajax({
     url: "http://localhost:3030/Admin/Mahasiswa/edit",
     method: "POST",
     data: {id:nim},
     dataType: "JSON",
     success: function(data){
       $(".nama_mahasiswa").val(data.nama_mahasiswa);
       $(".nim_mahasiswa").val(data.nim_mahasiswa);
       $(".gender_mahasiswa").val(data.gender_mahasiswa);
       // Tambah Semester disini dan lanjutkan seperti gender
     }
   });
 
   let changeGender = setTimeout(function() {
     var jk = $(".gender_mahasiswa").val();
     if (jk == "L"){
       $(".gender_laki").attr("selected", "selected");
       $(".gender_cewe").removeAttr("selected");
     }else{
       $(".gender_cewe").attr("selected", "selected");
       $(".gender_laki").removeAttr("selected");
     }
         clearTimeout(changeGender);
       }, 500);
 });
 
 // Dapatkan Data Mahasiswa untuk dihapus
 $(document).on('click', '.modal-delete-mahasiswa', function(){
   var nim = $(this).data('nim');
   $('.nim_delete_mahasiswa').val(nim);
 });
 