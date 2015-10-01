$(document).ready(function(){

$.getJSON('test.json', function(data) {
  $('#json').html(JSON.stringify(data));
});

});