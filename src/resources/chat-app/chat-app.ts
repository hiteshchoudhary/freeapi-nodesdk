// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as MessagesAPI from './messages';
import * as ChatsAPI from './chats/chats';

export class ChatApp extends APIResource {
  chats: ChatsAPI.Chats = new ChatsAPI.Chats(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
}

export namespace ChatApp {
  export import Chats = ChatsAPI.Chats;
  export import ChatListResponse = ChatsAPI.ChatListResponse;
  export import Messages = MessagesAPI.Messages;
  export import MessageDeleteResponse = MessagesAPI.MessageDeleteResponse;
}
