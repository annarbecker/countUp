function palindrome(word) {
  if(typeof word === 'number') {
    word = word.toString();
  }
  var noSpace = word.replace(/[" "]/g,"");
  var reverse = noSpace.split("").reverse().join("");

  if (reverse === noSpace) {
    return true;
  }

  return false;
}

$(function() {
  $("form#palindrome").submit(function(event) {
    var userInput = $("input#palindromeInput").val();
    var palindromeInput = palindrome(userInput);
    if (userInput.length === 0) {
      alert("Please enter a word.");
    } else if (palindromeInput === true) {
      $("#result").append("<p>It IS a palindrome</p>");
    } else {
      $("#result").append("<p>It is NOT a palindrome</p>");
    }

    $("#result").show();

    event.preventDefault();
  });
});
