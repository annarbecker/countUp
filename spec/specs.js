describe('palindrome', function() {
  it("will return false if the word is not a palindrome", function() {
    expect(palindrome("apple")).to.equal(false);
  });

  it("will return true if the word is a palindrome", function() {
    expect(palindrome("racecar")).to.equal(true);
  });

  it("will return true if the string is a palindrome", function() {
    expect(palindrome("a man a plan a canal panama")).to.equal(true);
  });

  it("will return true if the integer is a palindrome", function() {
    expect(palindrome(1001)).to.equal(true);
  });
});
