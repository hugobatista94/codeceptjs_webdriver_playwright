const {I} = inject ()
const cpfName = require('../utils/cpf_name')


Feature('Login');

BeforeSuite(() => {  // antes de tudo vai executar beforeSuite
    console.log(cpfName.cpfName()); 
    console.log(cpfName.soma(5,3)); 
})

Before(() => { // antes de cada cenário vai executar o Before
    I.amOnPage('http://www.automationpractice.pl/index.php')
})

After(() => { // depois de cada cenário vai executar o After
    console.log('After');
})

AfterSuite(() => { // depois de toda feature vai executar a AfeterSuite
    console.log('Depois de Tudo');
})

Scenario('validate Empety E-mail On Create Account', ({ I }) => {
    // pause()
    I.click('.login')
    I.wait(5)
    I.click('#SubmitCreate')
    I.waitForText('Invalid email address.')
});

Scenario('validate Empety E-mail On Create Account 2', ({ I }) => {
   
    I.click('.login')
    I.wait(5)
    I.click('#SubmitCreate')
    I.waitForText('Invalid email address.')
});

Scenario('validate Empety E-mail On Create Account 3', ({ I }) => {
 
    I.click('.login')
    I.wait(5)
    I.click('#SubmitCreate')
    I.waitForText('Invalid email address.')
});

