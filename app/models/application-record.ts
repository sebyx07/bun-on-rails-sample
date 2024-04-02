class ApplicationRecord{
  static async findBy(params : object) : Promise<ApplicationRecord|undefined>  {
    // implementation
  }

  static async all() : Promise<ApplicationRecord[]> {

  }

  static hasSecurePassword() {

  }

  authenticate(pass){
    // implementation
  }
}