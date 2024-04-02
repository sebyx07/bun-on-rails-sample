// Schema Information
//
// Table name: users
//
//  id            : bigint         not null, primary key
//  name          : string         not null
//  email         : string         not null
//  password_digest : string         not null
//  created_at    : timestamp      not null
//  updated_at    : timestamp      not null
//  password      : string         not null

class User extends ApplicationRecord{
  public email: string | undefined;
  constructor(options = {}) {
    super();
    this.email = options.email;
  }

  public id: number;

  static tableName = 'users';
  static validations = {
    name: {
      presence: true,
      length: { minimum: 3 },
      on: ['create', 'update']
    },
    email: {
      presence: true,
      email: true
    },
    password: {
      presence: true,
      confirmation: true,
      length: { minimum: 6 }
    },
  }
}

User.hasSecurePassword();