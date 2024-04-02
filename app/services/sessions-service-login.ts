export class SessionsServiceLogin{
  private readonly email: string;
  private readonly password: string;
  constructor({email, password}) {
    this.email = email
    this.password = password
  }
  async login(){
    const user = await User.findBy({email: this.email})
    if(user?.authenticate(this.password)){
      return user
    }

    return false
  }
}