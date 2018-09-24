const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {

    var db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('shailesh', '25')
        expect(spy).toHaveBeenCalledWith('shailesh', '25');
    });

    it('should call saveUser with user object', () => {
        var email = 'shailesh.sakhare@brillio.com';
        var password = 'sadas';
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({ email, password });
    });

});
