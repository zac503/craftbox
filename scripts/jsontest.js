$(document).ready(function(){


$.getJSON('test.json', function(data) {
  var obj = $.parseJSON(data);
  $('#json').html(obj.one);
});



});