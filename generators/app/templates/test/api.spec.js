import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/server'

chai.should()
chai.use(chaiHttp)

describe('api', () => {

	describe('/', () => {
		it('should say hello', async () => {
			const result = await chai.request(app).get('/')
			result.should.have.status(200)
			result.should.be.json
			result.body.greetings.should.eq('hello!')
		})
	})

})
