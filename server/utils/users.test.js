const expect = require('expect');

const {Users} = require('./users');


describe('Users',() =>{
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '2',
      name: 'Mike',
      room: 'Node Course'
    },{
      id: '3',
      name: 'Jen',
      room: 'Node Course'
    },{
      id: '5',
      name: 'Tailia',
      room: 'React Course'
    }]
  });

  it('should add new users', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andrew',
      room: 'The Office fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for node course', ()  => {
    var userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Mike', 'Jen'])
  });
  it('should return names for react course', ()  => {
    var userList = users.getUserList('React Course');
    expect(userList).toEqual(['Tailia'])
  });

  it('should remove a user', () => {
    var userId = '2';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);

  });

  it('should not remove user', () => {
    var userId = '9999';
    var user = users.removeUser(userId);

    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);

  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toEqual(userId);
  });


  it('should not find user', () => {
    var userId = '200202';
    var user = users.getUser(userId);

    expect(user).toBeFalsy();
  });
});
