jQuery(document).on( 'wbk_on_form_rendered', function(){
    jQuery('#wbk-book_appointment').prop('disabled', true);
    jQuery('.wpcf7-text').change( function(){
        if( jQuery('#wbk-email').val() == jQuery('#wbk-email-confirm').val()){
            jQuery('#wbk-book_appointment').prop('disabled', false);
            jQuery('.email_confirm_error').remove();
        } else {
            jQuery('#wbk-book_appointment').prop('disabled', true);
            jQuery('.email_confirm_error').remove();
            jQuery('#wbk-email-confirm').after('<p class="email_confirm_error" style="color:red;">E-mails are different</p>');
        }
    });
});
