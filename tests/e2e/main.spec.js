describe('E2E: main page', function() {
  describe('loging in', function () {

    var usernames = [
      'user',
      'manager',
      'developer',
      'tester',
      'admin'
    ];

    beforeEach(function() {
      browser.get('http://127.0.0.1:8080/');
    });

    it('should have a title', function() {
      expect(browser.getTitle()).toEqual('Angular Node Test');
    });
    
    usernames.forEach( function(username) {
      it('should login with correct credentials', function () {
        element(by.model('MainController.username')).clear().sendKeys(username);
        element(by.model('MainController.password')).clear().sendKeys('password');

        element(by.css('input[type="submit"]')).click().then(function () {
          browser.waitForAngular();

          expect( browser.getCurrentUrl() ).toBe('http://127.0.0.1:8080/profile');
          expect( element(by.css('h1')).getText() ).toBe('Welcome '+ username +'!');

          if (username === 'admin') {
            expect( element.all(by.css('.login-attempts-container')).count() ).toEqual(1);
            expect( element(by.css('h3')).getText() ).toBe('Login Attempts');
            expect( element(by.css('h3+ul')).getText() ).toBeTruthy();
          }
          else {
            expect( element.all(by.css('.login-attempts-container')).count() ).toEqual(0);
          }
        });
      })
    });
  });

  it('should log out by clicking logout button', function () {
    var logoutBtn = by.css('.logout-btn');

    expect(browser.getCurrentUrl()).toBe('http://127.0.0.1:8080/profile');

    expect(element.all(logoutBtn).count()).toEqual(1);
    element(logoutBtn).click().then(function () {
      browser.waitForAngular();
      expect(browser.getCurrentUrl()).toBe('http://127.0.0.1:8080/');
    });
  })

  it('should NOT login with incorrect credentials', function() {
    element(by.model('MainController.username')).clear().sendKeys('johndoe');
    element(by.model('MainController.password')).clear().sendKeys('password');

    element(by.css('input[type="submit"]')).click().then(function () {
      browser.waitForAngular();
      expect(browser.getCurrentUrl()).toBe('http://127.0.0.1:8080/');
    });
  });
});