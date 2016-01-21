$(document).ready(function(){
  $("form").submit(function(event) {
  var userNumber = parseInt($("input#number").val());
  var userCounter = parseInt($("input#counter").val());
  var result = countUp(userNumber, userCounter);
  $("#outPut").text(result);
  $(".result").show();
  event.preventDefault();
  });
});


function countUp(number, counter) {
  var outPut = [];
  for (var i = counter; i <= number; i += counter){
  outPut.push(i);
  }
  return outPut;
}
