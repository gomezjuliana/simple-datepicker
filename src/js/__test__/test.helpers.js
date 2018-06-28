// window.Helpers

describe('Helpers Module', function() {
  it('should return the sum of 2 numbers', function() {
    const result = Helpers.sum(1, 2);

    expect(result).to.be(3);
  });
});
