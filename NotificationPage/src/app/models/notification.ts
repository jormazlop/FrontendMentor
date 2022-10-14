export class Notification {

  name: string;
  action: string;
  image: string;
  time: string;
  actived: boolean;
  privateMessage?: string;

  constructor(name: string = '', action: string = '', image: string = '', time: string = '', actived: boolean = true, privateMessage?: string) {
    this.name = name;
    this.action = action;
    this.image = image;
    this.time = time;
    this.actived = actived;
    this.privateMessage = privateMessage;
  }
}
