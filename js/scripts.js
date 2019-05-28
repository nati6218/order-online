$(document).ready(function(){
  $('#order form').submit(function(event){

  var nameInput = $('input#name').val();
  var addressInput = $('input#address').val();
  var stateInput = $('input#state').val();

$('.name').text(nameInput);
$('.address').text(addressInput);
$('.state').text(stateInput);

$('#receipt').show();
event.preventDefault();
});
});
