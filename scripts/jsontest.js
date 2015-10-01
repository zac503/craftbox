$(document).ready(function(){


$.getJSON('test.json', function(data) {
  //obj = $.parseJSON(data);
  $('#json').html(data.one));
});



});