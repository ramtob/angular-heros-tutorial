import { MessageState } from './message.state';
import { Message } from '../../models/message.model';

import {Action} from '@ngrx/store';

export const CREATE_MESSAGE = '[Message] CREATE_MESSAGE';
export const GET_MESSAGES = '[Message] GET_MESSAGES';

export class GetMessages implements Action {
  readonly type = GET_MESSAGES;
}

export class CreateMessage implements Action {
  readonly type = CREATE_MESSAGE;

  constructor(public payload: Message) {}
}

export type All = GetMessages | CreateMessage;
