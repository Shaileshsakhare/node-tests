var request = require('supertest');
var expect = require('expect');

var app = require('./server').app;
describe('Server', () => {
    describe('#GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page Not Found',
                    })
                })
                .end(done);
        });
    });
    describe('#GET /Users', () => {
        it('should return user infromation', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    console.log(res.body);
                    expect(res.body[0]).toInclude({
                        name: 'Shailesh Sakhare'
                    })
                })
                .end(done)
        });
    });
});