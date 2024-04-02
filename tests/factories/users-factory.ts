export class UsersFactory{
  build(){
    return {
      name: 'John Doe',
      email: 'email@example.com',
      password: 'password'
    }
  }
}

FactoryBot.define('users', UsersFactory)