describe('Lunch Finder', function() {

  var searchTermBox = element(by.model('searchTerm'))
  var searchPostCodeBox = element(by.model('searchPostCode'))

  beforeEach(function() {
    browser.get('http://localhost:8080');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Lunch Finder');
  });

  it('finds packages in a list', function() {
    searchTermBox.sendKeys('Burrito');
    var results = element.all(by.repeater('package in searchData.packages'));
    expect(results.get(0).getText()).toContain("Beni's Breakfast Burrito");
  });


});
