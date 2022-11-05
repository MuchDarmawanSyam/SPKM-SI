/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 * 
 */

"use strict";

// Modal Form Tambah Anggota Mahasiswa
$("#modal-tambah-mahasiswa").fireModal({
    title: 'Form Tambah Anggota',
    body: $("#modal-add-mahasiswa"),
    footerClass: 'bg-whitesmoke',
    autoFocus: false,
    // onFormSubmit: function(modal, e, form) {
    //   // Form Data
    //   let form_data = $(e.target).serialize();
    //   console.log(form_data)
  
    //   // DO AJAX HERE
    //   let fake_ajax = setTimeout(function() {
    //     form.stopProgress();
    //     modal.find('.modal-body').prepend('<div class="alert alert-info">Please check your browser console</div>')
  
    //     clearInterval(fake_ajax);
    //   }, 1500);
  
    //   e.preventDefault();
    // },
    // shown: function(modal, form) {
    //   console.log(form)
    // },
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
