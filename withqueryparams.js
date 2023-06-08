const { it } = require('mocha');
const { spec, request } = require('pactum');

request.setBaseUrl('https://reqres.in');

it('learn queryparams with gender', async () => {
    await spec()
        .get('/api/users')
        .withQueryParams('gender', 'male')
        .expectStatus(200);
});

it('learn queryparams with gender and country', async () => {
    await spec()
        .get('/api/users')
        .withQueryParams('gender', 'male')
        .withQueryParams('country', 'IND')
        .expectStatus(200);
});

it('learn queryparams with gender and country', async () => {
    await spec()
        .get('/api/users')
        .withQueryParams({ 'gender': 'male', 'country': 'IND' })
        .expectStatus(200);
});



