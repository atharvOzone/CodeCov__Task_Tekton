const assert = require('assert');
const server = require('./app');

describe('App', () => {
    it('Should return Hello From Atharv!!!', () => {
        assert.strictEqual(server(), 'Hello From Atharv!!!');
    }); 
});