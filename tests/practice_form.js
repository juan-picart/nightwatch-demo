describe('Send new form', function() {

    before(browser => browser.navigateTo('https://demoqa.com/automation-practice-form'));

    it('Send new practice form', function(browser) {
      browser
        .waitForElementVisible('.main-header')
        .execute("document.body.style.zoom='70%'")
        .setValue('#firstName', 'Roman')
        .setValue('#lastName', 'Riquelme')
          .setValue('#userEmail', "juan.riquelme@gmail.com")
          .execute("document.evaluate(\"//label[text()='Female']\", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click()")
        .execute("document.querySelector('#submit').scrollIntoView")
        .click('#submit')


        // .assert.titleContains('Ecosia')
        // .assert.visible('input[type=search]')
        // .setValue('input[type=search]', 'nightwatch')
        // .assert.visible('button[type=submit]')
        // .click('button[type=submit]')
        // .assert.textContains('.mainline-results', 'Nightwatch.js');
    });

    after(browser => browser.end());
  });
