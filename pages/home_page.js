const { I } = inject();

module.exports = {

  fileds: {
    waitText: 5
  },

  button: {
      loginButton: '.login'
  },

  messages: {

  },

  accessLoginPage() {
      I.click(this.button.loginButton)
      I.wait(this.fileds.waitText)
  }

}
