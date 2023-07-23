const { I } = inject();

module.exports = {

  fileds: {
    firstName:'#customer_firstname',
    lastName: '#customer_lastname',
    password: '#passwd',
    days: '#days',
    months:'#months',
    years: '#years',
    waitTextresgister: 'Register'
    
  },

  button: {
    male: '#id_gender1',   
    accept:'#newsletter', 
  },

  messages: {

  },

  labels: {
    createAnAccount:'.page-heading'
  },

  createUserWithSuccess(firstName,lastName) {

    //Recuperando Informações
    I.waitForElement(this.fileds.firstName, 10)
    I.see('CREATE AN ACCOUNT')
    // var titlePrincipal = await I.grabTextFrom(this.labels.createAnAccount)
    // validacao.equal(titlePrincipal,'Create an account')

    //Preenchendo formularios e scroll
    I.click(this.button.male)
    I.fillField(this.fileds.firstName,firstName)
    I.fillField(this.fileds.lastName,lastName)
    console.log(`${firstName} ${lastName}`);
    I.fillField(this.fileds.password,secret('123456'))


    I.selectOption(this.fileds.days, '25')
    I.selectOption(this.fileds.months, '3')
    I.selectOption(this.fileds.years, '1994')

    I.scrollPageToBottom()

    I.click(this.button.accept)
    I.waitForText(this.fileds.waitTextresgister)
  }
}
