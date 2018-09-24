const expect = require('expect');
const utils = require('./utils.js');

describe('Users', () => {
    describe('#Add', () => {
        it('should add two numbers', () => {
            const res = utils.add(10, 10);
            expect(res).toBe(20).toBeA('number');
        });
    });

    it('should square the number', () => {
        const res = utils.square(5);
        expect(res).toBe(25).toBeA('number');
    });

    it('should square the number asynchronously', (done) => {
        utils.squareAsync(3, (squareResult) => {
            expect(squareResult).toBe(9).toBeA('number');
            done();
        });
    });
});

it('should verify first name and last name are set', () => {
    let user = {
        age: 24,
        location: 'Beed'
    }
    let res = utils.setName(user, 'Shailesh Sakhare');
    expect(res).toInclude({
        firstName: 'Shailesh',
        lastName: 'Sakhare'
    });
    expect(res).toBeA('object');
});