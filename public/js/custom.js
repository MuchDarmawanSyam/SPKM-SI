/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 * 
 */

"use strict";

// Modal Tambah Anggota Mahasiswa
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