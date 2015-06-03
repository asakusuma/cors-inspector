$(document).ready(function() {
  if (app.url) {
    $.ajax({
      url: app.url,
      type: 'POST',
      data: JSON.stringify({}),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: function(e){
        $('#client-output').html(JSON.stringify(e));
      },
      error: function(e) {
        $('#client-output').html(JSON.stringify(e));
      }
    });
  }
});