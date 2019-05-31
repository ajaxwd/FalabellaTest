const { Given, When, Then } = require('cucumber');
const { Selector } = require('testcafe');

Given('I navigate to the example form page', async function() {
    await testController.navigateTo('https://www.google.cl')
});

When('I fill out the name field with {string}', async function(name) {
    const google = Selector('input[name=q]');

    await testController.maximizeWindow().typeText(google, 'tottus sucursales')

});

When('I fill out the name field with {string}', async function(name) {
    const testNataniel = Selector('.nVcaUb').withText('tottus nataniel');

    await testControllert.click('.gNO89b').click(testNataniel)
});

When('I fill out the name field with {string}', async function(name) {
    const btnSitio = Selector('.ab_button').withText('Sitio web');

    await testController.click(btnSitio)
});

When('I fill out the name field with {string}', async function(name) {
    const receta = Selector('#new_tottus_nav_cliente_recetas');

    await testController.click(receta)
});

When('I fill out the name field with {string}', async function(name) {
    const Alta = Selector('#myDIV > button:nth-child(4)');

    await testController.click(Alta)
});

When('I fill out the name field with {string}', async function(name) {
    const rollito = Selector('#divRecipes > section > div > div:nth-child(4) > div:nth-child(2)');

    await testController.click(rollito)
});

Then('I see {string} in the name field on the submission form', async function(name) {
    const texto = Selector('#hero > div > div > div:nth-child(3) > div.headerDivRecipe > div.divRecipe');

    await testController.expect(texto.textContent).contains('canela')
    await testController.expect(texto.textContent).contains('azúcar rubia')
});