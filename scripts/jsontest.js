$(document).ready(function(){

var json;

$.getJSON( "test.json", function( data ) {
  var items = [];
  alert(data);
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});

alert(json);

});