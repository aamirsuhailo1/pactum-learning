const { it } = require('mocha');
const { spec, request } = require('pactum');

request.setBaseUrl('https://reqres.in');

it('learn baseurl1', async () => {
   await spec()
        .withMethod('GET')
        .withPath('/api/users?page=2') 
        .expectStatus(200)
})

it('learn baseurl2', async () => {
    await spec()
         .withMethod('GET')
         .withPath('/api/unknown/2') 
         .expectStatus(200)
 })

 it('learn baseurl override', async () => {
    await spec()
         .withMethod('GET')
         .withPath('https://randomuser.me/api') 
         .expectStatus(200)
 })