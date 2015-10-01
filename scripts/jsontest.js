$(document).ready(function(){


$.getJSON( "test.json", function( data ) {
  var items = [];
  var parse = $.parseJSON(data);
  console.log(parse);
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});




});