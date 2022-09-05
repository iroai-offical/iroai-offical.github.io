$(function() {
    $(function() {
      $('#submit').attr('disabled', 'disabled');
        $('#chkbox').click(function() {
        if ( $(this).prop('checked') == false ) {
          $('#submit').attr('disabled', 'disabled');
        } else {
          $('#submit').removeAttr('disabled');
        }
      });
    });
  });