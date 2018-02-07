import {Message} from "../../models/message.model";


export interface MessageState extends Message {
  dummy: boolean;
}
