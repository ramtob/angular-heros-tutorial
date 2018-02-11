import * as MessageActions from './message.action';
import {MessageState, initializeMessageState, MessageListState} from "./message.state";
import {Message} from "../../models/message.model";

export type Action = MessageActions.All;

const defaultMessageStates: MessageState[] = [
  {
    ...Message.generateMockInstance(),
    ...initializeMessageState()
  }
];

const defaultState: MessageListState = {
  messages: defaultMessageStates,
  isGood: true
};

export function MessageReducer(state = defaultState, action: Action) {
  console.log(state, action);

  switch (action.type)_{

  }
}
