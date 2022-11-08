/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 * 
 */
  // Modularisasi script js ke beberapa modul sesuai halaman untuk memudahkan pengembangan

"use strict";

// Gunakan Datatable untuk semua tabel
$(document).ready(function () {
  $('#dataTableMhs').DataTable();
  $('#dataTableAkunMhs').DataTable();
  $('#dataTablePrmhnMhs').DataTable();
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

// Dapatkan Data Mahasiswa untuk dihapus
$(document).on('click', '.modal-delete-mahasiswa', function(){
  var nim = $(this).data('nim');
  $('.nim_delete_mahasiswa').val(nim);
});
