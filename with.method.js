const { it } = require('mocha');
const { spec } = require('pactum');

it('learn with-method', async () => {
   await spec()
        .withMethod('GET')
        .withPath('https://reqres.in/api/users?page=2') 
        .expectStatus(200)
})
 