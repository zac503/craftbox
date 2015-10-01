$(document).ready(function(){


$.getJSON('test.json', function(data) {
  var obj = jQuery.parseJSON(data);
  $('#json').html(obj.one);
});



});