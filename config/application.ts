export class Application{
  configure(config){
    config.timeZone = 'UTC';
    config.language = 'en';
    config.i18n.loadPaths = ['config/locales'];
  }
}