import {Message} from "../../models/message.model";


export interface MessageState extends Message {
  isGood: boolean;
}


export const initializeMessageState = function () {
  return {
    isGood: true
  };
};

export interface MessageListState {
  messages: MessageState[];
  isGood: boolean;
}

export const  intializeMessageListState = function(){
  return {
    isGood: true
  };
};
