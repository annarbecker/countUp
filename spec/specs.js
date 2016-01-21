describe("countUp",function(){
  it("will count up to 30 by increments of 5", function() {
    expect(countUp(30, 5)).to.eql([5,10,15,20,25,30]);
  });

  it("will count up to 20 by increments of 4", function() {
    expect(countUp(20, 4)).to.eql([4,8,12,16,20]);
  });
});
