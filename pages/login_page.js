const { I } = inject();

module.exports = {

  fileds: {
    emailAddressRegister: '#email_create'
  },

  button: {
     createAccountButton: '#SubmitCreate'
  },

  messages: {

  },

  submitCreateNewAccount(email) {
    I.fillField(this.fileds.emailAddressRegister, email)
    I.click(this.button.createAccountButton)

  }

}
