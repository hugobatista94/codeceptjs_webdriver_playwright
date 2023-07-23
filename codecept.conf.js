const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */

const server = require('./server/server.js')

exports.config = {
  name: 'auto_codeceptjs_webdriver_playwright',
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http//www.automationpractice.pl/index.php',
      browser: 'chromium',
      show: false,
      waitForTimeout:5000,
      desiredcapabilities: {
        crhomeOptions: {
}
      }
    }
  },
  include: {
    I: './steps_file.js',
    home_page: "./pages/home_page.js",
    login_page: "./pages/login_page.js",
    create_user_page: "./pages/create_user_page.js"
  },
  bootstrap: async () => {
    await server.start();
  },
  teardown: async () => {
    await server.stop();
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    },
    mocha: {
      reporterOptions: {}
    },
    stepByStepReport: {
      enabled:true,
      deleteSuccessful:false,
      fullPageScreenshots:true,
      screenshotsForAllureReport:true
    },
    autoLogin: {
    enabled: true,
    saveToFile: true,
    inject: 'login',
    users: {
      user: {
        // loginAdmin function is defined in `steps_file.js`
        login: (I) => {
          I.amOnPage('http://www.automationpractice.pl/index.php')
          I.click('.login')
          I.waitForElement('#email', 10)
          I.fillField('#email','hugobb@gmail.com')
          I.fillField('#passwd',secret('123456'))
          I.click('#SubmitLogin')
        },

        check: (I) => {
           I.amOnPage('http://www.automationpractice.pl/index.php');
           I.see('Hugo Batista');
          }
        }
      }
    }
  }
//   bootstrap: null,
//   teardown:null,
//   mocha: {},
//   plugins: {
//   retryFailedStep: {
//     enabled: true
//   },
//   wdio:{
//     enabled:true,
//     services: ['selenium-standalone']
//   },
//  }
}


