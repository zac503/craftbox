$(document).ready(function(){

var obj;
$.getJSON('test.json', function(data) {
  obj = $.parseJSON(data);
  $('#json').html(obj.one);
});



});