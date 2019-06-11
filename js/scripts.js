$(document).ready(function(){
  $('#order form').submit(function(event){
    var objects = ["name", "address", "state"];

    objects.forEach(function(object) {
      var userInput = $("input#"+ object).val();
      $("." + object).text(userInput);
    });

$('#receipt').show();
event.preventDefault();
  });
});
