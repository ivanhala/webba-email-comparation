jQuery(document).on( 'wbk_on_form_rendered', function(){
    jQuery('#wbk-book_appointment').prop('disabled', true);
    jQuery('.wpcf7-text').change( function(){
        if( jQuery('#wbk-email').val() == jQuery('#wbk-email-confirm').val()){
            jQuery('#wbk-book_appointment').prop('disabled', false);
        } else {
            jQuery('#wbk-book_appointment').prop('disabled', true);
        }
    });
});
