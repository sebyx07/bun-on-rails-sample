class ChannelConnection{
  private user?: ApplicationRecord;
  private currentUserId: number;
  async connect({ params: { id}}){
    this.user = await this.getUser(id)
    if(!this.user){
      this.connection.close()
    }
    this.currentUserId = this.user.id
  }

  async disconnect(){
    // cleanup
  }

  private getUser(id){
    return User.findBy({id })
  }
}

ChannelConnection.identifiedBy('currentUserId')