export class ConfigService{
  private urlService:string;

  constructor(){
    this.urlService = 'http://192.168.200.22:8090/service'
  }

  getUrlService():string {
    return this.urlService;
  }
}
