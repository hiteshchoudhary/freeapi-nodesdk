// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as MessagesAPI from './messages';
import { MessageDeleteResponse, Messages } from './messages';
import * as ChatsAPI from './chats/chats';
import { ChatListResponse, Chats } from './chats/chats';

export class ChatApp extends APIResource {
  chats: ChatsAPI.Chats = new ChatsAPI.Chats(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
}

ChatApp.Chats = Chats;
ChatApp.Messages = Messages;

export declare namespace ChatApp {
  export { Chats as Chats, type ChatListResponse as ChatListResponse };

  export { Messages as Messages, type MessageDeleteResponse as MessageDeleteResponse };
}
