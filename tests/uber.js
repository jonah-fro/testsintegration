describe('Ecosia example', function() {

    beforeEach(browser => browser.url('https://www.uber.com/fr/fr/'));

test('Demo test ecosia.org', function (browser) {
      browser
      .waitForElementVisible('body', 1000)
      .click('//button[type=Connectez-vous]')
      .assert.button('Se connecter en tant que chauffeur')
      .assert.button('Se connecter en tant que passager')
      .end();
    });

/*
test('Demo test ecosia.org', function (browser) {
      browser
      .url('https://www.uber.com/fr/fr/')
      .waitForElementVisible('body', 1000)
      .assert.buttons('Connectez-vous')
      .assert.buttons('Inscrivez-vous')
      .end();
    });
    */
  /*  test('Demo test ecosia.org', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.titleContains('Ecosia')
        .assert.visible('input[type=search]')
        .setValue('input[type=search]', 'nightwatch')
        .assert.visible('button[type=submit]')
        .click('button[type=submit]')
        .assert.containsText('.mainline-results', 'Nightwatch.js')
        .end();
    });
*/

/*
// Exemple pour basculer sur du XPATH
.useXpath() 
   .waitForElementPresent('//button[@id="/sign-in/"]')
   .waitForElementPresent('//button[@id="/signup/"]')
// Revenir sur du CSS
.useCSS()
*/


});
