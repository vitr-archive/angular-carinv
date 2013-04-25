'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('CarInv App', function() {

  it('should redirect index.html to index.html#/carss', function() {
    browser().navigateTo('../../app/index.html');
    expect(browser().location().url()).toBe('/cars');
  });


  describe('car list view', function() {

    beforeEach(function() {
      browser().navigateTo('../../app/index.html#/cars');
    });


    it('should filter the car list as user types into the search box', function() {
      expect(repeater('.cars li').count()).toBe(10);

//      input('query').enter('nexus');
//      expect(repeater('.cars li').count()).toBe(1);
//
//      input('query').enter('motorola');
//      expect(repeater('.cars li').count()).toBe(8);
    });

/*

    it('should be possible to control car order via the drop down select box', function() {
      input('query').enter('tablet'); //let's narrow the dataset to make the test assertions shorter

      expect(repeater('.cars li', 'car List').column('car.name')).
          toEqual(["Motorola XOOM\u2122 with Wi-Fi",
                   "MOTOROLA XOOM\u2122"]);

      select('orderProp').option('Alphabetical');

      expect(repeater('.cars li', 'car List').column('car.name')).
          toEqual(["MOTOROLA XOOM\u2122",
                   "Motorola XOOM\u2122 with Wi-Fi"]);
    });

*/

    it('should render car specific links', function() {
      input('query').enter('nexus');
      element('.cars li a').click();
      expect(browser().location().url()).toBe('/cars/nexus-s');
    });
  });


  describe('car detail view', function() {

    beforeEach(function() {
      browser().navigateTo('../../app/index.html#/cars/XXXX');
    });


    it('should display 2011 MERCEDES ML63 W164 MY10 AMG page', function() {
      expect(binding('car.name')).toBe('2011 MERCEDES ML63 W164 MY10 AMG');
    });


//    it('should display the first car image as the main car image', function() {
//      expect(element('img.car').attr('src')).toBe('img/cars/nexus-s.0.jpg');
//    });


//    it('should swap main image if a thumbnail image is clicked on', function() {
//      element('.car-thumbs li:nth-child(3) img').click();
//      expect(element('img.car').attr('src')).toBe('img/cars/nexus-s.2.jpg');
//
//      element('.car-thumbs li:nth-child(1) img').click();
//      expect(element('img.car').attr('src')).toBe('img/cars/nexus-s.0.jpg');
//    });
  });
});
