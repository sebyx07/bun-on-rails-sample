export default class SendEmailsToAllUsersWorker{
  async perform(){
    const users = await User.all()
  }
}

SendEmailsToAllUsersWorker.queueOptions = {
  queue: 'mail',
}