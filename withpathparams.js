const { it } = require('mocha');
const { spec, request } = require('pactum');

request.setBaseUrl('https://reqres.in');

it('learn pathparams with userid', async () => {
        await spec()
                .get('/api/users/{user_id}')
                .withPathParams('user_id', 1)
                .expectStatus(200);
});


it('learn pathparams with userid and accountid as object ', async () => {
        await spec()
                .get('/api/users/{user_id}')
                .withPathParams({ 'user_id': 1 })
                .expectStatus(200);
});

