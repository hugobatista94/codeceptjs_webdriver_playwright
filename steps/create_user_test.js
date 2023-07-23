var validacao = require ('assert')
var { faker } = require('@faker-js/faker');

const {I, home_page, login_page, create_user_page, login} = inject()


Feature('create user');

Scenario('Login With Success', async () => {
   await login('user')
});

Scenario('Create a New Account', async () => {

    var firstName = faker.person.firstName()
    var lastName = faker.person.lastName()
 
     I.amOnPage('http://www.automationpractice.pl/index.php')

     //Home
     home_page.accessLoginPage()

     //Login
    login_page.submitCreateNewAccount(faker.internet.email())

      //Create Account
      create_user_page.createUserWithSuccess(firstName,lastName)  
 
 });