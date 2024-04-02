export default class DatabaseConfig{
  development(){
    this.username = 'root';
    this.password = '';
    this.database = 'development_db';
    this.host = 'localhost';
    this.adapter = 'pg';
  }

  test(){
    this.username = 'root';
    this.password = '';
    this.database = 'test_db';
    this.host = 'localhost';
    this.adapter = 'pg';
  }
}