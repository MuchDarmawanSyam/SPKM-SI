/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 * 
 */

"use strict";

// validasi register
$(document).ready(function() {
    
    $('#nim').keydown(function(e){
        var nimCheck = $(this).val();

        // $.ajax({
        //     url: "http://localhost:3030/register/validateRegister",
        //     method: "POST",
        //     data: {id:nimCheck},
        //     dataType: "JSON",
        //     success: function(dataCheck){
        //         if(nimCheck == dataCheck.nim_permohonan_keanggotaan){
        //             $('.btn-block').prop('disabled', true);
        //             $('#nimValidasi').html('<p class="danger">Nim telah terdafatar"');
        //         }else{
        //             $('#nimValidasi').html('<p class="success">Nim dapat mendaftar"');
        //         }
        //     },
        //     error: function(dataCheck){
        //         $('#nimValidasi').html('<p class="success">Nim dapat mendaftar');
        //     }
        //   });
        
        /// ====================== Lanjutkan Validasi Ajax ======================
        var ajaxCheck = setTimeout(
           $.ajax({
            url: "http://localhost:3030/register/validateRegister",
            method: "POST",
            data: {id:nimCheck},
            dataType: "JSON",
            success: function(dataCheck){
                if(nimCheck == dataCheck.nim_permohonan_keanggotaan){
                    $('.btn-block').prop('disabled', true);
                    $('#nimValidasi').html('<p class="danger">Nim telah terdafatar"');
                }else{
                    $('#nimValidasi').html('<p class="success">Nim dapat mendaftar"');
                }
            },
            error: function(dataCheck){
                $('#nimValidasi').html('<p class="success">Nim dapat mendaftar');
            }
          }),
           2000
        )
    });
});