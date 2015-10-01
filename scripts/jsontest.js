$(document).ready(function(){

var obj;
$.getJSON('test.json', function(data) {
  obj = jQuery.parseJSON(data);
  $('#json').html(obj.one);
});



});