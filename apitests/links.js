'use strict'

const request = require('supertest')
const should = require('should')
const redis = require('../app/lib/redis')
const app = require('../app')

describe('Links', async () => {
  describe('POST /link/add/', () => {

    it('Should respond 200', () => {
      const data = {
        usersLink: 'https://hackernoon.com/why-i-love-programming-c0985e261b4f'
      }
      return request(app)
        .post('/link/add/')
        .send(data)
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/)
        .then((res) => {
          should.exist(res.body.link)
        })
    })

    after(done => {
      redis.cleanDB()
        .then(() => done())
    })

    // it('Should raise 400', () => {
    //   const data = { // retry send the same link
    //     usersLink: 'https://hackernoon.com/why-i-love-programming-c0985e261b4f'
    //   }
    //   return request(app)
    //     .post('/link/add/')
    //     .send(data)
    //     .set('Accept', 'application/json')
    //     .expect(400)
    //     .expect('Content-Type', /json/)
    //     .then((res) => {
    //       should.exist(res.body.message)
    //     })
    // })
  })
})
