import Migration from "./migration.ts";

export default class CreateUsers2024012313 extends Migration {
  up(){
    this.createTable("users", function(table){
      table.string("name");
      table.string("email");
      table.string("passwordDigest");
    });

    this.addIndex("users", "email", { unique: true});
  }
}

CreateUsers2024012313.disableDDLTransaction = true;