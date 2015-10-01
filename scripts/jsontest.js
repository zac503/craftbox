$(document).ready(function(){


$.getJSON('test.json', function(data) {
  //obj = $.parseJSON(data);
  .each(data, function(i,field){
	$('#json').html(field + "<br>"));
}});



});