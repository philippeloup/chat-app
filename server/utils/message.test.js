var expect = require('expect');

const app = require('./../server');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Admin'
    var text = 'Welcome to the chat app'
    var message = generateMessage(from,text);
    expect(message.from).toEqual(from);
    expect(message.text).toEqual(text);
    expect(typeof message.createdAt).toEqual('number')
  });
});

describe('generateLocationMessage',() => {
  it('should generate correct location object', () => {
    var from = 'Admin';
    var longitude = 1;
    var message = generateLocationMessage(from, longitude, longitude);
    expect(message.url).toEqual('https:www.google.com/maps?q=1,1')
  });
});
