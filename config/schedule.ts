import SendEmailsToAllUsersWorker from "../app/workers/send-emails-to-all-users-worker.ts";

export default class Schedule{
  schedule(){
    this.every('1h').perform(SendEmailsToAllUsersWorker)
  }
}