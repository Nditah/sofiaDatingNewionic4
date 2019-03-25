export class User {
    id: string;
    email: string;
    chatId: number;
    displayName: string;
    birthday: string;
    description: string;
    state: any;
    city: any;
    distance: any;
    smoking: any;
    relationship: any;
    appearance: any;
    style: any;
    children: any;
    education: any;
    job: any;
    religion: any;
    language: any;
    personality: any;
    hobby: any;
    music: any;
    image: any;
    gender: any;
    gallery: Array<any>;
    verified: boolean;
    onlineStatus: any;
    size: number;
    relation: string;
    new: boolean;
    read: boolean;
    age: number;
    css_style?: any;
    nameChanged: boolean;
  
    constructor(profile: any) {
      Object.keys(profile).forEach((key) => {
        this[key] = profile[key];
      });
    }
  
    public hasRequiredData() {
      if (this.displayName !== null
        && this.gender !== null
        && this.birthday !== null
        && this.city !== null
      ) {
        return true;
      }
      return false;
    }
  
    public getAge() {
      let birthday = new Date(this.birthday);
      let now = new Date();
      return (now.getFullYear() - birthday.getFullYear());
    }
  
  }
  