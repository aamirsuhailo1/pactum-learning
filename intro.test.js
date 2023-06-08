const { it } = require('mocha');
const { spec } = require('pactum');

it('should be a random user', async ()=> {
    await spec()
            .get("https://randomuser.me/api")
            .expectStatus(200);
})
