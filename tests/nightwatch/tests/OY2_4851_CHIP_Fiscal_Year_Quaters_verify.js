
module.exports = {
    "@tags": ["smoke"],

    before : function(browser) {
        console.log('Setting up the browser instance...');
        console.log('Opening the browser...')
        browser.maximizeWindow().url(browser.launch_url).waitForElementPresent('body');
        // Login credentails are pulled from .env files, this file should not be tracked and
        // must be stated in the .gitignore file
        const username = browser.globals.user;
        const password = browser.globals.pass;

        // Loing activities 
        browser.useCss().click(".LoginWithOkta .LoaderButton");
        browser.useCss().setValue("input#okta-signin-username", username).pause(100);
        browser.useCss().setValue("input#okta-signin-password", password).pause(100);
        browser.useCss().click("input#tandc");
        browser.useCss().click("input#okta-signin-submit");
        browser.waitForElementPresent('body');
    },

    after : function(browser) {
        console.log("Stopping test executions...")
        console.log('Closing down the browser instance...');
        browser.end();
    }, 

    'Check for year 2021 quaters' : function(browser) {
        // Year 2021
        let tab_2021 = "//button[text()='2021']";
        let tab_2021_q1 = "(//ul[@class='quarterly-items'])[1]/li[1]/a";
        let tab_2021_q2 = "(//ul[@class='quarterly-items'])[1]/li[2]/a";

        browser.useXpath();
       // browser.click(tab_2021).pause(500);
        // Check for 2021 Quater 1
        browser.expect.element(tab_2021_q1).to.be.visible;
      
        // Check for 2021 Quater 2
        browser.expect.element(tab_2021_q2).to.be.visible;
    },

    'Check for year 2020 quarters': function(browser) {
        // Year 2020 
        let tab_2020 = "//button[text()='2020']";
        let tab_2020_q1 = "(//ul[@class='quarterly-items'])[2]/li[1]/a";
        let tab_2020_q2 = "(//ul[@class='quarterly-items'])[2]/li[2]/a";
        let tab_2020_q3 = "(//ul[@class='quarterly-items'])[2]/li[3]/a";
        let tab_2020_q4 = "(//ul[@class='quarterly-items'])[2]/li[4]/a";

        browser.useXpath();
        browser.click(tab_2020);
        // Check for 2020 Quater 1
        //browser.click(tab_2020_q1);
        browser.expect.element(tab_2020_q1).to.be.visible;
        //browser.back();
       
        // Check for 2020 Quater 2
        //browser.click(tab_2020_q2);
        browser.expect.element(tab_2020_q2).to.be.visible;
       // browser.back();

        // Check for 2020 Quater 3
        //browser.click(tab_2020_q3);
        browser.expect.element(tab_2020_q3).to.be.visible;
        //browser.back();

        // Check for 2020 Quater 4
        //browser.click(tab_2020_q4);
        browser.expect.element(tab_2020_q4).to.be.visible;
    }, 

    'Check for year 2019 quarters': function(browser) {
        let tab_2019 = "//button[text()='2019']";
        let tab_2019_q1 = "(//ul[@class='quarterly-items'])[3]/li[1]/a";
        let tab_2019_q2 = "(//ul[@class='quarterly-items'])[3]/li[2]/a";
        let tab_2019_q3 = "(//ul[@class='quarterly-items'])[3]/li[3]/a";
        let tab_2019_q4 = "(//ul[@class='quarterly-items'])[3]/li[4]/a";

        browser.useXpath();
        browser.click(tab_2019);

        // Check for 2020 Quater 1
       // browser.click(tab_2019_q1);
        browser.expect.element(tab_2019_q1).to.be.visible;
       // browser.back();
       
        // Check for 2020 Quater 2
        //browser.click(tab_2019_q2);
        browser.expect.element(tab_2019_q2).to.be.visible;
        //browser.back();

        // Check for 2020 Quater 3
        //browser.click(tab_2019_q3);
        browser.expect.element(tab_2019_q3).to.be.visible;
        //browser.back();

        // Check for 2020 Quater 4
        //browser.click(tab_2019_q4);
        browser.expect.element(tab_2019_q4).to.be.visible;
        //browser.back();
    }, 

    'Check for year 2018 quarters': function(browser) {
        let tab_2018 = "//button[text()='2018']";
        let tab_2018_q1 = "(//ul[@class='quarterly-items'])[4]/li[1]/a";
        let tab_2018_q2 = "(//ul[@class='quarterly-items'])[4]/li[2]/a";
        let tab_2018_q3 = "(//ul[@class='quarterly-items'])[4]/li[3]/a";
        let tab_2018_q4 = "(//ul[@class='quarterly-items'])[4]/li[4]/a";

        browser.useXpath();
        browser.click(tab_2018);

        // Check for 2020 Quater 1
        //browser.click(tab_2018_q1);
        browser.expect.element(tab_2018_q1).to.be.visible;
        //browser.back();
       
        // Check for 2020 Quater 2
        //browser.click(tab_2018_q2);
        browser.expect.element(tab_2018_q2).to.be.visible;
        //browser.back();

        // Check for 2020 Quater 3
        //browser.click(tab_2018_q3);
        browser.expect.element(tab_2018_q3).to.be.visible;
        //browser.back();

        // Check for 2020 Quater 4
        //browser.click(tab_2018_q4);
        browser.expect.element(tab_2018_q4).to.be.visible;
        //browser.back();
    }
}