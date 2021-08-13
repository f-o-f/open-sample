export class User {
    name: string;
    id: number;
    password: string;
  
    constructor(name:string, id:number, password:string) {
      this.name = name;
      this.id = id;
      this.password = password;
    }
  }